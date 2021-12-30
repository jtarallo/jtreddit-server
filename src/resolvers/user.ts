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
  @Mutation(() => User, { nullable: true })
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
  ): Promise<User | null> {
    const hashedPassword = await argon2.hash(options.password);
    const user = em.create(User, {
      username: options.username,
      password: hashedPassword,
    });
    await em.persistAndFlush(user);
    return user;
  }

  @Query(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: MyContext
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
