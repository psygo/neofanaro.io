// "use client"

import { Suspense } from "react"

import { Main } from "@components/main"
import { PresentationSection } from "@components/home/presentationSection"

import { GoProfPresentationSection } from "./teacher/teacher"
import { SoftwareWorkSection } from "./software/software"

export default function Home() {
  return (
    <Main>
      <Suspense>
        <PresentationSection />
        <SoftwareWorkSection />
        <GoProfHomePresentationSection />
      </Suspense>
    </Main>
  )
}

// ---------------------------------------------------------
// Presentation Section

// ---------------------------------------------------------
// Go Prof Home Presentation Section

function GoProfHomePresentationSection() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <GoProfPresentationSection />
    </div>
  )
}

// ---------------------------------------------------------
