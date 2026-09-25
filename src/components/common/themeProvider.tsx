"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

import { WithReactChildren } from "@types"

export function ThemeProvider({
  children,
}: WithReactChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  )
}
