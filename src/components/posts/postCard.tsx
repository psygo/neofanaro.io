import Link from "next/link"

import "flag-icons/css/flag-icons.min.css"

import { ReactChildren } from "../../types/reactChildren"

export type PostCardProps = {
  href: string
  title: string
  description: string
  lang: string
  date: string
  tags: string[]
}

export function PostCard({
  href,
  title,
  description,
  lang,
}: PostCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 rounded-xl border border-gray-200 p-4"
    >
      <div className="flex items-center justify-between gap-6 sm:items-end-safe">
        <PostTitle>{title}</PostTitle>
        <PostLang lang={lang} />
      </div>
      <PostDescription>{description}</PostDescription>
    </Link>
  )
}

function PostTitle({ children }: ReactChildren) {
  return (
    <h2 className="text-2xl font-bold tracking-wide">
      {children}
    </h2>
  )
}

type PostLangProps = {
  lang: string
}

function PostLang({ lang }: PostLangProps) {
  return (
    <span
      className={`fi fi-${lang === "pt" ? "br" : "us"}`}
      style={{
        width: "23.5px",
        height: "23.5px",
        marginBottom: "2px",
      }}
    ></span>
  )
}

function PostDescription({ children }: ReactChildren) {
  return (
    <p className="text-sm text-slate-700">{children}</p>
  )
}

// ---------------------------------------------------------
