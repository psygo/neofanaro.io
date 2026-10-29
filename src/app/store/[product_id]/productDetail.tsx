"use client"

import Link from "next/link"

import { ProductFromDb } from "@types"

import { containerOutline } from "@styles"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { formatPrice } from "../formatPrice"
import { primaryButtonClasses } from "../storeHeader"
import { useStore } from "../storeProvider"

type ProductDetailProps = {
  product: ProductFromDb
}

export function ProductDetail({
  product,
}: ProductDetailProps) {
  const lang = useLang()
  const { cart, addToCart } = useStore()
  const quantityInCart = cart[product.id] ?? 0

  return (
    <section className="flex flex-col gap-4">
      <Link
        href="/store"
        className="text-sm text-gray-600 hover:underline dark:text-slate-400"
      >
        {lang === "pt"
          ? "← Voltar à loja"
          : "← Back to store"}
      </Link>
      <div
        className={`${containerOutline} flex flex-col gap-4`}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-black sm:text-2xl">
            {localizedText(
              product.titleEn,
              product.titlePt,
              lang,
            )}
          </h1>
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
        </div>
        <p className="text-gray-700 dark:text-slate-300">
          {localizedText(
            product.descriptionEn,
            product.descriptionPt,
            lang,
          )}
        </p>
        <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4 dark:border-slate-700">
          <p className="text-xl font-bold">
            {formatPrice(product.priceCents, lang)}
          </p>
          <div className="flex items-center gap-3">
            {quantityInCart > 0 && (
              <p className="text-sm text-gray-600 dark:text-slate-400">
                {lang === "pt"
                  ? `${quantityInCart} no carrinho`
                  : `${quantityInCart} in cart`}
              </p>
            )}
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              className={primaryButtonClasses}
            >
              {lang === "pt" ? "Adicionar" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
