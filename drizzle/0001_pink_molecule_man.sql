CREATE TABLE "games" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date DEFAULT '2026-07-31' NOT NULL,
	"ratingBlack" integer NOT NULL,
	"ratingDiffBlack" integer NOT NULL,
	"ratingWhite" integer NOT NULL,
	"ratingDiffWhite" integer NOT NULL,
	"handicapStones" integer,
	"handicapPoints" real,
	"komi" real,
	"result" text DEFAULT '' NOT NULL,
	"ogsLink" text,
	"aiSenseiLink" text,
	"youtubeLink" text,
	"twitchLink" text,
	"reviewed" boolean DEFAULT false,
	"black_id" integer NOT NULL,
	"white_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "players" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text DEFAULT '' NOT NULL,
	"email" text,
	"nick" text DEFAULT '' NOT NULL,
	"description" text,
	"rating" integer DEFAULT 0 NOT NULL,
	"password_hash" text,
	CONSTRAINT "players_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"token" text NOT NULL,
	"player_id" integer NOT NULL,
	"expires_at" timestamp NOT NULL,
	CONSTRAINT "sessions_token_unique" UNIQUE("token")
);
--> statement-breakpoint
DROP INDEX "path_idx";--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "path" SET DEFAULT '/';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "path" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "date" SET DEFAULT '2026-07-31';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "description" SET DEFAULT 'Description';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "title" SET DEFAULT 'Title';--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "draft" boolean DEFAULT true NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "path_idx" ON "posts" USING btree ("path");