CREATE TABLE "posts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "posts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"path" text NOT NULL,
	"date" date NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"tags" json NOT NULL,
	"views" integer NOT NULL
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;