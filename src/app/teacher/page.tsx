import { Suspense } from "react"

import { Main } from "@/src/components/common/main"

import {
  CourseSection,
  GoProfPresentationSection,
} from "./teacher"

export default function Teacher() {
  return (
    <Main>
      <Suspense>
        <GoProfPresentationSection />
        <CourseSection />
      </Suspense>
    </Main>
  )
}
