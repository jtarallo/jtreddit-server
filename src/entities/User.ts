import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field(() => Date)
  @Property()
  createdAt: Date = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  email!: string;

  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Property({ type: "text" })
  password!: string;

  @Field(() => Date)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;
}
