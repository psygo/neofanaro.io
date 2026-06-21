import Image from "next/image"
import Link from "next/link"

import { containerOutline } from "@styles/globals"

export function SoftwareWorkSection() {
  return (
    <section className="flex flex-col gap-4 px-6 py-4">
      <h2 className="text-center text-2xl font-extrabold sm:text-2xl">
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
      imageSrc="/software_work/tecnicas_de_go_capa.svg"
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
      className={`${containerOutline} bg-gray-0 flex flex-col gap-3 px-6 py-4 pb-6`}
    >
      <GithubRepoCardTitleAndDescription
        title="Aquarifolio"
        description="A 3D presentation of my work"
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
        <div className="flex items-center justify-between gap-1">
          <h3 className="text-md font-bold sm:text-lg">
            {title}
          </h3>
          <Image
            loading="eager"
            src={imageSrc}
            alt="repo"
            width={45}
            height={45}
            className="h-full w-6 sm:hidden"
          />
        </div>
        <p className="-mt-2 text-sm text-slate-950">
          {description}
        </p>
        {/* <GithubRepoCardTitleAndDescription
          title={title}
          description={description}
        /> */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-2">
            <Tags tags={tags} />
            <GithubStars total={starTotal} />
          </div>
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
    <div className="flex gap-1">
      <Image
        loading="eager"
        src="/software_work/star.svg"
        alt="Github Stars Total"
        width={20}
        height={20}
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
    <span className="rounded-2xl border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs font-semibold">
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
