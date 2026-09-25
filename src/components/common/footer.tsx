import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="mx-auto mt-10 flex max-w-lg justify-center border-t border-gray-200 px-8 pt-3 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <GithubLogo />
        <FanaroYouTube />
        <GoWithFanaroYouTube />
        <FanaroEmail />
        <FanaroInstagram />
        <FanaroFacebook />
        <FanaroLinkedIn />
      </div>
    </footer>
  )
}

export function GithubLogo() {
  return (
    <FooterLogo
      src="/footer/github_logo.svg"
      alt="GitHub"
      href="https://github.com/psygo/neofanaro.io"
      size={28}
      className="h-5.5 w-5.5 sm:h-7 sm:w-7 dark:invert"
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
      className="h-5 w-5 sm:h-6 sm:w-6"
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
      className="h-5 w-5 sm:h-6 sm:w-6"
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
      className="h-5 w-5 sm:h-6 sm:w-6 dark:invert"
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
      className="h-5 w-5 sm:h-6 sm:w-6 dark:invert"
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
        className="h-5 w-5 sm:h-6 sm:w-6 dark:invert"
        loading="eager"
      />
    </Link>
  )
}

export function FanaroLinkedIn() {
  return (
    <FooterLogo
      src="/footer/linked_in.svg"
      alt="Philippe Fanaro's LinkedIn"
      href="https://www.linkedin.com/in/philippe-fanaro/"
      size={24}
      className="h-5.25 w-5.25 sm:h-6.5 sm:w-6.5 dark:invert"
    />
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
  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50 sm:h-10 sm:w-10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"

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
