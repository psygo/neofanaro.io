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

export type OrderWithItems = {
  orderNumber: string
  status: string
  totalCents: number
  items: {
    productId: number
    quantity: number
    unitPriceCents: number
    titleEn: string
    titlePt: string
  }[]
}
