"use client"

import Link from "next/link"

import { ProductFromDb } from "@types"

import { containerOutline } from "@styles"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { formatPrice } from "./formatPrice"
import { useStore } from "./storeProvider"

export function Store() {
  const lang = useLang()
  const { products, cart } = useStore()

  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm text-gray-600 dark:text-slate-400">
        {lang === "pt"
          ? "Esta é uma prévia da loja — nenhum pagamento é processado de verdade ainda."
          : "This is a store preview — no payment is actually processed yet."}
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            lang={lang}
            inCart={(cart[product.id] ?? 0) > 0}
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
}

function ProductCard({
  product,
  lang,
  inCart,
}: ProductCardProps) {
  return (
    <Link
      href={`/store/${product.slug}`}
      className={`${containerOutline} flex cursor-pointer flex-col gap-3`}
    >
      <h3 className="text-md font-bold sm:text-lg">
        {localizedText(
          product.titleEn,
          product.titlePt,
          lang,
        )}
      </h3>
      <p className="grow text-sm text-gray-600 dark:text-slate-300">
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
      <div className="flex items-center justify-between gap-2 border-t border-gray-200 pt-3 dark:border-slate-700">
        <p className="font-bold whitespace-nowrap">
          {formatPrice(product.priceCents, lang)}
        </p>
        {inCart && (
          <p className="text-xs text-gray-500 dark:text-slate-400">
            {lang === "pt" ? "No carrinho" : "In cart"}
          </p>
        )}
      </div>
    </Link>
  )
}
