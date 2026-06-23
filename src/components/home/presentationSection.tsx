"use client"

import Image from "next/image"

import { ReactChildren } from "../../types/reactChildren"

import { useLang } from "@hooks/useLang"

export function PresentationSection() {
  const lang = useLang()

  return (
    <section className="mx-auto flex flex-col items-center gap-5.5 px-4 sm:flex-row sm:gap-8 sm:px-7">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl font-extrabold sm:text-left sm:text-4xl">
          Philippe Fanaro
        </h2>
        {lang === "pt" ? (
          <PresentationParagraph>
            Olá! Sou um desenvolvedor de software e
            professor de Go do Brasil. Através deste site,
            procuro compartilhar conteúdo útil nesses dois
            ramos distintos.
          </PresentationParagraph>
        ) : (
          <PresentationParagraph>
            Hi! I&apos;m a software developer and Go teacher
            from Brazil. Through this website, I aim at
            sharing useful content in these two distinct
            fields.
          </PresentationParagraph>
        )}
      </div>
      <Image
        loading="eager"
        src="/pictures/philippe_playing_go.png"
        alt="Fanaro"
        width={0}
        height={0}
        sizes="100vw"
        className="h-full w-50 rounded-2xl sm:w-60"
      />
    </section>
  )
}

function PresentationParagraph({
  children,
}: ReactChildren) {
  return (
    <p className="max-w-75 px-4 text-center text-slate-700 sm:max-w-100 sm:px-0 sm:text-left sm:text-lg">
      {children}
    </p>
  )
}
