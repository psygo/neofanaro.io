"use client"

import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <nav className="w-full">
      <div className="mx-auto flex w-full max-w-xl justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-3 shadow-lg ring-1 ring-slate-200">
          <li>
            <Link
              href="/"
            >
              <Image
                src="/fanaro.io.svg"
                alt="Philippe playing Go"
                width={22}
                height={22}
                className="rounded-full mr-2 ml-1"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/about"
            >
              <Image
                src="/about.svg"
                alt="Philippe playing Go"
                width={23}
                height={23}
                className="rounded-full mr-2 ml-1"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
            >
              <Image
                src="/articles.svg"
                alt="Philippe playing Go"
                width={23}
                height={23}
                className="rounded-full mr-2 ml-1"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}