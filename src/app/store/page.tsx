import { Metadata } from "next"

import { Store } from "./store"

// No access check here on purpose — the nav icon only shows up for
// moderators (see nav.tsx), but the page itself stays reachable by
// anyone with the direct link, same as any other page on the site.
export const metadata: Metadata = {
  title: "Store",
}

export default function StorePage() {
  return <Store />
}
