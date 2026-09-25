"use client"

import { useEffect } from "react"

import {
  ThemeProvider as NextThemesProvider,
  useTheme,
} from "next-themes"

import { ThemePreference, WithReactChildren } from "@types"

type ThemeProviderProps = WithReactChildren & {
  initialTheme?: ThemePreference
}

export function ThemeProvider({
  children,
  initialTheme,
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <ThemeSync initialTheme={initialTheme} />
      {children}
    </NextThemesProvider>
  )
}

// Applies the signed-in player's stored theme preference on
// mount, so it follows them across devices/browsers instead of
// each one keeping its own independent localStorage value.
function ThemeSync({
  initialTheme,
}: {
  initialTheme?: ThemePreference
}) {
  const { setTheme } = useTheme()

  useEffect(() => {
    if (initialTheme) setTheme(initialTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTheme])

  return null
}
