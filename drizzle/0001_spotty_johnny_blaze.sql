ALTER TABLE "posts" ALTER COLUMN "path" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "path" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "path" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "date" SET DEFAULT '2026-06-28T12:08:59.929Z';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "title" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "description" SET DEFAULT '';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "tags" SET DEFAULT '[]'::json;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "views" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "lang" text DEFAULT 'en' NOT NULL;