import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroCfg from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";

const main = async () => {
  // sql
  const orm = await MikroORM.init(mikroCfg);
  await orm.getMigrator().up();
  // express
  const app = express();

  // cors
  const corsOptions = {
    origin: "https://studio.apollographql.com",
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  app.use(cors(corsOptions));

  // redis middleware
  const RedisStore = connectRedis(session);
  const redis = new Redis();

  let store = new RedisStore({
    client: redis,
    disableTouch: true,
  });

  app.use(
    session({
      name: "qid",
      store,
      saveUninitialized: false,
      secret: "djsadusaodsadasdiodsa38hiudsaid",
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        secure: __prod__, // cookie only works in https
        sameSite: "lax", // csrf
      },
    })
  );

  // apollo middleware
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ em: orm.em, req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Express running on port 4000;");
  });
};

main();
