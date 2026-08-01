"use client"

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"

import { ArticleFromDb } from "../types/article"
import { WithReactChildren } from "../types/utils"

type ArticlesContext = {
  articles: ArticleFromDb[]
  setArticles: Dispatch<SetStateAction<ArticleFromDb[]>>
  allTags: string[]
}

const ArticlesContext =
  createContext<ArticlesContext | null>(null)

type ArticlesProviderProps = WithReactChildren & {
  initialArticles: ArticleFromDb[]
}

export function ArticlesProvider({
  initialArticles,
  children,
}: ArticlesProviderProps) {
  const [articles, setArticles] =
    useState<ArticleFromDb[]>(initialArticles)

  const allTags = Array.from(
    new Set(initialArticles.flatMap((a) => a.tags)),
  ).sort()

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, allTags }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}

export function useArticles() {
  const context = useContext(ArticlesContext)

  if (!context)
    throw new Error(
      "`useArticles` must be used within an `ArticlesProvider`.",
    )

  return context
}
