ALTER TABLE "articles" ALTER COLUMN "date" SET DEFAULT '2026-10-30';--> statement-breakpoint
ALTER TABLE "games" ALTER COLUMN "date" SET DEFAULT '2026-10-30';--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "status" SET DEFAULT 'pending';--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "stripe_checkout_session_id" text;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "stripe_payment_intent_id" text;