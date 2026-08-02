CREATE TABLE "article_votes" (
	"id" serial PRIMARY KEY NOT NULL,
	"article_id" integer NOT NULL,
	"player_id" integer NOT NULL,
	"value" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "comment_votes" (
	"id" serial PRIMARY KEY NOT NULL,
	"comment_id" integer NOT NULL,
	"player_id" integer NOT NULL,
	"value" integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "article_vote_idx" ON "article_votes" USING btree ("article_id","player_id");--> statement-breakpoint
CREATE UNIQUE INDEX "comment_vote_idx" ON "comment_votes" USING btree ("comment_id","player_id");