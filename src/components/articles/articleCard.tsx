import {
  articleCategoryColor,
  cardDecoration,
} from "@styles"

import { ArticleWithVotes, WithReactChildren } from "@types"

import { useLang } from "@hooks/useLang"
import { localizedText } from "@utils"

// import { CountryFlag } from "@components/common/countryFlag"

import { LangLink } from "../common/langLink"
import { VoteButtons } from "./voteButtons"
import {
  ArticleDate,
  ArticleLangs,
  ArticleTags,
  ArticleViews,
} from "./articleTitleSection"

export type ArticleCardProps = {
  post: ArticleWithVotes
}

export function ArticleCard({ post }: ArticleCardProps) {
  const lang = useLang()

  const borderColor = articleCategoryColor(post.tags)

  return (
    <div className="flex flex-col gap-1.5">
      <LangLink href={`/articles/${post.path}`}>
        <div
          style={{
            borderLeftColor: borderColor,
          }}
          className={`neo:rounded-none neo:border-[3px] neo:border-l-10 neo:border-black neo:bg-white neo:shadow-[6px_6px_0_0_#000] neo:transition-[transform,box-shadow] neo:duration-150 neo:ease-linear neo:hover:translate-x-0.75 neo:hover:translate-y-0.75 neo:hover:bg-white neo:hover:shadow-[2px_2px_0_0_#000] neo:dark:border-white neo:dark:bg-slate-900 neo:dark:shadow-[6px_6px_0_0_#fff] neo:dark:hover:bg-slate-900 neo:dark:hover:shadow-[2px_2px_0_0_#fff] flex flex-col gap-3 border-l-[7px] ${cardDecoration}`}
        >
          <ArticleTitle>
            {localizedText(
              post.titleEn,
              post.titlePt,
              lang,
            )}
          </ArticleTitle>
          <div className="flex flex-wrap items-center gap-3 sm:items-end-safe">
            <ArticleViews
              views={post.views}
              className="flex gap-1 text-sm font-bold text-slate-700 dark:text-slate-300"
            />
            <ArticleTags tags={post.tags} />
            <ArticleLangs langs={post.langs} />
          </div>
          <div className="flex items-center gap-2">
            <ArticleDate
              date={new Date(post.date)}
              className="text-sm font-semibold text-slate-500 dark:text-slate-400"
            />
            <VoteButtons
              upvotes={post.upvotes}
              downvotes={post.downvotes}
              myVote={post.myVote}
              readOnly
            />
          </div>
          <ArticleDescription>
            {localizedText(
              post.descriptionEn,
              post.descriptionPt,
              lang,
            )}
          </ArticleDescription>
        </div>
      </LangLink>
    </div>
  )
}

function ArticleTitle({ children }: WithReactChildren) {
  return (
    <h2 className="neo:uppercase neo:tracking-normal text-2xl font-extrabold tracking-wide">
      {children}
    </h2>
  )
}

function ArticleDescription({
  children,
}: WithReactChildren) {
  return (
    <p className="text-sm text-slate-700 dark:text-slate-300">
      {children}
    </p>
  )
}
