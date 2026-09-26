CREATE TABLE "daily_views" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"views" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "daily_views_date_idx" ON "daily_views" USING btree ("date");