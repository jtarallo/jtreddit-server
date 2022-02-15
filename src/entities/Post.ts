import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column({ type: "int", default: 0 })
  points!: number;

  @ManyToOne(() => User, (user) => user.posts)
  poster: User;

  @Field() // expose to graphql schema for reference
  @Column()
  posterId: string;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  text!: string;

  @Field()
  @Column()
  title!: string;
}
