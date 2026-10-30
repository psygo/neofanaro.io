"use client"

import { createContext, useContext, useState } from "react"

import {
  CartItemWithProduct,
  ProductFromDb,
  WithReactChildren,
} from "@types"

import {
  add_to_cart,
  checkout as checkoutAction,
  set_cart_quantity,
} from "@actions"

type Cart = Record<number, number>

type StoreContextValue = {
  products: ProductFromDb[]
  cart: Cart
  cartCount: number
  cartTotalCents: number
  signedIn: boolean
  cartError: "not_signed_in" | null
  addToCart: (productId: number) => void
  setQuantity: (productId: number, quantity: number) => void
  // Resolves to the Stripe Checkout URL to redirect to, or null on
  // failure (cartError is set in that case).
  checkout: () => Promise<string | null>
}

const StoreContext =
  createContext<StoreContextValue | null>(null)

type StoreProviderProps = {
  products: ProductFromDb[]
  initialCart: CartItemWithProduct[]
  signedIn: boolean
} & WithReactChildren

// Shared across every /store/* page (via layout.tsx) so adding an
// item from a product's own detail page and checking out from the
// listing page act on the same cart, instead of each page getting
// its own throwaway state. The cart itself lives in the
// `cart_items` table — this just mirrors it locally so the UI can
// update instantly without waiting on every request.
export function StoreProvider({
  products,
  initialCart,
  signedIn,
  children,
}: StoreProviderProps) {
  const [cart, setCart] = useState<Cart>(() =>
    Object.fromEntries(
      initialCart.map((item) => [
        item.productId,
        item.quantity,
      ]),
    ),
  )
  const [cartError, setCartError] = useState<
    "not_signed_in" | null
  >(null)

  function addToCart(productId: number) {
    if (!signedIn) {
      setCartError("not_signed_in")
      return
    }
    setCart((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }))
    void add_to_cart(productId)
  }

  function setQuantity(
    productId: number,
    quantity: number,
  ) {
    if (!signedIn) {
      setCartError("not_signed_in")
      return
    }
    setCart((current) => {
      if (quantity <= 0) {
        const next = { ...current }
        delete next[productId]
        return next
      }
      return { ...current, [productId]: quantity }
    })
    void set_cart_quantity(productId, quantity)
  }

  async function checkout(): Promise<string | null> {
    const result = await checkoutAction()
    if (result.errorCode) {
      if (result.errorCode === "not_signed_in")
        setCartError("not_signed_in")
      return null
    }
    setCart({})
    return result.checkoutUrl ?? null
  }

  const cartCount = Object.values(cart).reduce(
    (sum, qty) => sum + qty,
    0,
  )
  const cartTotalCents = products.reduce(
    (sum, product) =>
      sum + (cart[product.id] ?? 0) * product.priceCents,
    0,
  )

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        cartCount,
        cartTotalCents,
        signedIn,
        cartError,
        addToCart,
        setQuantity,
        checkout,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore(): StoreContextValue {
  const context = useContext(StoreContext)
  if (!context)
    throw new Error(
      "useStore must be used within a StoreProvider",
    )
  return context
}
