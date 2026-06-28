"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import "flag-icons/css/flag-icons.min.css"

import { useLang } from "@hooks/useLang"

import { LangLink } from "./langLink"
import { CpiSuspense } from "./cpiSuspense"

export function Nav() {
  return (
    <nav className="mx-auto rounded-full bg-slate-100 px-5.5 pt-2.5 pb-2.5 ring-1 ring-slate-200">
      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <FanaroIcon />
        <SoftwareLogo />
        <TeacherLogo />
        <BlogLogo />
        <CpiSuspense>
          <LanguageIcon />
        </CpiSuspense>
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
      size={22}
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

const activeLinkClasses = "bg-slate-950/5 text-slate-950"
const inactiveLinkClasses = "bg-transparent text-slate-700"

function NavIcon({
  src,
  alt,
  href,
  size,
  className = "",
}: NavLogoProps) {
  const pathname = usePathname() || "/"
  let isActive = ""

  if (href === "/") {
    isActive =
      pathname === href
        ? activeLinkClasses
        : inactiveLinkClasses
  } else {
    isActive = pathname.includes(href)
      ? activeLinkClasses
      : inactiveLinkClasses
  }

  return (
    <LangLink href={href}>
      <li
        className={`${isActive} flex items-center justify-center rounded-full p-2 transition duration-300 hover:bg-slate-200`}
      >
        <Image
          loading="eager"
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={className}
        />
      </li>
    </LangLink>
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
          className={`fi fi-${countryCode} mr-1.5 ml-2.5 rounded-xl`}
          style={{
            width: "25.5px",
            height: "25.5px",
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
