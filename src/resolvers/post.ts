import {
  Arg,
  Query,
  Resolver,
  Mutation,
  InputType,
  Field,
  Ctx,
  UseMiddleware,
  Int,
  FieldResolver,
  Root,
} from "type-graphql";
import { v4 } from "uuid";
import { Post } from "../entities/Post";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
class PostInput {
  @Field()
  text: string;
  @Field()
  title: string;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.length > 90 ? `${root.text.slice(0, 90)}...` : root.text;
  }

  @Query(() => [Post])
  posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<Post[]> {
    const qb = getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
      .orderBy('"createdAt"', "DESC")
      .take(Math.min(50, limit));
    if (cursor) {
      qb.where('"createdAt" < :cursor', { cursor: new Date(cursor) });
    }
    return qb.getMany();
  }

  @Query(() => Post, { nullable: true })
  post(@Arg("id") id: number): Promise<Post | undefined> {
    return Post.findOne(id);
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  createPost(
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post> {
    return Post.create({
      id: v4(),
      ...input,
      posterId: req.session.userId,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg("id") id: number,
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post | null> {
    const post = await Post.findOne(id);
    if (!post) return null;
    if (post.posterId !== req.session.userId) {
      throw new Error("Forbidden");
    }
    Object.assign(post, input);
    await Post.update(id, post);
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async deletePost(@Arg("id") id: number): Promise<Post | null> {
    const post = await Post.findOne(id);
    if (!post) {
      return null;
    }
    await Post.delete(id);
    return post;
  }
}
