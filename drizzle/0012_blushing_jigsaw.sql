ALTER TABLE "articles" ALTER COLUMN "date" SET DEFAULT '2026-09-20';--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-09-20';--> statement-breakpoint
ALTER TABLE "players" ADD COLUMN "article_font" text DEFAULT 'default' NOT NULL;