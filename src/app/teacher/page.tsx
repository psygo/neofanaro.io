import { Main } from "@components/common/main"
import { CpiSuspense } from "@components/common/cpiSuspense"

import {
  CourseSection,
  GoProfPresentationSection,
} from "./teacher"

export default function Teacher() {
  return (
    <Main>
      <CpiSuspense>
        <GoProfPresentationSection />
        <CourseSection />
      </CpiSuspense>
    </Main>
  )
}
