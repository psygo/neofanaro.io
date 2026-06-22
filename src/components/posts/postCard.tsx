"use client"

import Link from "next/link"

import "flag-icons/css/flag-icons.min.css"

import { ReactChildren } from "../../types/reactChildren"

import { useLang } from "@hooks/useLang"

export function PostsSection() {
  const lang = useLang()

  return (
    <section className="flex flex-col items-center gap-3">
      <h2 className="text-2xl font-extrabold">
        {lang === "pt" ? "Artigos" : "Articles"}
      </h2>
      <PostsList />
    </section>
  )
}

const postCardDb: PostCardProps[] = [
  {
    href: "/posts/post-ai-opening-hierarchy",
    title: "Post-AI Opening Hierarchy",
    description:
      "How AI clarified the hierarchy in the opening",
    lang: "en",
  },
]

function PostsList() {
  return (
    <div className="flex flex-col gap-3">
      {postCardDb.map((postCard, i) => (
        <PostCard
          key={i}
          href={postCard.href}
          title={postCard.title}
          description={postCard.description}
          lang={postCard.lang}
        />
      ))}
    </div>
  )
}

// ---------------------------------------------------------
// Post Card

type PostCardProps = {
  href: string
  title: string
  description: string
  lang: string
}

function PostCard({
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
