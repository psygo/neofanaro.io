"use client"

import { useEffect } from "react"

import { post_view } from "@server/actions/posts/post_posts"

export function usePostView(path: string) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      post_view(path)
    }, 5_000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [path])
}
