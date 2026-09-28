import type { Metadata } from "next"

import "@utils"

import {
  SiteTheme,
  ThemePreference,
  WithReactChildren,
} from "@types"

import {
  geistMono,
  geistSans,
  latexFont,
  newComputerModernFont,
} from "@styles"
import "@styles"

import { getCurrentPlayer, topLevelMetadata } from "@server"

import { Nav } from "@components/common/nav"
import { Footer } from "@components/common/footer"
import { CpiSuspense } from "@components/common/cpiSuspense"
import { PageViewTracker } from "@components/common/pageViewTracker"
import { ThemeProvider } from "@components/common/themeProvider"
import { SiteThemeProvider } from "@components/common/siteThemeProvider"
import {
  GoViewerPreferencesProvider,
  toGoViewerPreferences,
} from "@components/goViewer/exports"

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

const siteThemes: SiteTheme[] = ["default", "neobrutalist"]

function toSiteTheme(
  siteTheme: string,
): SiteTheme | undefined {
  return siteThemes.find((option) => option === siteTheme)
}

export default async function RootLayout({
  children,
}: WithReactChildren) {
  const player = await getCurrentPlayer()
  const initialSiteTheme = player
    ? toSiteTheme(player.siteTheme)
    : undefined

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${latexFont.variable} ${newComputerModernFont.variable} h-full antialiased ${initialSiteTheme === "neobrutalist" ? "theme-neobrutalist" : ""}`}
    >
      <body className="flex min-h-full flex-col gap-12 bg-gray-50 px-4 py-5.5 text-slate-950 sm:gap-10 dark:bg-slate-950 dark:text-slate-50">
        {!player && (
          // A signed-in player's site theme is already applied above,
          // server-rendered — this only covers signed-out visitors,
          // whose preference only lives in localStorage, and needs to
          // land before first paint to avoid a flash back to default.
          <script
            dangerouslySetInnerHTML={{
              __html: `try{if(localStorage.getItem("site-theme")==="neobrutalist")document.documentElement.classList.add("theme-neobrutalist")}catch(e){}`,
            }}
          />
        )}
        <ThemeProvider
          initialTheme={
            player
              ? toThemePreference(player.theme)
              : undefined
          }
        >
          <SiteThemeProvider
            initialSiteTheme={initialSiteTheme}
          >
            <PageViewTracker />
            <GoViewerPreferencesProvider
              preferences={
                player
                  ? toGoViewerPreferences({
                      background: player.goViewerBackground,
                      blackStone: player.goViewerBlackStone,
                      whiteStone: player.goViewerWhiteStone,
                      font: player.goViewerFont,
                    })
                  : undefined
              }
            >
              <CpiSuspense>
                <Nav player={player} />
                {children}
                <Footer />
              </CpiSuspense>
            </GoViewerPreferencesProvider>
          </SiteThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
