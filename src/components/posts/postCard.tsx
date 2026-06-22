import "flag-icons/css/flag-icons.min.css"

import { cardDecoration } from "@styles/globals"

import { ReactChildren } from "../../types/reactChildren"

import { LangLink } from "../common/langLink"
import { PostTags } from "./post"

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
  date,
  tags,
}: PostCardProps) {
  return (
    <LangLink
      href={href}
      className={`flex flex-col gap-2 ${cardDecoration}`}
    >
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-wrap items-center gap-3 sm:items-end-safe">
        <PostTags tags={tags} />
        <PostLang lang={lang} />
      </div>
      <h6 className="text-sm text-slate-500">{date}</h6>

      <PostDescription>{description}</PostDescription>
    </LangLink>
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
      className={`fi rounded-xl fi-${lang === "pt" ? "br" : "us"}`}
      style={{
        width: "20px",
        height: "20px",
        // marginBottom: "2px",
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
