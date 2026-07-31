import { relations } from "drizzle-orm"
import {
  boolean,
  date,
  integer,
  json,
  pgTable,
  real,
  serial,
  text,
  timestamp,
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
  moderator: boolean().default(false).notNull(),
  name: text().default("").notNull(),
  email: text().unique(),
  nick: text().default("").notNull(),
  ogsLink: text(),
  description: text(),
  rating: integer().default(0).notNull(),
  passwordHash: text("password_hash"),
})

export const playersRelations = relations(
  players,
  ({ many }) => ({
    games: many(gamesTable),
    sessions: many(sessionsTable),
  }),
)

export const sessionsTable = pgTable("sessions", {
  id: serial().primaryKey(),
  token: text().notNull().unique(),
  playerId: integer("player_id").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
})

export const sessionsRelations = relations(
  sessionsTable,
  ({ one }) => ({
    player: one(players, {
      fields: [sessionsTable.playerId],
      references: [players.id],
    }),
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
  handicapStones: integer(),
  handicapPoints: real(),
  komi: real(),
  result: text().default("").notNull(),
  ogsLink: text(),
  aiSenseiLink: text(),
  youtubeLink: text(),
  twitchLink: text(),
  reviewed: boolean().default(false),
  leagueFeatured: boolean("league_featured")
    .default(false)
    .notNull(),
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

// export const leaguesTable = pgTable("leagues", {
//   // Metadata
//   id: serial().primaryKey(),
//   date: date().notNull().default(todayDate()),
//   title: text(),
//   group: text(),
//   // Relationships
//   gameId: integer("game_id").notNull(),
// })

// export const leaguesRelations = relations(
//   leaguesTable,
//   ({ one }) => ({
//     game: one(gamesTable, {
//       fields: [leaguesTable.gameId],
//       references: [gamesTable.id],
//     }),
//   }),
// )
