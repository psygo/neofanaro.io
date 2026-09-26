"use client"

import { usePathname } from "next/navigation"

import { usePageView } from "@/src/hooks/usePageView"

export function PageViewTracker() {
  const pathname = usePathname()

  usePageView(pathname)

  return <></>
}
