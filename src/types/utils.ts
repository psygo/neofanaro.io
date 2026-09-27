import { type ReactNode } from "react"

export type WithReactChildren = {
  children: ReactNode
}

export enum OrderBy {
  date,
  views,
}

export type SortDirection = "asc" | "desc"

export type ArticleFont =
  | "geist"
  | "latex"
  | "newcm"
  | "garamond"

export type ArticleFontSize = "small" | "medium" | "large"

export type ThemePreference = "light" | "dark" | "system"

// "auto" resolves differently depending on light/dark site theme —
// see resolveGoViewerTheme in @components/goViewer/exports.
export type GoViewerBackgroundPreference =
  | "auto"
  | "transparent"
  | "bookish"
  | "desert"
  | "hikaru"
  | "kaya"

export type GoViewerStonePreference =
  | "auto"
  | "bookish"
  | "desert"
  | "hikaru"
  | "kaya"

export type GoViewerFontPreference =
  | "auto"
  | "sans"
  | "mono"
  | "serif"
  | "latex"
  | "newcm"
  | "garamond"
