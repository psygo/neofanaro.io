import { Suspense } from "react"

import { Main } from "@/src/components/common/main"
import { PresentationSection } from "@components/home/presentationSection"

import { GoProfPresentationSection } from "./teacher/teacher"
import { SoftwareWorkSection } from "./software/software"

export default function Home() {
  return (
    <Main>
      <Suspense>
        <PresentationSection />
        <SoftwareWorkSection />
        <GoProfPresentationSection />
      </Suspense>
    </Main>
  )
}
