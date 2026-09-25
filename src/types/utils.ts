import { type ReactNode } from "react"

export type WithReactChildren = {
  children: ReactNode
}

export enum OrderBy {
  date,
  views,
}

export type SortDirection = "asc" | "desc"

export type ArticleFont = "geist" | "latex"

export type ThemePreference = "light" | "dark" | "system"
