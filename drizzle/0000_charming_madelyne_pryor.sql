-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "posts" (
	"path" text DEFAULT '',
	"views" integer DEFAULT 0 NOT NULL,
	"date" date DEFAULT '2026-06-28' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"title" text DEFAULT '' NOT NULL,
	"tags" json DEFAULT '[]'::json NOT NULL,
	"lang" text DEFAULT 'en' NOT NULL,
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "path_idx" ON "posts" USING btree ("path" text_ops);
*/