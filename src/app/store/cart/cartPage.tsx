"use client"

import { useState } from "react"

import Link from "next/link"

import { containerOutline } from "@styles"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { formatPrice } from "../formatPrice"
import { primaryButtonClasses } from "../storeHeader"
import { useStore } from "../storeProvider"

const quantityButtonClasses =
  "flex size-6 cursor-pointer items-center justify-center rounded-md border border-gray-300 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"

export function CartPage() {
  const lang = useLang()
  const {
    products,
    cart,
    cartTotalCents,
    cartError,
    setQuantity,
    checkout,
  } = useStore()
  const [processing, setProcessing] = useState(false)

  const items = products.filter(
    (product) => (cart[product.id] ?? 0) > 0,
  )

  async function handleCheckout() {
    setProcessing(true)
    const checkoutUrl = await checkout()
    if (!checkoutUrl) {
      setProcessing(false)
      return
    }
    // Hands off to Stripe's own hosted page; it redirects back to
    // /store/success (or /store on cancel) once the player is done.
    window.location.href = checkoutUrl
  }

  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      <h1 className="text-2xl font-black">
        {lang === "pt" ? "Carrinho" : "Cart"}
      </h1>
      {cartError === "not_signed_in" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {lang === "pt" ? (
            <>
              Você precisa{" "}
              <Link href="/sign-in" className="underline">
                entrar na sua conta
              </Link>{" "}
              para usar o carrinho.
            </>
          ) : (
            <>
              You need to{" "}
              <Link href="/sign-in" className="underline">
                sign in
              </Link>{" "}
              to use the cart.
            </>
          )}
        </p>
      )}
      {items.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-slate-400">
          {lang === "pt"
            ? "Seu carrinho está vazio."
            : "Your cart is empty."}
        </p>
      ) : (
        <div
          className={`${containerOutline} flex flex-col gap-4`}
        >
          <div className="flex flex-col gap-3">
            {items.map((product) => {
              const quantity = cart[product.id] ?? 0
              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold">
                      {localizedText(
                        product.titleEn,
                        product.titlePt,
                        lang,
                      )}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      {formatPrice(
                        product.priceCents,
                        lang,
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(
                          product.id,
                          quantity - 1,
                        )
                      }
                      className={quantityButtonClasses}
                    >
                      −
                    </button>
                    <span className="w-4 text-center text-sm">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(
                          product.id,
                          quantity + 1,
                        )
                      }
                      className={quantityButtonClasses}
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-slate-700">
            <p className="font-semibold">
              {lang === "pt" ? "Total" : "Total"}
            </p>
            <p className="font-bold">
              {formatPrice(cartTotalCents, lang)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={processing}
            className={`${primaryButtonClasses} self-end`}
          >
            {processing
              ? lang === "pt"
                ? "Processando..."
                : "Processing..."
              : lang === "pt"
                ? "Finalizar compra"
                : "Checkout"}
          </button>
        </div>
      )}
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
