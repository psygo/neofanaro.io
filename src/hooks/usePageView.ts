"use client"

import { useEffect } from "react"

import { add_page_view } from "@server/actions/analytics/add_page_view"

export function usePageView(path: string) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      add_page_view(path)
    }, 5_000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [path])
}
