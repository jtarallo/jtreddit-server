import { Field, InputType } from "type-graphql";

@InputType()
export class UserLoginInput {
  @Field()
  emailOrUsername: string;

  @Field()
  password: string;
}
