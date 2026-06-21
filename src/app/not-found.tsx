import { Suspense } from "react"

import { NotFoundMessage } from "../components/not-found/notFoundMessage"

export default function NotFound() {
  return (
    <Suspense>
      <NotFoundMessage />
    </Suspense>
  )
}
