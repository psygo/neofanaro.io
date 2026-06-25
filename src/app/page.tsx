import { Main } from "@components/common/main"
import { PresentationSection } from "@components/home/presentationSection"
import { CpiSuspense } from "@components/common/cpiSuspense"

import { GoProfPresentationSection } from "./teacher/teacher"
import { SoftwareWorkSection } from "./software/software"

export default function Home() {
  return (
    <Main>
      <CpiSuspense>
        <PresentationSection />
        <SoftwareWorkSection />
        <GoProfPresentationSection />
      </CpiSuspense>
    </Main>
  )
}
