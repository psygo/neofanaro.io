"use client"

import { useArticleView } from "@/src/hooks/useArticleView"

type PostViewTrackerProps = {
  path: string
}

export function PostViewTracker({
  path,
}: PostViewTrackerProps) {
  useArticleView(path)

  return <></>
}
