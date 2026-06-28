import "flag-icons/css/flag-icons.min.css"

import { cardDecoration } from "@styles/globals"

import { WithReactChildren } from "../../types/utils"

import { LangLink } from "../common/langLink"
import { PostDate, PostTags } from "./post"

export type PostCardProps = {
  href: string
  title: string
  description: string
  lang: string
  date: Date
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
      <PostDate
        date={date}
        className="pb-1 text-sm text-slate-500"
      />

      <PostDescription>{description}</PostDescription>
    </LangLink>
  )
}

function PostTitle({ children }: WithReactChildren) {
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

function PostDescription({ children }: WithReactChildren) {
  return (
    <p className="text-sm text-slate-700">{children}</p>
  )
}

// ---------------------------------------------------------
