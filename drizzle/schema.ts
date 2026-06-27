import { pgTable, integer, text, date, json } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const posts = pgTable("posts", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "posts_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	path: text().notNull(),
	views: integer().notNull(),
	date: date().notNull(),
	description: text().notNull(),
	title: text().notNull(),
	tags: json().notNull(),
});
