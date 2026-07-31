import type { Metadata } from "next"

import "@utils"

import { WithReactChildren } from "@types"

import { geistMono, geistSans } from "@styles"
import "@styles"

import { getCurrentPlayer, topLevelMetadata } from "@server"

import { Nav } from "@components/common/nav"
import { Footer } from "@components/common/footer"
import { CpiSuspense } from "@components/common/cpiSuspense"

export const metadata: Metadata = topLevelMetadata

export default async function RootLayout({
  children,
}: WithReactChildren) {
  const player = await getCurrentPlayer()

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col gap-16 bg-gray-50 px-4 py-5.5 sm:gap-10">
        <CpiSuspense>
          <Nav player={player} />
          {children}
          <Footer />
        </CpiSuspense>
      </body>
    </html>
  )
}
