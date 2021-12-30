import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

const mikroCfg = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[jt]s$/, // regex pattern for the migration files
  },
  entities: [Post, User],
  dbName: "jtreddit",
  type: "postgresql", // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];

export default mikroCfg;
