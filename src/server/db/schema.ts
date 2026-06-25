import {
  integer,
  pgTable,
  varchar,
} from "drizzle-orm/pg-core"

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  path: varchar({ length: 255 }).primaryKey(),
  views: integer().notNull(),
})
