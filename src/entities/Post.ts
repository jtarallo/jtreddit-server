import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Upvote } from "./Upvote";
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

  @Field()
  @ManyToOne(() => User, (user) => user.posts)
  poster: User;

  @Field() // expose to graphql schema for reference
  @Column()
  posterId: string;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Upvote, (upvote) => upvote.post)
  upvotes: Upvote[];

  @Field()
  @Column()
  text!: string;

  @Field()
  @Column()
  title!: string;

  @Field(() => Int, { nullable: true })
  voteStatus: 1 | -1 | null; // upvoted, downvoted, not voted
}
