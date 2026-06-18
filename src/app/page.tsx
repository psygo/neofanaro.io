"use client"

import Image from "next/image"

import useLang from "@hooks/useLang"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12">
      <PresentationSection />
      <SoftwareWorkSection />
    </main>
  )
}

// ---------------------------------------------------------
// Presentation Section

const containerOutline =
  "rounded-xl shadow-lg ring-1 ring-slate-200"

function PresentationSection() {
  const lang = useLang()

  return (
    <section
      className={`${containerOutline} flex max-w-80 flex-col items-center gap-5.5 px-4 py-6 sm:max-w-xl sm:flex-row sm:gap-8 sm:px-7`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl font-bold sm:text-left sm:text-4xl">
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
            teacher. Through this website, I aim to share
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
    <p className="text-md max-w-75 px-4 text-center text-slate-700 sm:px-0 sm:text-left sm:text-lg">
      {children}
    </p>
  )
}

// ---------------------------------------------------------
// Software Work Section

function SoftwareWorkSection() {
  return (
    <section
      className={`${containerOutline} flex max-w-80 flex-col gap-4 px-6 py-6 sm:max-w-xl`}
    >
      <h2 className="text-center text-2xl font-bold">
        Software Work
      </h2>
      <div className="flex flex-col gap-4">
        <Aquarifolio />
        <Fic />
      </div>
    </section>
  )
}

function Aquarifolio() {
  return (
    <Link
      href="https://aquarifolio.vercel.app/"
      target="_blank"
      rel="noreferrer noopener"
      className={`${containerOutline} flex flex-col gap-2 bg-gray-50 px-6 py-4 pb-6`}
    >
      <h3 className="text-md font-bold">Aquarifolio</h3>
      <div className="flex gap-2">
        <Tag text="react" />
        <Tag text="three.js" />
        <Tag text="typescript" />
      </div>

      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        className="h-50 w-full rounded-xl"
        src="https://aquarifolio.vercel.app/"
      ></iframe>
    </Link>
  )
}

function Fic() {
  return (
    <Link
      href="https://pub.dev/packages/fast_immutable_collections"
      target="_blank"
      rel="noreferrer noopener"
      className={`${containerOutline} flex w-full flex-row items-center gap-5 bg-gray-50 px-6 py-4`}
    >
      <Image
        loading="eager"
        src="/software_work/fic.svg"
        alt="FIC"
        width={80}
        height={80}
        className="hidden sm:block"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-md font-bold sm:text-lg">
          Fast Immutable Collections
        </h3>
        {/* <p className="mt-[-4px] hidden sm:block">
          Immutable Collections for Dart/Flutter
        </p> */}
        <div className="flex gap-2">
          <Tag text="dart" />
          <Tag text="flutter" />
        </div>
        <div className="flex gap-1">
          <Image
            loading="eager"
            src="/software_work/star.svg"
            alt="FIC"
            width={20}
            height={20}
          />
          <p className="font-semibold">200+</p>
        </div>
      </div>
    </Link>
  )
}

type TagProps = {
  text: string
}

function Tag({ text }: TagProps) {
  return (
    <span className="rounded-2xl border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs font-semibold">
      {text}
    </span>
  )
}

// ---------------------------------------------------------
