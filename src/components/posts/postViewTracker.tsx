"use client"

import { usePostView } from "@/src/hooks/usePostView"

type PostViewTrackerProps = {
  path: string
}

export function PostViewTracker({
  path,
}: PostViewTrackerProps) {
  usePostView(path)

  return <></>
}
