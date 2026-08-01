CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"path" text DEFAULT '/' NOT NULL,
	"date" date DEFAULT '2026-08-01' NOT NULL,
	"title_en" text DEFAULT 'Title' NOT NULL,
	"title_pt" text DEFAULT 'Título' NOT NULL,
	"description_en" text DEFAULT 'Description' NOT NULL,
	"description_pt" text DEFAULT 'Descrição' NOT NULL,
	"views" integer DEFAULT 0 NOT NULL,
	"tags" json DEFAULT '[]'::json NOT NULL,
	"draft" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
DROP TABLE "posts" CASCADE;--> statement-breakpoint
CREATE UNIQUE INDEX "path_idx" ON "articles" USING btree ("path");