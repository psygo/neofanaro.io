import { NextResponse } from "next/server"

import { eq } from "drizzle-orm"
import Stripe from "stripe"

import { db, ordersTable } from "@db"
import { stripe } from "@server/payments/stripe"

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!,
    )
  } catch {
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 },
    )
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      const session = event.data
        .object as Stripe.Checkout.Session
      const orderId = session.metadata?.orderId
      if (orderId) {
        await db
          .update(ordersTable)
          .set({
            status: "paid",
            stripePaymentIntentId:
              typeof session.payment_intent === "string"
                ? session.payment_intent
                : null,
          })
          .where(eq(ordersTable.id, Number(orderId)))
      }
      break
    }
    case "checkout.session.expired":
    case "checkout.session.async_payment_failed": {
      const session = event.data
        .object as Stripe.Checkout.Session
      const orderId = session.metadata?.orderId
      if (orderId) {
        await db
          .update(ordersTable)
          .set({ status: "failed" })
          .where(eq(ordersTable.id, Number(orderId)))
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
