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
  ObjectType,
} from "type-graphql";
import { v4 } from "uuid";
import { Post } from "../entities/Post";
import { MyContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];
  @Field()
  hasMore: boolean;
}

@InputType()
class PostInput {
  @Field()
  text: string;
  @Field()
  title: string;
}

@Resolver(Post)
export class PostResolver {
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

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;
    const posts = await getConnection().query(
      `SELECT p.*, 
      json_build_object('email',u.email, 'id', u.id, 'username', u.username) poster
      FROM post p 
      INNER JOIN public.user u ON u.id = p."posterId" ${
        cursor ? `WHERE p."createdAt" < '${cursor}'` : ""
      }
      ORDER BY p."createdAt" DESC LIMIT ${realLimitPlusOne}`
    );
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length > realLimit,
    };
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

  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.length > 90 ? `${root.text.slice(0, 90)}...` : root.text;
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
}
