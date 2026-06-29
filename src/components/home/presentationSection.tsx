"use client"

import Image from "next/image"

import "./presentationImage.css"

import { WithReactChildren } from "../../types/utils"

import { useLang } from "@hooks/useLang"

export function PresentationSection() {
  const lang = useLang()

  return (
    <section className="mx-auto flex flex-col items-center gap-5.5 sm:flex-row sm:gap-8 sm:px-7">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-4xl font-black sm:text-left sm:text-4xl">
          Philippe Fanaro
        </h2>
        {lang === "pt" ? (
          <PresentationParagraph>
            Olá! Sou um programador e professor de Go do
            Brasil. Através deste site, procuro compartilhar
            meu trabalho, e conteúdo útil nesses dois ramos
            um tanto distintos.
          </PresentationParagraph>
        ) : (
          <PresentationParagraph>
            Hi! I&apos;m a software developer and Go teacher
            from Brazil. Through this website, I aim at
            sharing my work, and useful content on those two
            quite distinct fields.
          </PresentationParagraph>
        )}
      </div>
      <div className="shader">
        <PresentationImage src="/pictures/philippe_playing_go.png" />
        <div className="shader-layer specular gradient-presentation">
          <PresentationImage
            src="/pictures/philippe_playing_go_black_and_white_inverted.png"
            className="shader-layer mask"
          />
        </div>
      </div>
    </section>
  )
}

type PresentationImageProps = {
  className?: string
  src: string
}

function PresentationImage({
  className = "",
  src,
}: PresentationImageProps) {
  return (
    <Image
      loading="eager"
      src={src}
      alt="Fanaro"
      width={0}
      height={0}
      sizes="100vw"
      className={`${className} h-full w-60 rounded-2xl sm:w-60`}
    />
  )
}

function PresentationParagraph({
  children,
}: WithReactChildren) {
  return (
    <p className="max-w-75 px-4 text-center text-slate-700 sm:max-w-100 sm:px-0 sm:text-left sm:text-lg">
      {children}
    </p>
  )
}
