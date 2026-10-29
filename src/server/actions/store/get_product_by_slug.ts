"use server"

import { eq } from "drizzle-orm"

import { ProductFromDb } from "@types"

import { db, productsTable } from "@db"

export async function get_product_by_slug(
  slug: string,
): Promise<ProductFromDb | undefined> {
  const [product] = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.slug, slug))
    .limit(1)

  return product as ProductFromDb | undefined
}
