import "reflect-metadata";
import "dotenv-safe/config";
import cors from "cors";
import { COOKIE_NAME, __prod__ } from "./constants";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from "path";
import { Upvote } from "./entities/Upvote";
import { createUserLoader } from "./utils/createUserLoader";
import { createUpvoteLoader } from "./utils/createUpvoteLoader";

const main = async () => {
  // sql
  await createConnection({
    entities: [Post, Upvote, User],
    migrations: [path.join(__dirname, "./migrations/*")],
    logging: true,
    synchronize: !__prod__, // no migrations needed, use in dev
    type: "postgres",
    url: process.env.DATABASE_URL,
  });

  // express
  const app = express();

  // cors
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use(cors(corsOptions));

  // redis middleware
  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.set("proxy", __prod__ ? 1 : 0);

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET!,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        secure: __prod__, // cookie only works in https
        sameSite: "lax", // csrf
        domain: __prod__ ? ".jtreddit.com" : undefined,
      },
    })
  );

  // apollo middleware
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      upvoteLoader: createUpvoteLoader(),
      userLoader: createUserLoader(),
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: { origin: process.env.CORS_ORIGIN },
  });

  app.listen(parseInt(process.env.PORT!), () => {
    console.log(`server running on port ${process.env.PORT}`);
  });
};

main();
