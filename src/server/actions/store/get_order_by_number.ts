"use server"

import { eq } from "drizzle-orm"

import {
  db,
  ordersTable,
  orderItemsTable,
  productsTable,
} from "@db"
import { getCurrentPlayer } from "@server/auth/session"
import { OrderWithItems } from "@types"

export async function get_order_by_number(
  orderNumber: string,
): Promise<OrderWithItems | null> {
  const player = await getCurrentPlayer()
  if (!player) return null

  const [order] = await db
    .select()
    .from(ordersTable)
    .where(eq(ordersTable.orderNumber, orderNumber))

  if (!order || order.playerId !== player.id) return null

  const items = await db
    .select({
      productId: orderItemsTable.productId,
      quantity: orderItemsTable.quantity,
      unitPriceCents: orderItemsTable.unitPriceCents,
      titleEn: productsTable.titleEn,
      titlePt: productsTable.titlePt,
    })
    .from(orderItemsTable)
    .innerJoin(
      productsTable,
      eq(orderItemsTable.productId, productsTable.id),
    )
    .where(eq(orderItemsTable.orderId, order.id))

  return {
    orderNumber: order.orderNumber,
    status: order.status,
    totalCents: order.totalCents,
    items,
  }
}
