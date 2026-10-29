import { WithReactChildren } from "@types"

import { get_cart, get_products } from "@actions"
import { getCurrentPlayer } from "@server/auth/session"
import { Main } from "@components/common/main"

import { StoreHeader } from "./storeHeader"
import { StoreProvider } from "./storeProvider"

// Wraps every /store/* page — the listing and each product's own
// page — so they share one cart (via StoreProvider) and the same
// header/checkout UI (via StoreHeader) instead of each page getting
// its own throwaway cart.
export default async function StoreLayout({
  children,
}: WithReactChildren) {
  const [products, cart, player] = await Promise.all([
    get_products(),
    get_cart(),
    getCurrentPlayer(),
  ])

  return (
    <Main>
      <StoreProvider
        products={products}
        initialCart={cart}
        signedIn={!!player}
      >
        <StoreHeader />
        {children}
      </StoreProvider>
    </Main>
  )
}
