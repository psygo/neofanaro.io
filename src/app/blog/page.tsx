"use client"

import { Suspense } from "react"

import Link from "next/link"

import "flag-icons/css/flag-icons.min.css"

import { useLang } from "@hooks/useLang"

import { Main } from "@components/main"

export default function Software() {
  return (
    <Main>
      <Suspense>
        <ArticlesSection />
      </Suspense>
    </Main>
  )
}

function ArticlesSection() {
  const lang = useLang()

  return (
    <section className="flex flex-col items-center gap-3">
      <h2 className="text-2xl font-extrabold">
        {lang === "pt" ? "Artigos" : "Articles"}
      </h2>
      <ArticlesList />
    </section>
  )
}

function ArticlesList() {
  return (
    <div className="flex flex-col gap-3">
      <ArticleThumbnail
        href="/first"
        title="First Article"
        description="Short description ladjflka lajdf lakjdflkajdf lakj dflajs dlfkj asdlkfj alkj dflka jlk"
        lang="en"
      />
      <ArticleThumbnail
        href="/first"
        title="First Article"
        description="Short description ladjflka lajdf lakjdflkajdf lakj dflajs dlfkj asdlkfj alkj dflka jlk"
        lang="pt"
      />
    </div>
  )
}

type ArticleThumbnailProps = {
  href: string
  title: string
  description: string
  lang: string
}

function ArticleThumbnail({
  href,
  title,
  description,
  lang,
}: ArticleThumbnailProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-2 rounded-xl border border-gray-200 p-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-wide">
          {title}
        </h2>
        <span
          className={`fi fi-${lang === "pt" ? "br" : "us"}`}
          style={{
            width: "23.5px",
            height: "23.5px",
            marginBottom: "2px",
          }}
        ></span>
      </div>
      <p className="text-sm text-slate-700">
        {description}
      </p>
    </Link>
  )
}
