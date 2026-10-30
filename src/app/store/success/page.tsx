import { get_order_by_number } from "@actions"

import { OrderConfirmation } from "./orderConfirmation"

type StoreSuccessPageProps = {
  searchParams: Promise<{ order?: string }>
}

export default async function StoreSuccessPage({
  searchParams,
}: StoreSuccessPageProps) {
  const { order: orderNumber } = await searchParams
  const order = orderNumber
    ? await get_order_by_number(orderNumber)
    : null

  return (
    <OrderConfirmation
      order={order}
      orderNumber={orderNumber}
    />
  )
}
