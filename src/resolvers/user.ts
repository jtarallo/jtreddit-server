import argon2 from "argon2";
import { User } from "../entities/User";
import { Arg, Resolver, Mutation, Ctx, Query } from "type-graphql";
import { MyContext } from "../types";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";
import { validateRegistration } from "../utils/validateRegistration";
import { UserInput } from "../types/UserInput";
import { FieldError } from "../types/FieldError";
import { UserResponse } from "../types/UserResponse";
import { UserLoginInput } from "../types/UserLoginInput";
import { sendEmail } from "../utils/sendEmail";
import { v4 } from "uuid";
import { validateChangePassword } from "../utils/validateChangePassword";

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("password") password: string,
    @Ctx() { redis, req }: MyContext
  ): Promise<UserResponse> {
    const redisToken = `${FORGET_PASSWORD_PREFIX}${token}`;
    const userId = (await redis.get(redisToken)) || "";

    // validate
    const errors = validateChangePassword(password, userId);
    if (errors.length) {
      return { errors };
    }

    const user = await User.findOne(parseInt(userId));
    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "User no longer exists",
          },
        ],
      };
    }
    user.password = await argon2.hash(password);
    await User.update(user.id, { password: user.password });

    // remove redis token for no reuses
    redis.del(redisToken);

    // log in user after change password
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { redis }: MyContext
  ) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return true;
    }

    const token = v4();
    await redis.set(
      `${FORGET_PASSWORD_PREFIX}${token}`,
      user.id,
      "ex",
      1000 * 60 * 60 * 24 * 3
    );

    sendEmail(
      email,
      "Recover your password",
      `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
    );
    return true;
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UserLoginInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const { emailOrUsername, password } = options;

    const user = await User.findOne({
      where: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
    var isValid = true;
    if (!user) {
      isValid = false;
    } else {
      isValid = await argon2.verify(user.password, password);
    }

    if (isValid && user) {
      // save cookie to persist login
      req.session.userId = user.id;
      return { user };
    } else {
      const error = new FieldError();
      error.field = "username";
      error.message = "Error with username and/or password.";
      return {
        errors: [error],
      };
    }
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UserInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const { email, username, password } = options;

    const errors = validateRegistration(options);
    if (errors.length) {
      return { errors };
    }

    const foundUser = await User.findOne({ where: [{ username }, { email }] });
    if (foundUser)
      return {
        errors: [
          {
            field: foundUser.email === email ? "email" : "username",
            message: `${
              foundUser.email === email ? `Email` : `Username`
            } already taken`,
          },
        ],
      };

    // validations ok, create user
    const hashedPassword = await argon2.hash(password);
    const user = User.create({
      id: v4(),
      email,
      username,
      password: hashedPassword,
    });
    try {
      await user.save();
      // save cookie to persist login
      req.session.userId = user.id;
      return { user };
    } catch (err) {
      return {
        errors: [
          {
            field: "Unknown",
            message: "Unknown error occured. Try again later",
          },
        ],
      };
    }
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | null> {
    if (!req.session.userId) {
      return null;
    }
    return User.findOne(req.session.userId);
  }
}
