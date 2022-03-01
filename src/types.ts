import { Request, Response } from "express";
import Redis from "ioredis";
import { createUpvoteLoader } from "./utils/createUpvoteLoader";
import { createUserLoader } from "./utils/createUserLoader";

export type MyContext = {
  redis: Redis.Redis;
  req: Request & { session: Express.Session };
  res: Response;
  upvoteLoader: ReturnType<typeof createUpvoteLoader>;
  userLoader: ReturnType<typeof createUserLoader>;
};
