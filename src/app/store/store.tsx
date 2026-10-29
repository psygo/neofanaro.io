"use client"

import Link from "next/link"

import { ProductFromDb } from "@types"

import { containerOutline } from "@styles"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { formatPrice } from "./formatPrice"
import { primaryButtonClasses } from "./storeHeader"
import { useStore } from "./storeProvider"

// A mock storefront: the cart and "checkout" (see storeHeader.tsx)
// are entirely client-side state, nothing is charged or persisted
// anywhere. Real payments need, at least:
//   - A `stripe` server-side SDK call (Checkout Session or Payment
//     Intent) instead of the fake `setTimeout` in storeHeader.tsx.
//   - A webhook endpoint to confirm payment and fulfill the order
//     (e.g. emailing the PDF, unlocking lesson credits).
//   - A real price source of truth server-side (never trust a
//     client-submitted amount) — already true here: products, cart
//     and orders live in the database (see schema.ts).
//   - A Stripe publishable key client-side and secret key server-side
//     (test-mode keys are enough to try the flow end-to-end).
export function Store() {
  const lang = useLang()
  const { products, cart, addToCart } = useStore()

  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm text-gray-600 dark:text-slate-400">
        {lang === "pt"
          ? "Esta é uma prévia da loja — nenhum pagamento é processado de verdade ainda."
          : "This is a store preview — no payment is actually processed yet."}
      </p>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            lang={lang}
            inCart={(cart[product.id] ?? 0) > 0}
            onAddToCart={() => addToCart(product.id)}
          />
        ))}
      </div>
    </section>
  )
}

type ProductCardProps = {
  product: ProductFromDb
  lang: string
  inCart: boolean
  onAddToCart: () => void
}

function ProductCard({
  product,
  lang,
  inCart,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div
      className={`${containerOutline} flex flex-row items-center justify-between gap-4`}
    >
      <Link
        href={`/store/${product.slug}`}
        className="flex flex-col gap-2"
      >
        <h3 className="text-md font-bold hover:underline sm:text-lg">
          {localizedText(
            product.titleEn,
            product.titlePt,
            lang,
          )}
        </h3>
        <p className="text-sm text-gray-600 dark:text-slate-300">
          {localizedText(
            product.descriptionEn,
            product.descriptionPt,
            lang,
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-2xl border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <p className="font-bold whitespace-nowrap">
          {formatPrice(product.priceCents, lang)}
        </p>
        <button
          type="button"
          onClick={onAddToCart}
          className={primaryButtonClasses}
        >
          {inCart
            ? lang === "pt"
              ? "Adicionar outra"
              : "Add another"
            : lang === "pt"
              ? "Adicionar"
              : "Add to cart"}
        </button>
      </div>
    </div>
  )
}
