import {
  pgTable,
  uniqueIndex,
  text,
  integer,
  date,
  json,
  serial,
} from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const posts = pgTable(
  "posts",
  {
    path: text().default("/"),
    views: integer().default(0).notNull(),
    date: date().default("2026-06-28").notNull(),
    description: text().default("Description").notNull(),
    title: text().default("Title").notNull(),
    tags: json().default([]).notNull(),
    lang: text().default("en").notNull(),
    id: serial().primaryKey().notNull(),
  },
  (table) => [
    uniqueIndex("path_idx").using(
      "btree",
      table.path.asc().nullsLast().op("text_ops"),
    ),
  ],
)
