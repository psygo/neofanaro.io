"use client"

import { Suspense } from "react"

import Image from "next/image"

import { useLang } from "@hooks/useLang"

import { GoProfPresentationSection } from "./teacher/page"
import { SoftwareWorkSection } from "./software/page"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-80 flex-col gap-12 sm:max-w-4xl">
      <Suspense>
        <PresentationSection />
        <SoftwareWorkSection />
        <GoProfHomePresentationSection />
      </Suspense>
    </main>
  )
}

// ---------------------------------------------------------
// Presentation Section

function PresentationSection() {
  const lang = useLang()

  return (
    <section className="mx-auto flex flex-col items-center gap-5.5 px-4 py-6 sm:flex-row sm:gap-8 sm:px-7">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl font-extrabold sm:text-left sm:text-4xl">
          Philippe Fanaro
        </h2>
        {lang === "pt" ? (
          <PresentationParagraph>
            Olá! Sou um desenvolvedor de software e
            professor de Go. Através deste site, procuro
            compartilhar conteúdo útil nesses dois ramos
            distintos.
          </PresentationParagraph>
        ) : (
          <PresentationParagraph>
            Hi! I&apos;m a software developer and Go
            teacher. Through this website, I aim at sharing
            useful content in these two distinct fields.
          </PresentationParagraph>
        )}
      </div>
      <Image
        loading="eager"
        src="/pictures/philippe_playing_go.png"
        alt="Fanaro"
        width={200}
        height={200}
        className="h-full w-50 rounded-2xl sm:w-60"
      />
    </section>
  )
}

function PresentationParagraph({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="max-w-75 px-4 text-center text-slate-700 sm:max-w-90 sm:px-0 sm:text-left sm:text-lg">
      {children}
    </p>
  )
}

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
