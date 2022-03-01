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
import { Upvote } from "../entities/Upvote";
import { User } from "../entities/User";

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
  @FieldResolver(() => User)
  poster(@Root() post: Post, @Ctx() { userLoader }: MyContext) {
    return userLoader.load(post.posterId);
  }

  @FieldResolver(() => String)
  textSnippet(@Root() root: Post) {
    return root.text.length > 90 ? `${root.text.slice(0, 90)}...` : root.text;
  }

  @FieldResolver(() => Int)
  async voteStatus(
    @Root() post: Post,
    @Ctx() { upvoteLoader, req }: MyContext
  ) {
    if (!req.session.userId) {
      return null;
    }
    const upvote = await upvoteLoader.load({
      postId: post.id,
      userId: req.session.userId,
    });
    return upvote ? upvote.value : null;
  }

  @Mutation(() => Post, { nullable: true })
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg("id") id: string,
    @Ctx() { req }: MyContext
  ): Promise<Post | null> {
    const userId = req.session.userId;
    const post = await Post.findOne(id);
    if (!post || post.posterId !== userId) {
      return null;
    }
    await Post.delete(id);
    return post;
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
    @Arg("id") id: string,
    @Arg("input") input: PostInput,
    @Ctx() { req }: MyContext
  ): Promise<Post | undefined> {
    await getConnection()
      .createQueryBuilder()
      .update(Post)
      .set({ ...input })
      .where('id = :id and "posterId" = :posterId', {
        id,
        posterId: req.session.userId,
      })
      .execute();
    return await Post.findOne(id);
  }

  @Mutation(() => Boolean)
  async vote(
    @Arg("postId", () => String) postId: string,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ) {
    const { userId } = req.session;
    const addValue = value > 0 ? 1 : -1;
    const vote = await Upvote.findOne({
      where: { postId, userId },
    });
    try {
      if (vote && vote.value !== addValue) {
        // user already voted,
        // update vote & post's points
        await getConnection()
          .transaction(async (transactionManager) => {
            await transactionManager.query(`UPDATE upvote 
              SET value=${addValue} 
              WHERE "userId" = '${userId}' 
              AND  "postId"='${postId}';`);

            await transactionManager.query(
              `UPDATE post SET points = points + (${
                addValue * 2
              }) WHERE id='${postId}';`
            );
          })
          .catch(() => {
            return false;
          });
        return true;
      } else if (vote && vote.value === addValue) {
        // user voted with same value.
        // do nothing
        return false;
      }
      // user hasn't voted.
      // add vote & add point to post
      await getConnection()
        .transaction(async (transactionManager) => {
          await transactionManager.query(
            `INSERT INTO upvote ("userId", "postId", value) VALUES ('${userId}', '${postId}', ${addValue})`
          );

          await transactionManager.query(
            `UPDATE post SET points = points + (${addValue}) WHERE id='${postId}';`
          );
        })
        .catch(() => {
          console.log("Failed transaction.");
          return false;
        });
    } catch (error) {
      throw new Error(error.message);
    }
    return true;
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg("id") id: string): Promise<Post | undefined> {
    return await Post.findOne(id);
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedPosts> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const posts = await getConnection().query(
      `SELECT p.*
       FROM post p 
       ${cursor ? `WHERE p."createdAt" < '${cursor}'` : ""}
       ORDER BY p."createdAt" DESC LIMIT ${realLimitPlusOne}`
    );
    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length > realLimit,
    };
  }
}
