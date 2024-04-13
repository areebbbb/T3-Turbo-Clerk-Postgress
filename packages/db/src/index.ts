import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2/promise";

import { env } from "./config";
import * as auth from "./schema/auth";
import * as post from "./schema/post";

export const schema = { ...auth, ...post };

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

const mySql = await createConnection({
  host: env.DB_HOST!,
  user: env.DB_USERNAME!,
  password: env.DB_PASSWORD!,
  database: env.DB_NAME!,
});

export const db = drizzle(mySql, { schema, mode: "default" });
