"use client"

import Image from "next/image"

import useLang from "@hooks/useLang"

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4">
      <PresentationSection />
      {/* <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://aquarifolio.vercel.app"
      ></iframe> */}
    </main>
  )
}

function PresentationSection() {
  const lang = useLang()

  return (
    <section className="flex max-w-xl items-center gap-10 px-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">
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
            Hello! I&apos;m a software developer and Go
            teacher. Through this website, I aim to share
            useful content in these two distinct fields.
          </PresentationParagraph>
        )}
      </div>
      <Image
        src="/pictures/philippe_playing_go.png"
        alt="Fanaro"
        width={200}
        height={200}
        className="rounded-2xl"
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
    <p className="text-lg text-slate-700">{children}</p>
  )
}
