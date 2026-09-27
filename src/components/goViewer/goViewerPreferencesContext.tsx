"use client"

import { createContext, useContext } from "react"

import { GoViewerPreferences } from "./goViewerTheme"

const defaultGoViewerPreferences: GoViewerPreferences = {
  background: "auto",
  blackStone: "auto",
  whiteStone: "auto",
  font: "auto",
}

const GoViewerPreferencesContext =
  createContext<GoViewerPreferences>(
    defaultGoViewerPreferences,
  )

// Wrap the app (or any subtree) with this to make the signed-in
// player's board-appearance preferences available to every
// <GoViewerBoard> underneath, without threading them through each
// article file — mirrors how <ThemeProvider> makes the light/dark
// preference ambient instead of a prop everywhere.
export function GoViewerPreferencesProvider({
  preferences,
  children,
}: {
  preferences?: Partial<GoViewerPreferences>
  children: React.ReactNode
}) {
  const value: GoViewerPreferences = {
    ...defaultGoViewerPreferences,
    ...preferences,
  }

  return (
    <GoViewerPreferencesContext.Provider value={value}>
      {children}
    </GoViewerPreferencesContext.Provider>
  )
}

export function useGoViewerPreferences(): GoViewerPreferences {
  return useContext(GoViewerPreferencesContext)
}
