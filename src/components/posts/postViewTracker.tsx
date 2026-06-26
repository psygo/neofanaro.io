"use client"

import { usePostView } from "@hooks/postView"

type PostViewTrackerProps = {
  path: string
}

export function PostViewTracker({
  path,
}: PostViewTrackerProps) {
  usePostView(path)

  return <></>
}
