export type ProductFromDb = {
  id: number
  slug: string
  titleEn: string
  titlePt: string
  descriptionEn: string
  descriptionPt: string
  priceCents: number
  tags: string[]
  active: boolean
}

export type CartItemWithProduct = {
  productId: number
  quantity: number
  product: ProductFromDb
}
