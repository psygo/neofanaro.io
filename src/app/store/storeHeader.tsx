"use client"

import { useState } from "react"

import Link from "next/link"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { Modal } from "@components/common/modal"

import { formatPrice } from "./formatPrice"
import { useStore } from "./storeProvider"

const primaryButtonClasses =
  "cursor-pointer rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
const secondaryButtonClasses =
  "cursor-pointer rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"

type CheckoutStatus = "idle" | "processing" | "success"

export function StoreHeader() {
  const lang = useLang()
  const { cartCount, cartError, checkout } = useStore()
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutStatus, setCheckoutStatus] =
    useState<CheckoutStatus>("idle")
  const [orderNumber, setOrderNumber] = useState<
    string | null
  >(null)

  async function handleCheckout() {
    setCheckoutStatus("processing")
    const result = await checkout()
    if (!result) {
      setCheckoutStatus("idle")
      return
    }
    setOrderNumber(result)
    setCheckoutStatus("success")
  }

  function closeCart() {
    setCartOpen(false)
    if (checkoutStatus === "success") {
      setCheckoutStatus("idle")
      setOrderNumber(null)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-black">
          {lang === "pt" ? "Loja" : "Store"}
        </h1>
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className={`${secondaryButtonClasses} flex items-center gap-2`}
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
        </button>
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
      <Modal
        open={cartOpen}
        onClose={closeCart}
        title={
          checkoutStatus === "success"
            ? lang === "pt"
              ? "Pedido confirmado"
              : "Order confirmed"
            : lang === "pt"
              ? "Carrinho"
              : "Cart"
        }
      >
        {checkoutStatus === "success" ? (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-700 dark:text-slate-300">
              {lang === "pt"
                ? "Pedido fictício registrado. Número do pedido:"
                : "Mock order placed. Order number:"}
            </p>
            <p className="font-mono text-lg font-bold">
              {orderNumber}
            </p>
            <button
              type="button"
              onClick={closeCart}
              className={primaryButtonClasses}
            >
              {lang === "pt" ? "Fechar" : "Close"}
            </button>
          </div>
        ) : (
          <CartContents
            lang={lang}
            processing={checkoutStatus === "processing"}
            onCheckout={handleCheckout}
          />
        )}
      </Modal>
    </div>
  )
}

type CartContentsProps = {
  lang: string
  processing: boolean
  onCheckout: () => void
}

function CartContents({
  lang,
  processing,
  onCheckout,
}: CartContentsProps) {
  const { products, cart, cartTotalCents, setQuantity } =
    useStore()
  const items = products.filter(
    (product) => (cart[product.id] ?? 0) > 0,
  )

  if (items.length === 0) {
    return (
      <p className="text-sm text-gray-600 dark:text-slate-400">
        {lang === "pt"
          ? "Seu carrinho está vazio."
          : "Your cart is empty."}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-4">
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
                  {formatPrice(product.priceCents, lang)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(product.id, quantity - 1)
                  }
                  className={`${secondaryButtonClasses} px-2 py-0.5`}
                >
                  −
                </button>
                <span className="w-4 text-center text-sm">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(product.id, quantity + 1)
                  }
                  className={`${secondaryButtonClasses} px-2 py-0.5`}
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
        onClick={onCheckout}
        disabled={processing}
        className={primaryButtonClasses}
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
  )
}

export { primaryButtonClasses, secondaryButtonClasses }
