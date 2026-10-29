import { Metadata } from "next"
import { notFound } from "next/navigation"

import { get_product_by_slug } from "@actions"

import { ProductDetail } from "./productDetail"

type ProductPageProps = {
  params: Promise<{ product_id: string }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { product_id } = await params
  const product = await get_product_by_slug(product_id)
  if (!product) return {}
  return { title: product.titleEn }
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { product_id } = await params
  const product = await get_product_by_slug(product_id)

  if (!product) notFound()

  return <ProductDetail product={product} />
}
