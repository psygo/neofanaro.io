CREATE TABLE "divisions" (
	"id" serial PRIMARY KEY NOT NULL,
	"league_id" integer NOT NULL,
	"title" text NOT NULL
);
--> statement-breakpoint
DROP INDEX "league_player_idx";--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-08-01';--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "date" SET DEFAULT '2026-08-01';--> statement-breakpoint
ALTER TABLE "games" ADD COLUMN "division_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "league_players" ADD COLUMN "division_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "leagues" ADD COLUMN "title_en" text NOT NULL;--> statement-breakpoint
ALTER TABLE "leagues" ADD COLUMN "title_pt" text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "division_player_idx" ON "league_players" USING btree ("division_id","player_id");--> statement-breakpoint
ALTER TABLE "games" DROP COLUMN "league_id";--> statement-breakpoint
ALTER TABLE "league_players" DROP COLUMN "league_id";--> statement-breakpoint
ALTER TABLE "leagues" DROP COLUMN "title";