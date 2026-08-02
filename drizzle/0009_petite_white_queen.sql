CREATE TABLE "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"article_id" integer NOT NULL,
	"player_id" integer NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "date" SET DEFAULT '2026-08-02';--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "title_pt" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "description_pt" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-08-02';--> statement-breakpoint
ALTER TABLE "articles" ADD COLUMN "langs" json DEFAULT '["en"]'::json NOT NULL;