"use client"

import { useEffect, useRef, useState } from "react"

import { useLang } from "@hooks"

type ArticleTocSection = {
  id: string
  number: number
  title: string
}

// An article opts into this by rendering it wherever it wants the
// list to appear — it isn't wired up automatically, since most
// articles are short enough that a TOC is just noise. It finds its
// own place in the DOM (closest <article> ancestor) rather than
// taking the article's content as a prop, so dropping it in anywhere
// in an entry's JSX is enough.
export function ArticleTableOfContents() {
  const lang = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const [sections, setSections] = useState<
    ArticleTocSection[]
  >([])

  useEffect(() => {
    const article = ref.current?.closest("article")
    const headings = Array.from(
      article?.querySelectorAll<HTMLHeadingElement>(
        ".article-section-title",
      ) ?? [],
    )
    setSections(
      headings.map((heading, index) => ({
        id: heading.id,
        number: index + 1,
        title: heading.textContent ?? "",
      })),
    )
  }, [lang])

  return (
    <div ref={ref} className="mt-12">
      {sections.length > 0 && (
        <>
          <h2 className="mt-0 text-xl font-bold">
            {lang === "pt" ? "Índice" : "Table of Contents"}
          </h2>
          <ol className="flex flex-col gap-0 pl-8 text-[11pt]">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-slate-600 no-underline hover:underline dark:text-slate-400"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  )
}
