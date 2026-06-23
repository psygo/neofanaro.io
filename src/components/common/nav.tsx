"use client"

import { Suspense } from "react"

import Image from "next/image"
import Link from "next/link"

import "flag-icons/css/flag-icons.min.css"

import { useLang } from "@hooks/useLang"

import { LangLink } from "./langLink"

// ---------------------------------------------------------

export function Nav() {
  return (
    <nav className="mx-auto rounded-full bg-slate-100 px-5.5 pt-2.75 pb-3 ring-1 ring-slate-200">
      <ul className="flex flex-wrap items-center justify-center gap-4.5">
        <FanaroIcon />
        <SoftwareLogo />
        <TeacherLogo />
        <BlogLogo />
        <Suspense>
          <LanguageIcon />
        </Suspense>
      </ul>
    </nav>
  )
}

// ---------------------------------------------------------
// Logos

function FanaroIcon() {
  return (
    <NavIcon
      src="/logos/fanaro.io.svg"
      alt="Home"
      href="/"
      size={20}
    />
  )
}

function TeacherLogo() {
  return (
    <NavIcon
      src="/nav/teacher.svg"
      alt="Teacher"
      href="/teacher"
      size={23.5}
    />
  )
}

function SoftwareLogo() {
  return (
    <NavIcon
      src="/nav/tie.svg"
      alt="Software"
      href="/software"
      size={24}
    />
  )
}

function BlogLogo() {
  return (
    <NavIcon
      src="/nav/book.svg"
      alt="Blog"
      href="/posts"
      size={23.5}
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

function NavIcon({
  src,
  alt,
  href,
  size,
  className = "rounded-full",
}: NavLogoProps) {
  return (
    <li>
      <LangLink href={href}>
        <Image
          loading="eager"
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={className}
        />
      </LangLink>
    </li>
  )
}

// ---------------------------------------------------------
// Language Logos

function CountryFlagLogo({
  countryCode,
  href,
}: {
  countryCode: string
  href: string
}) {
  return (
    <li>
      <Link href={href}>
        <span
          className={`fi fi-${countryCode} rounded-xl`}
          style={{
            width: "23.5px",
            height: "23.5px",
            marginBottom: "2px",
          }}
        ></span>
      </Link>
    </li>
  )
}

function UsaFlagLogo() {
  return (
    <CountryFlagLogo countryCode="us" href="?lang=pt" />
  )
}

function BrazilFlagLogo() {
  return (
    <CountryFlagLogo countryCode="br" href="?lang=en" />
  )
}

function LanguageIcon() {
  const currentLang = useLang()

  return currentLang === "en" ? (
    <UsaFlagLogo />
  ) : (
    <BrazilFlagLogo />
  )
}

// ---------------------------------------------------------
