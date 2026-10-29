CREATE TABLE "cart_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "order_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer NOT NULL,
	"unit_price_cents" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"player_id" integer,
	"order_number" text NOT NULL,
	"total_cents" integer NOT NULL,
	"status" text DEFAULT 'mock_completed' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "orders_order_number_unique" UNIQUE("order_number")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title_en" text NOT NULL,
	"title_pt" text NOT NULL,
	"description_en" text NOT NULL,
	"description_pt" text NOT NULL,
	"price_cents" integer NOT NULL,
	"tags" json DEFAULT '[]'::json NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "articles" ALTER COLUMN "date" SET DEFAULT '2026-10-26';--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-10-26';--> statement-breakpoint
CREATE UNIQUE INDEX "cart_item_idx" ON "cart_items" USING btree ("player_id","product_id");