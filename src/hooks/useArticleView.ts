"use client"

import { useEffect } from "react"

import { add_article_view } from "@server/actions/articles/add_article_view"

export function useArticleView(path: string) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      add_article_view(path)
    }, 5_000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [path])
}
