import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "./config";
import * as auth from "./schema/auth";
import * as post from "./schema/post";

export const schema = { ...auth, ...post };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const mySql = postgres({
  host: env.DB_HOST,
  database: env.DB_NAME,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
});

export const db = drizzle(mySql, { schema });
