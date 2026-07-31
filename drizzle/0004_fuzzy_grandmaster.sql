CREATE TABLE "league_players" (
	"id" serial PRIMARY KEY NOT NULL,
	"league_id" integer NOT NULL,
	"player_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leagues" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"start_date" date
);
--> statement-breakpoint
ALTER TABLE "games" ADD COLUMN "league_id" integer NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "league_player_idx" ON "league_players" USING btree ("league_id","player_id");