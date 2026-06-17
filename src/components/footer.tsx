import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 flex w-full max-w-7xl justify-center px-6 pb-6">
      <Link
        href="https://github.com/psygo/neofanaro.io"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Go to GitHub repository"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:bg-slate-50"
      >
        <Image
          loading="eager"
          src="/footer/github_logo.svg"
          alt="Philippe playing Go"
          width={28}
          height={28}
        />
      </Link>
    </footer>
  )
}
