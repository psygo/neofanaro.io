"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import { SiteTheme, WithReactChildren } from "@types"

const SITE_THEME_STORAGE_KEY = "site-theme"

type SiteThemeContextValue = {
  siteTheme: SiteTheme
  setSiteTheme: (theme: SiteTheme) => void
}

const SiteThemeContext =
  createContext<SiteThemeContextValue>({
    siteTheme: "default",
    setSiteTheme: () => {},
  })

type SiteThemeProviderProps = WithReactChildren & {
  initialSiteTheme?: SiteTheme
}

// Mirrors <ThemeProvider>, but for the site's visual theme
// (colors/shapes) instead of light/dark mode — toggles a
// `theme-<name>` class on <html> that the `neo:` (etc.) Tailwind
// variants in globals.css key off of. Signed-in players get their
// choice server-rendered via `initialSiteTheme` (see the blocking
// script in layout.tsx for the no-flash version); signed-out
// visitors fall back to localStorage.
export function SiteThemeProvider({
  initialSiteTheme,
  children,
}: SiteThemeProviderProps) {
  const [siteTheme, setSiteThemeState] =
    useState<SiteTheme>(initialSiteTheme ?? "default")

  useEffect(() => {
    if (initialSiteTheme) return
    const stored = window.localStorage.getItem(
      SITE_THEME_STORAGE_KEY,
    )
    if (stored === "default" || stored === "neobrutalist")
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from an external system (localStorage) on mount, the sanctioned use case for this pattern
      setSiteThemeState(stored)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle(
      "theme-neobrutalist",
      siteTheme === "neobrutalist",
    )
  }, [siteTheme])

  function setSiteTheme(theme: SiteTheme) {
    setSiteThemeState(theme)
    window.localStorage.setItem(
      SITE_THEME_STORAGE_KEY,
      theme,
    )
  }

  return (
    <SiteThemeContext.Provider
      value={{ siteTheme, setSiteTheme }}
    >
      {children}
    </SiteThemeContext.Provider>
  )
}

export function useSiteTheme(): SiteThemeContextValue {
  return useContext(SiteThemeContext)
}
