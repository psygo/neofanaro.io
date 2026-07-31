import { relations } from "drizzle-orm"
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
    path: text().notNull().default("/"),
    date: date().notNull().default(todayDate()),
    title: text().notNull().default("Title"),
    description: text().notNull().default("Description"),
    lang: text().notNull().default("en"),
    views: integer().notNull().default(0),
    tags: json().notNull().default([]),
    draft: boolean().notNull().default(true),
  },
  (table) => [uniqueIndex("path_idx").on(table.path)],
)

export const players = pgTable("players", {
  id: serial().primaryKey(),
  name: text().default("").notNull(),
  email: text().unique(),
  nick: text().default("").notNull(),
  rating: integer().default(0).notNull(),
})

export const playersRelations = relations(
  players,
  ({ many }) => ({
    games: many(gamesTable),
  }),
)

export const gamesTable = pgTable("games", {
  // Metadata
  id: serial().primaryKey(),
  date: date().notNull().default(todayDate()),
  // Game Data
  ratingBlack: integer().notNull(),
  ratingDiffBlack: integer().notNull(),
  ratingWhite: integer().notNull(),
  ratingDiffWhite: integer().notNull(),
  result: text().default("").notNull(),
  ogsLink: text(),
  aiSenseiLink: text(),
  youtubeLink: text(),
  twitchLink: text(),
  reviewed: boolean().default(false),
  // Relationships
  blackId: integer("black_id").notNull(),
  whiteId: integer("white_id").notNull(),
})

export const gamesRelations = relations(
  gamesTable,
  ({ one }) => ({
    black: one(players, {
      fields: [gamesTable.blackId],
      references: [players.id],
    }),
    white: one(players, {
      fields: [gamesTable.whiteId],
      references: [players.id],
    }),
  }),
)
