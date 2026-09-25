ALTER TABLE "articles" ALTER COLUMN "date" SET DEFAULT '2026-09-25';--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-09-25';--> statement-breakpoint
ALTER TABLE "players" ADD COLUMN "theme" text DEFAULT 'system' NOT NULL;