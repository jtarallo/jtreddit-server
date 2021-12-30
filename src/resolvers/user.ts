import argon2 from "argon2";
import { User } from "../entities/User";
import {
  Arg,
  Field,
  InputType,
  Resolver,
  Mutation,
  Ctx,
  ObjectType,
  Query,
} from "type-graphql";
import { MyContext } from "../types";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: MyContext): Promise<User | null> {
    if (!req.session.userId) {
      return null;
    }
    return em.findOne(User, { id: req.session.userId });
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const { username, password } = options;

    // basic validations
    const errors = [];
    if (options.username.length < 4)
      errors.push({
        field: "username",
        message: "User name is too short",
      });

    if (options.password.length < 6)
      errors.push({
        field: "password",
        message: "Password is too short",
      });

    const foundUser = await em.findOne(User, { username });
    if (foundUser)
      errors.push({
        field: "username",
        message: "Username already taken",
      });

    if (errors.length) return { errors };

    // validations ok, create user
    const hashedPassword = await argon2.hash(password);
    const user = em.create(User, {
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

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em, req }: MyContext
  ): Promise<UserResponse> {
    const { username } = options;
    const user = await em.findOne(User, { username });
    var isValid = true;
    if (!user) {
      isValid = false;
    } else {
      isValid = await argon2.verify(user.password, options.password);
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
}
