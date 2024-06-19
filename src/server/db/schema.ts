import { relations, sql } from "drizzle-orm"
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

import { standardNanoid } from "./nanoid"

export const createTable = pgTableCreator(
  (name) => `neofanaro.io_${name}`,
)

function idCols() {
  return {
    id: serial("id").primaryKey(),
    nanoId: varchar("nano_id", { length: 256 })
      .unique()
      .notNull()
      .$defaultFn(() => standardNanoid()),
  }
}

function dateTimeCols() {
  return {
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  }
}

function imageUrlCol() {
  return {
    imageUrl: varchar("image_url", { length: 1_024 }),
  }
}

export const users = createTable(
  "users",
  {
    // IDs
    ...idCols(),
    clerkId: varchar("clerk_id", { length: 256 })
      .unique()
      .notNull(),
    username: varchar("username", { length: 256 })
      .unique()
      .notNull(),
    email: varchar("email", { length: 256 })
      .unique()
      .notNull(),
    // DB Metadata
    ...dateTimeCols(),
    // Data
    firstName: varchar("first_name", { length: 256 }),
    lastName: varchar("last_name", { length: 256 }),
    ...imageUrlCol(),
  },
  (table) => ({
    usersNanoidIdx: index("users_nano_id_idx").on(
      table.nanoId,
    ),
    usernameIdx: index("username_idx").on(table.username),
    clerkIdIdx: index("clerk_id_idx").on(table.clerkId),
  }),
)

export const usersRelations = relations(
  users,
  ({ many }) => ({
    comments: many(comments),
  }),
)

export const comments = createTable("comments", {
  // IDs
  ...idCols(),
  // Metadata
  ...dateTimeCols(),
  // Data
  content: varchar("content", {
    length: 4096,
  }).notNull(),
  // Relationships
  commenterId: varchar("commenter_id").notNull(),
})

export const commentsRelations = relations(
  comments,
  ({ one }) => ({
    commenter: one(users, {
      fields: [comments.commenterId],
      references: [users.clerkId],
    }),
  }),
)
