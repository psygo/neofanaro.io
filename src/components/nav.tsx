"use client"

import Image from "next/image"
import Link from "next/link"

import useLang from "../hooks/useLang"

export default function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-xl justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 shadow-lg ring-1 ring-slate-200">
        <FanaroLogo />
        <AboutLogo />
        <LanguageLogo />
      </ul>
    </nav>
  )
}

function FanaroLogo() {
  return (
    <NavLogo
      src="/logos/fanaro.io.svg"
      alt="Home"
      href="/"
      size={22}
    />
  )
}

function AboutLogo() {
  return (
    <NavLogo
      src="/nav/teacher.svg"
      alt="About"
      href="/about"
      size={23}
    />
  )
}

function LanguageLogo() {
  const currentLang = useLang()

  return currentLang === "en" ? (
    <UsaFlagLogo />
  ) : (
    <BrazilFlagLogo />
  )
}

function UsaFlagLogo() {
  return (
    <NavLogo
      src="/nav/usa_flag.svg"
      alt="English"
      href="?lang=pt"
      size={23}
      className="mr-2 ml-1"
    />
  )
}

function BrazilFlagLogo() {
  return (
    <NavLogo
      src="/nav/brazil_flag.svg"
      alt="Portuguese"
      href="?lang=en"
      size={23}
      className="mr-2 ml-1"
    />
  )
}

type NavLogoProps = {
  src: string
  alt: string
  href: string
  size: number
  className?: string
}

function NavLogo({
  src,
  alt,
  href,
  size,
  className = "mr-2 ml-1 rounded-full",
}: NavLogoProps) {
  return (
    <li>
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={className}
        />
      </Link>
    </li>
  )
}
