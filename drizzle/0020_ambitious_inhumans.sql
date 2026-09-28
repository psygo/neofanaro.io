ALTER TABLE "articles" ALTER COLUMN "date" SET DEFAULT '2026-09-28';--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-09-28';--> statement-breakpoint
ALTER TABLE "players" ADD COLUMN "site_theme" text DEFAULT 'default' NOT NULL;