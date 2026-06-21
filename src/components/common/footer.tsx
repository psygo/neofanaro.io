import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="mx-auto mt-10 flex max-w-lg justify-center border-t border-gray-200 px-8 pt-3">
      <div className="flex items-center justify-center gap-3">
        <GithubLogo />
        <FanaroYouTube />
        <GoWithFanaroYouTube />
        <FanaroEmail />
        <FanaroInstagram />
        <FanaroFacebook />
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

export function FanaroYouTube() {
  return (
    <FooterLogo
      src="/footer/youtube_logo.svg"
      alt="YouTube"
      href="https://www.youtube.com/@fanaro"
      size={24}
      className="h-6 w-6"
    />
  )
}

export function GoWithFanaroYouTube() {
  return (
    <FooterLogo
      src="/footer/youtube_logo_orange.svg"
      alt="YouTube"
      href="https://www.youtube.com/@gowithfanaro"
      size={24}
      className="h-6 w-6"
    />
  )
}

export function FanaroInstagram() {
  return (
    <FooterLogo
      src="/footer/instagram.svg"
      alt="Philippe Fanaro's Instagram"
      href="https://www.instagram.com/fanaro009/"
      size={24}
      className="h-6 w-6"
    />
  )
}

export function FanaroFacebook() {
  return (
    <FooterLogo
      src="/footer/facebook.svg"
      alt="Philippe Fanaro's Facebook"
      href="https://facebook.com/philippe.fanaro/"
      size={24}
      className="h-6 w-6"
    />
  )
}

export function FanaroEmail() {
  return (
    <Link
      href="mailto:philippefanaro@gmail.com"
      target="_blank"
      rel="noreferrer noopener"
      className={`${footerLogoStyling}`}
    >
      <Image
        src="/footer/email.svg"
        alt="Email"
        width={24}
        height={24}
        className="h-6 w-6"
        loading="eager"
      />
    </Link>
  )
}

type FooterLogoProps = {
  src: string
  alt: string
  href: string
  size: number
  className?: string
}

const footerLogoStyling =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50"

export function FooterLogo({
  src,
  alt,
  href,
  size,
  className = "",
}: FooterLogoProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${footerLogoStyling}`}
    >
      <Image
        loading="eager"
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={className}
      />
    </Link>
  )
}
