"use client"

import Image from "next/image"

import useLang from "@hooks/useLang"

export default function Home() {
  return (
    <main className="my-6 flex flex-col items-center gap-4">
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
    <section className="flex max-w-xl items-center gap-8 rounded-lg border border-gray-200 bg-slate-100 px-6 py-4 shadow-xl ring-1 ring-slate-200">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          Philippe Fanaro
        </h2>
        {lang === "pt" ? (
          <p className="text-lg text-slate-700">
            Olá! Sou Philippe Fanaro, um desenvolvedor de
            software e professor de Go. Através deste site,
            procuro compartilhar conteúdo útil nesses dois
            ramos distintos.
          </p>
        ) : (
          <p className="text-lg text-slate-700">
            Hello! I&apos;m Philippe Fanaro, a software
            developer and Go teacher. Through this site, I
            aim to share useful content in these two
            distinct fields.
          </p>
        )}
      </div>
      <Image
        src="/pictures/philippe_playing_go.png"
        alt="Fanaro"
        width={200}
        height={200}
        className="rounded-[28px]"
      />
    </section>
  )
}
