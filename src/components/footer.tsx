import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 flex w-full max-w-xl justify-center border-t border-gray-200 px-6 pt-3">
      <div className="flex items-center justify-center gap-3">
        <GithubLogo />
        <FanaroYouTube />
        <GoWithFanaroYouTube />
      </div>
    </footer>
  )
}

function GithubLogo() {
  return (
    <FooterLogo
      src="/footer/github_logo.svg"
      alt="GitHub"
      href="https://github.com/psygo/neofanaro.io"
      size={28}
    />
  )
}

function FanaroYouTube() {
  return (
    <FooterLogo
      src="/footer/youtube_logo.svg"
      alt="YouTube"
      href="https://www.youtube.com/@fanaro"
      size={24}
    />
  )
}

function GoWithFanaroYouTube() {
  return (
    <FooterLogo
      src="/footer/youtube_logo_orange.svg"
      alt="YouTube"
      href="https://www.youtube.com/@gowithfanaro"
      size={24}
    />
  )
}

type FooterLogoProps = {
  src: string
  alt: string
  href: string
  size: number
}

function FooterLogo({
  src,
  alt,
  href,
  size,
}: FooterLogoProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50"
    >
      <Image
        loading="eager"
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </Link>
  )
}
