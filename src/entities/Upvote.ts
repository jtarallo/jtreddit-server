import { ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType()
@Entity()
export class Upvote extends BaseEntity {
  @ManyToOne(() => User, (user) => user.upvotes)
  user: User;

  @PrimaryColumn()
  userId: string;

  @ManyToOne(() => Post, (post) => post.upvotes)
  post: Post;

  @PrimaryColumn()
  postId: string;

  @Column({ type: "int" })
  value: number;
}
