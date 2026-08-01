import { cardDecoration } from "@styles"

import { ArticleFromDb, WithReactChildren } from "@types"

import { useLang } from "@hooks/useLang"
import { localizedText } from "@utils"

import { LangLink } from "../common/langLink"
import { ArticleDate, ArticleTags, ArticleViews } from "./article"

export type ArticleCardProps = {
  post: ArticleFromDb
}

export function ArticleCard({ post }: ArticleCardProps) {
  const lang = useLang()

  let borderColor = "oklch(21% 0.034 264.665)"

  if (post.tags.includes("baduk")) {
    borderColor = "oklch(79.5% 0.184 86.047)"
  } else if (post.tags.includes("software")) {
    borderColor = "oklch(66.6% 0.179 58.318)"
  }

  return (
    <LangLink href={`/articles/${post.path}`}>
      <div
        style={{
          borderLeftColor: borderColor,
        }}
        className={`flex flex-col gap-2 border-l-[7px] ${cardDecoration}`}
      >
        <ArticleTitle>
          {localizedText(post.titleEn, post.titlePt, lang)}
        </ArticleTitle>
        <div className="mt-1 mb-1 flex flex-wrap items-center gap-3 sm:items-end-safe">
          <ArticleViews
            views={post.views}
            className="flex gap-1 text-sm font-bold text-slate-700"
          />
          <ArticleTags tags={post.tags} />
        </div>
        <ArticleDate
          date={new Date(post.date)}
          className="pb-1 text-sm font-semibold text-slate-500"
        />
        <ArticleDescription>
          {localizedText(
            post.descriptionEn,
            post.descriptionPt,
            lang,
          )}
        </ArticleDescription>
      </div>
    </LangLink>
  )
}

function ArticleTitle({ children }: WithReactChildren) {
  return (
    <h2 className="text-2xl font-extrabold tracking-wide">
      {children}
    </h2>
  )
}

function ArticleDescription({ children }: WithReactChildren) {
  return (
    <p className="text-sm text-slate-700">{children}</p>
  )
}

// ---------------------------------------------------------
