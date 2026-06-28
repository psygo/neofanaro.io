import {
  date,
  integer,
  json,
  pgTable,
  text,
} from "drizzle-orm/pg-core"

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  path: text(),
  date: date().notNull(),
  title: text().notNull(),
  description: text().notNull(),
  views: integer().notNull(),
  tags: json().notNull(),
})
