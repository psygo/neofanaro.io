"use client"

import { Suspense } from "react"

import Image from "next/image"
import Link from "next/link"

import { containerOutline } from "@styles/globals"

import { useLang } from "@hooks/useLang"

export function SoftwareWorkSection() {
  return (
    <section className="flex flex-col gap-4 px-6 py-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-2xl font-extrabold sm:text-2xl">
          Full Stack Developer
        </h2>
        <SoftwareStackLogos />
      </div>
      <div className="flex flex-col gap-4">
        <Suspense>
          <Aquarifolio />
          <Fic />
          <TecnicasDeGo />
          <YouTubeKbdNav />
        </Suspense>
      </div>
    </section>
  )
}

function SoftwareStackLogos() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://react.dev/"
      >
        <Image
          loading="eager"
          src="/software_work/react.svg"
          alt="repo"
          width={40}
          height={40}
        />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.typescriptlang.org/"
      >
        <Image
          loading="eager"
          src="/software_work/typescript.svg"
          alt="repo"
          width={40}
          height={40}
        />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://nextjs.org/"
        className="mr-1.25 ml-1"
      >
        <Image
          loading="eager"
          src="/software_work/nextjs.svg"
          alt="repo"
          width={32}
          height={32}
        />
      </Link>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.latex-project.org/"
      >
        <Image
          loading="eager"
          src="/software_work/tex.svg"
          alt="repo"
          width={40}
          height={40}
        />
      </Link>
    </div>
  )
}

function Fic() {
  const lang = useLang()

  return (
    <GithubRepoCard
      href="https://pub.dev/packages/fast_immutable_collections"
      imageSrc="/software_work/fic.svg"
      imageSize={90}
      title="Fast Immutable Collections"
      description={
        lang === "pt"
          ? "Estruturas de Dados Imutáveis em Dart"
          : "Immutable Data Structures for Dart"
      }
      tags={["dart", "flutter"]}
      starTotal={200}
    />
  )
}

function TecnicasDeGo() {
  const lang = useLang()

  return (
    <GithubRepoCard
      href="https://github.com/psygo/tecnicas_de_go"
      imageSrc="/software_work/tecnicas_de_go_capa.svg"
      imageSize={90}
      title="Técnicas de Go"
      description={
        lang === "pt"
          ? "Um livro e um pacote LaTeX completo para desenhar diagramas vetoriais de Go (Baduk ou Weiqi)"
          : "A book and a complete LaTeX package for drawing Go (Baduk or Weiqi) vector diagrams"
      }
      tags={["latex", "svg"]}
      starTotal={20}
    />
  )
}

function YouTubeKbdNav() {
  const lang = useLang()

  return (
    <GithubRepoCard
      href="https://github.com/FanaroEngineering/youtube_kbd_nav"
      imageSrc="/software_work/yt_kbd_nav.svg"
      imageSize={90}
      title="YouTube Kbd Nav"
      description={
        lang === "pt"
          ? "Uma extensão de navegador para controlar o YouTube inteiramente através do teclado."
          : "A browser extension for controlling YouTube entirely through the keyboard"
      }
      tags={["typescript", "browser"]}
      starTotal={20}
    />
  )
}

function Aquarifolio() {
  const lang = useLang()

  return (
    <Link
      href="https://aquarifolio.vercel.app/"
      target="_blank"
      rel="noreferrer noopener"
      className={`${containerOutline} bg-gray-0 flex flex-col gap-3 px-6 py-4 pb-6`}
    >
      <GithubRepoCardTitleAndDescription
        title="Aquarifolio"
        description={
          lang === "pt"
            ? "Uma apresentação 3D do meu trabalho"
            : "A 3D presentation of my work"
        }
      />
      <Tags tags={["react", "three.js", "next.js"]} />
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
        {/* <GithubRepoCardTitleAndDescription
          title={title}
          description={description}
        /> */}
        <div className="flex items-center gap-2">
          <h3 className="text-md font-bold sm:text-lg">
            {title}
          </h3>
          <Image
            loading="eager"
            src={imageSrc}
            alt="Github Repo Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-6 sm:hidden"
          />
        </div>
        <p className="-mt-2 text-sm text-slate-950">
          {description}
        </p>
        <div className="flex flex-col gap-2.5">
          <Tags tags={tags} />
          <GithubStars total={starTotal} />
        </div>
      </div>
    </Link>
  )
}

type GithubStarsProps = {
  total: number
}

function GithubStars({ total }: GithubStarsProps) {
  return (
    <div className="flex items-center gap-1">
      <Image
        loading="eager"
        src="/software_work/star.svg"
        alt="Github Stars Total"
        width={20}
        height={20}
        sizes="100vw"
        className="h-full"
      />
      <p className="font-semibold">{total}+</p>
    </div>
  )
}

type GithubRepoCardTitleAndDescriptionProps = {
  title: string
  description: string
}

function GithubRepoCardTitleAndDescription({
  title,
  description,
}: GithubRepoCardTitleAndDescriptionProps) {
  return (
    <>
      <h3 className="text-md font-bold sm:text-lg">
        {title}
      </h3>
      <p className="-mt-2 text-sm text-slate-950">
        {description}
      </p>
    </>
  )
}

type TagProps = {
  text: string
}

function Tag({ text }: TagProps) {
  return (
    <span className="rounded-2xl border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
      {text}
    </span>
  )
}

type TagsProps = {
  tags: string[]
}

function Tags({ tags }: TagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag, i) => (
        <Tag key={i} text={tag} />
      ))}
    </div>
  )
}
