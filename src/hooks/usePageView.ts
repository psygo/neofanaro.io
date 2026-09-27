"use client"

import { useEffect } from "react"

import { add_page_view } from "@server/actions/analytics/add_page_view"

import { isLocalhost } from "@utils"

export function usePageView(path: string) {
  useEffect(() => {
    if (isLocalhost()) return

    const timer = window.setTimeout(() => {
      add_page_view(path)
    }, 5_000)

    return () => {
      window.clearTimeout(timer)
    }
  }, [path])
}
