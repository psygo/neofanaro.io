"use client"

import { useState } from "react"

import { ArticleFromDb } from "@types"

import { useLang } from "@hooks"

import { localizedText } from "@utils"

import { ArticleComments } from "./articleComments"
import { ArticleViewTracker } from "./articleViewTracker"
import { ArticleWidthSlider } from "./articleWidthSlider"
import {
  ArticleDate,
  ArticleTags,
  ArticleTitle,
  ArticleTitleSection,
  ArticleViews,
} from "./articleTitleSection"

type ArticleProps = {
  article: ArticleFromDb
  children: React.ReactNode
}

const DEFAULT_MAX_WIDTH_REM = 29

export function Article({
  article,
  children,
}: ArticleProps) {
  const lang = useLang()
  const [maxWidth, setMaxWidth] = useState(
    DEFAULT_MAX_WIDTH_REM,
  )
  const [isDragging, setIsDragging] = useState(false)

  const articleLang =
    lang === "pt" && article.langs.includes("pt")
      ? "pt-br"
      : "en-us"

  return (
    <article
      lang={articleLang}
      className={`prose min-w-0 border-r-2 transition-colors duration-150 sm:px-2 ${isDragging ? "border-r-slate-300" : "border-r-transparent"}`}
      style={{ maxWidth: `${maxWidth}rem` }}
    >
      <ArticleViewTracker path={article.path} />
      <ArticleTitleSection>
        <div className="mb-5 flex items-center justify-between gap-20">
          <ArticleTitle>
            {localizedText(
              article.titleEn,
              article.titlePt,
              lang,
            )}
          </ArticleTitle>
          <ArticleWidthSlider
            maxWidth={maxWidth}
            setMaxWidth={setMaxWidth}
            setIsDragging={setIsDragging}
          />
        </div>
        <ArticleViews views={article.views || 0} />
        <ArticleDate date={new Date(article.date)} />
        <ArticleTags tags={article.tags} />
      </ArticleTitleSection>
      {children}
      <ArticleComments
        articleId={article.id}
        articlePath={article.path}
      />
    </article>
  )
}
