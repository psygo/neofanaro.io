"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import "flag-icons/css/flag-icons.min.css"

import type { Player } from "@server"

import { useLang } from "@hooks/useLang"

import { LangLink } from "./langLink"
import { CpiSuspense } from "./cpiSuspense"
import { ThemeToggle } from "./themeToggle"

type NavProps = {
  player: Player | null
}

export function Nav({ player }: NavProps) {
  return (
    <nav className="mx-auto rounded-full bg-slate-100 px-5.5 pt-2.5 pb-2.5 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <FanaroIcon />
        <SoftwareLogo />
        <TeacherLogo />
        <BlogLogo />
        <CpiSuspense>
          <LanguageIcon />
        </CpiSuspense>
        <ThemeToggle />
        <UserIcon player={player} />
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
      className="dark:invert"
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
      className="dark:invert"
    />
  )
}

function BlogLogo() {
  return (
    <NavIcon
      src="/nav/book.svg"
      alt="Blog"
      href="/articles"
      size={23.5}
      className="dark:invert"
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

const activeLinkClasses =
  "bg-slate-950/5 text-slate-950 dark:bg-white/10 dark:text-white"
const inactiveLinkClasses =
  "bg-transparent text-slate-700 dark:text-slate-300"

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
        className={`${isActive} flex size-10 items-center justify-center rounded-full transition duration-300 hover:bg-slate-200 dark:hover:bg-slate-800`}
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
    <li className="flex size-10 items-center justify-center">
      <Link href={href}>
        <span
          className={`fi fi-${countryCode} rounded-xl`}
          style={{
            width: "25.5px",
            height: "25.5px",
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
  return <CountryFlagLogo countryCode="br" href="?" />
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
// User

function UserIcon({ player }: { player: Player | null }) {
  if (!player) {
    return (
      <NavIcon
        src="/nav/sign_in.svg"
        alt="Sign in"
        href="/sign-in"
        size={23.5}
        className="dark:invert"
      />
    )
  }

  return (
    <NavIcon
      src="/nav/user.svg"
      alt={player.nick || player.name}
      href="/profile"
      size={21}
      className="dark:invert"
    />
  )
}

// ---------------------------------------------------------
