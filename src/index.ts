import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import mikroCfg from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";

const main = async () => {
  // sql
  const orm = await MikroORM.init(mikroCfg);
  await orm.getMigrator().up();
  // express
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Express running on port 4000;");
  });
};

main();
