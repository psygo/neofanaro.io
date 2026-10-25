"use client"

import { useLayoutEffect, useRef, useState } from "react"

import { useLang } from "@hooks"

type ArticleTocSubsection = {
  id: string
  number: string
  title: string
}

type ArticleTocSection = {
  id: string
  number: number
  title: string
  subsections: ArticleTocSubsection[]
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
        ".article-section-title, .article-subsection-title",
      ) ?? [],
    )

    const built: ArticleTocSection[] = []
    for (const heading of headings) {
      if (
        heading.classList.contains(
          "article-subsection-title",
        )
      ) {
        const parent = built[built.length - 1]
        if (!parent) continue
        parent.subsections.push({
          id: heading.id,
          number: `${parent.number}.${parent.subsections.length + 1}`,
          title: heading.textContent ?? "",
        })
      } else {
        built.push({
          id: heading.id,
          number: built.length + 1,
          title: heading.textContent ?? "",
          subsections: [],
        })
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from an external system (the DOM's own headings), the sanctioned use case for this pattern
    setSections(built)

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
                className="mt-0 mb-0 marker:text-slate-900 dark:marker:text-slate-50"
              >
                <a
                  href={`#${section.id}`}
                  className="no-underline underline-offset-4 hover:underline hover:decoration-[1.5px]"
                >
                  {section.title}
                </a>
                {section.subsections.length > 0 && (
                  <ol className="mt-0.5 mb-0 flex list-none flex-col pl-5">
                    {section.subsections.map(
                      (subsection) => (
                        <li
                          key={subsection.id}
                          className="mt-0 mb-0 marker:text-slate-900 dark:marker:text-slate-50"
                        >
                          <a
                            href={`#${subsection.id}`}
                            className="no-underline underline-offset-4 hover:underline hover:decoration-[1.5px]"
                          >
                            {subsection.number}.{" "}
                            {subsection.title}
                          </a>
                        </li>
                      ),
                    )}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  )
}
