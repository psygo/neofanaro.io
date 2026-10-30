"use client"

import Link from "next/link"

import { OrderWithItems } from "@types"

import { containerOutline } from "@styles"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { formatPrice } from "../formatPrice"
import { primaryButtonClasses } from "../storeHeader"

type OrderConfirmationProps = {
  order: OrderWithItems | null
  orderNumber: string | undefined
}

export function OrderConfirmation({
  order,
  orderNumber,
}: OrderConfirmationProps) {
  const lang = useLang()

  if (!orderNumber || !order) {
    return (
      <section className="flex flex-col gap-4">
        <p className="text-gray-700 dark:text-slate-300">
          {lang === "pt"
            ? "Pedido não encontrado."
            : "Order not found."}
        </p>
        <Link
          href="/store"
          className="text-sm text-gray-600 hover:underline dark:text-slate-400"
        >
          {lang === "pt"
            ? "← Voltar à loja"
            : "← Back to store"}
        </Link>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-4">
      <div
        className={`${containerOutline} flex flex-col gap-4`}
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-black sm:text-2xl">
            {lang === "pt"
              ? "Pedido confirmado"
              : "Order confirmed"}
          </h1>
          <p className="font-mono text-sm text-gray-500 dark:text-slate-400">
            {order.orderNumber}
          </p>
        </div>
        {order.status === "pending" && (
          <p className="text-sm text-amber-600 dark:text-amber-400">
            {lang === "pt"
              ? "Confirmando pagamento com o Stripe... atualize a página em alguns segundos."
              : "Confirming payment with Stripe... refresh in a few seconds."}
          </p>
        )}
        {order.status === "failed" && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {lang === "pt"
              ? "O pagamento não foi concluído."
              : "Payment did not complete."}
          </p>
        )}
        <div className="flex flex-col gap-2">
          {order.items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between gap-3"
            >
              <p className="text-sm">
                {localizedText(
                  item.titleEn,
                  item.titlePt,
                  lang,
                )}{" "}
                × {item.quantity}
              </p>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                {formatPrice(
                  item.unitPriceCents * item.quantity,
                  lang,
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-slate-700">
          <p className="font-semibold">
            {lang === "pt" ? "Total" : "Total"}
          </p>
          <p className="font-bold">
            {formatPrice(order.totalCents, lang)}
          </p>
        </div>
      </div>
      <Link href="/store" className={primaryButtonClasses}>
        {lang === "pt" ? "Voltar à loja" : "Back to store"}
      </Link>
    </section>
  )
}
