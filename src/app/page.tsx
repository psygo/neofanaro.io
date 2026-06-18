"use client"

import { Suspense } from "react"

import Image from "next/image"
import Link from "next/link"

import useLang from "../hooks/useLang"

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12">
      <Suspense>
        <PresentationSection />
        <SoftwareWorkSection />
      </Suspense>
    </main>
  )
}

// ---------------------------------------------------------
// Presentation Section

const containerOutline = "rounded-xl ring-1 ring-slate-200"

function PresentationSection() {
  const lang = useLang()

  return (
    <section
      className={`flex max-w-80 flex-col items-center gap-5.5 px-4 py-6 sm:max-w-xl sm:flex-row sm:gap-8 sm:px-7`}
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
      className={`flex max-w-80 flex-col gap-4 px-6 py-4 sm:max-w-xl`}
    >
      <h2 className="text-center text-xl font-bold sm:text-2xl">
        Software
      </h2>
      <div className="flex flex-col gap-4">
        <Aquarifolio />
        <Fic />
        <TecnicasDeGo />
        <YouTubeKbdNav />
      </div>
    </section>
  )
}

function Fic() {
  return (
    <GithubRepoCard
      href="https://pub.dev/packages/fast_immutable_collections"
      imageSrc="/software_work/fic.svg"
      imageSize={90}
      title="Fast Immutable Collections"
      description="Immutable data structures for Dart"
      tags={["dart", "flutter"]}
      starTotal={200}
    />
  )
}

function TecnicasDeGo() {
  return (
    <GithubRepoCard
      href="https://github.com/psygo/tecnicas_de_go"
      imageSrc="/software_work/tecnicas_de_go_capa.png"
      imageSize={90}
      title="Técnicas de Go"
      description="A Go (Baduk or Weiqi), with a complete package for drawing LaTeX vector diagrams"
      tags={["latex", "svg"]}
      starTotal={20}
    />
  )
}

function YouTubeKbdNav() {
  return (
    <GithubRepoCard
      href="https://github.com/FanaroEngineering/youtube_kbd_nav"
      imageSrc="/software_work/yt_kbd_nav.svg"
      imageSize={90}
      title="YouTube Kbd Nav"
      description="A browser extension for controlling YouTube entirely through the keyboard"
      tags={["typescript", "browser"]}
      starTotal={20}
    />
  )
}

function Aquarifolio() {
  return (
    <Link
      href="https://aquarifolio.vercel.app/"
      target="_blank"
      rel="noreferrer noopener"
      className={`${containerOutline} bg-gray-0 flex flex-col gap-2 px-6 py-4 pb-6`}
    >
      <h3 className="text-md font-bold sm:text-lg">
        Aquarifolio
      </h3>
      <div className="flex gap-2">
        <Tag text="react" />
        <Tag text="three.js" />
        <Tag text="next.js" />
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

type GithubRepoCardProps = {
  href: string
  imageSrc: string
  imageSize: number
  title: string
  description: string
  tags: string[]
  starTotal: number
}

function GithubRepoCard({
  href,
  imageSrc,
  imageSize,
  title,
  description,
  tags,
  starTotal,
}: GithubRepoCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${containerOutline} bg-gray-0 flex w-full flex-row items-center gap-5 px-6 py-4`}
    >
      <Image
        loading="eager"
        src={imageSrc}
        alt="repo"
        width={imageSize}
        height={imageSize}
        className="hidden sm:block"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-md font-bold sm:text-lg">
          {title}
        </h3>
        <p className="-mt-2 text-sm">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </div>
        <div className="flex gap-1">
          <Image
            loading="eager"
            src="/software_work/star.svg"
            alt="FIC"
            width={20}
            height={20}
          />
          <p className="font-semibold">{starTotal}+</p>
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
