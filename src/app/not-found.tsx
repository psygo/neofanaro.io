import { NotFoundMessage } from "@components/not-found/notFoundMessage"
import { CpiSuspense } from "@components/common/cpiSuspense"

export default function NotFound() {
  return (
    <CpiSuspense>
      <NotFoundMessage />
    </CpiSuspense>
  )
}
