"use client"

import { useLayoutEffect, useRef, useState } from "react"

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

  useLayoutEffect(() => {
    const article = ref.current?.closest("article")
    article?.classList.add("article-has-toc")

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

    return () => {
      article?.classList.remove("article-has-toc")
    }
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
              <li
                key={section.id}
                className="mt-1.5 mb-1.5 marker:text-slate-900 dark:marker:text-slate-50"
              >
                <a
                  href={`#${section.id}`}
                  className="no-underline underline-offset-4 hover:underline hover:decoration-[1.5px]"
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
