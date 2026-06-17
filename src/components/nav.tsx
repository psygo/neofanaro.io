"use client"

import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex w-full max-w-xl justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 shadow-lg ring-1 ring-slate-200">
          <FanaroLogo />
          <AboutLogo />
        </ul>
      </div>
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
      src="/nav/about.svg"
      alt="About"
      href="/about"
      size={23}
    />
  )
}

type NavLogoProps = {
  src: string
  alt: string
  href: string
  size: number
}

function NavLogo({ src, alt, href, size }: NavLogoProps) {
  return (
    <li>
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="mr-2 ml-1 rounded-full"
        />
      </Link>
    </li>
  )
}
