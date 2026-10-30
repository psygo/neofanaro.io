"use client"

import Link from "next/link"

import { useLang } from "@hooks"

import { useStore } from "./storeProvider"

const primaryButtonClasses =
  "cursor-pointer rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
const secondaryButtonClasses =
  "cursor-pointer rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
// Shares the store product cards' own background (see
// containerOutline in @styles) so the cart button reads as part of
// the same surface instead of a one-off button style.
const cartButtonClasses =
  "flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"

export function StoreHeader() {
  const lang = useLang()
  const { cartCount, cartError } = useStore()

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-black">
          {lang === "pt" ? "Loja" : "Store"}
        </h1>
        <Link
          href="/store/cart"
          className={cartButtonClasses}
        >
          <svg
            aria-hidden
            className="size-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6" />
          </svg>
          <span>
            {lang === "pt" ? "Carrinho" : "Cart"}
            {cartCount > 0 ? ` (${cartCount})` : ""}
          </span>
        </Link>
      </div>
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
    </div>
  )
}

export {
  primaryButtonClasses,
  secondaryButtonClasses,
  cartButtonClasses,
}
