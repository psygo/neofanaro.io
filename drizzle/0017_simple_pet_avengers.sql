CREATE TABLE "daily_non_article_views" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"views" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "daily_site_views" (
	"id" serial PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"views" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "daily_non_article_views_date_idx" ON "daily_non_article_views" USING btree ("date");--> statement-breakpoint
CREATE UNIQUE INDEX "daily_site_views_date_idx" ON "daily_site_views" USING btree ("date");