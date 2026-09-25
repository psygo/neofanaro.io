import type { Metadata } from "next"

import "@utils"

import { ThemePreference, WithReactChildren } from "@types"

import { geistMono, geistSans, latexFont } from "@styles"
import "@styles"

import { getCurrentPlayer, topLevelMetadata } from "@server"

import { Nav } from "@components/common/nav"
import { Footer } from "@components/common/footer"
import { CpiSuspense } from "@components/common/cpiSuspense"
import { ThemeProvider } from "@components/common/themeProvider"

export const metadata: Metadata = topLevelMetadata

const themePreferences: ThemePreference[] = [
  "light",
  "dark",
  "system",
]

function toThemePreference(
  theme: string,
): ThemePreference | undefined {
  return themePreferences.find((option) => option === theme)
}

export default async function RootLayout({
  children,
}: WithReactChildren) {
  const player = await getCurrentPlayer()

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${latexFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col gap-16 bg-gray-50 px-4 py-5.5 text-slate-950 sm:gap-10 dark:bg-slate-950 dark:text-slate-50">
        <ThemeProvider
          initialTheme={
            player
              ? toThemePreference(player.theme)
              : undefined
          }
        >
          <CpiSuspense>
            <Nav player={player} />
            {children}
            <Footer />
          </CpiSuspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
