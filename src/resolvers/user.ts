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
import { sendEmail } from "src/utils/sendEmail";
import { v4 } from "uuid";

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async forgotPassword(
    @Arg("email") email: string,
    @Ctx() { em, redis }: MyContext
  ) {
    const user = await em.findOne(User, { email });
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
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const { emailOrUsername, password } = options;

    const user = await em.findOne(User, {
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
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
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const { email, username, password } = options;

    const errors = validateRegistration(options);
    if (errors.length) {
      return { errors };
    }

    const foundUser = await em.findOne(User, {
      $or: [{ username }, { email }],
    });
    if (foundUser)
      return {
        errors: [
          {
            field: "username",
            message: "Username or email already taken",
          },
        ],
      };

    // validations ok, create user
    const hashedPassword = await argon2.hash(password);
    const user = em.create(User, {
      email,
      username,
      password: hashedPassword,
    });
    try {
      await em.persistAndFlush(user);
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
  async me(@Ctx() { req, em }: MyContext): Promise<User | null> {
    if (!req.session.userId) {
      return null;
    }
    return em.findOne(User, { id: req.session.userId });
  }
}
