"use server"

import { eq } from "drizzle-orm"

import { ProductFromDb } from "@types"

import { db, productsTable } from "@db"

export async function get_products(): Promise<
  ProductFromDb[]
> {
  const products = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.active, true))

  return products as ProductFromDb[]
}
