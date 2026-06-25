import { Suspense } from "react"

import { CircularProgressIndicator } from "./circularProgressIndicator"

export function CpiSuspense({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<CircularProgressIndicator />}>
      {children}
    </Suspense>
  )
}
