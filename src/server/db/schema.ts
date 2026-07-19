import {
  boolean,
  date,
  integer,
  json,
  pgTable,
  serial,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core"

function todayDate() {
  return new Date().toLocaleDateString("en-CA")
}

export const postsTable = pgTable(
  "posts",
  {
    id: serial().primaryKey(),
    path: text().default("/"),
    date: date().notNull().default(todayDate()),
    title: text().notNull().default("Title"),
    description: text().notNull().default("Description"),
    lang: text().notNull().default("en"),
    views: integer().notNull().default(0),
    tags: json().notNull().default([]),
    draft: boolean().notNull().default(false),
  },
  (table) => [uniqueIndex("path_idx").on(table.path)],
)
