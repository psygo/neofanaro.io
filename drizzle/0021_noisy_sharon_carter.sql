ALTER TABLE "articles" ALTER COLUMN "date" SET DEFAULT '2026-10-20';--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-10-20';--> statement-breakpoint
ALTER TABLE "articles" ADD COLUMN "thumbnail_src" text;