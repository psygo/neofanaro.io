"use client"

import { useArticleView } from "@/src/hooks/useArticleView"

type ArticleViewTrackerProps = {
  path: string
}

export function ArticleViewTracker({
  path,
}: ArticleViewTrackerProps) {
  useArticleView(path)

  return <></>
}
