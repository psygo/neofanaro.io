import "flag-icons/css/flag-icons.min.css"

import { cardDecoration } from "@styles"

import { PostFromDb, WithReactChildren } from "@types"

import { LangLink } from "../common/langLink"
import { PostDate, PostTags, PostViews } from "./post"

export type PostCardProps = {
  post: PostFromDb
}

export function PostCard({ post }: PostCardProps) {
  let borderColor = "oklch(21% 0.034 264.665)"

  if (post.tags.includes("baduk")) {
    borderColor = "oklch(79.5% 0.184 86.047)"
  } else if (post.tags.includes("software")) {
    borderColor = "oklch(66.6% 0.179 58.318)"
  }

  return (
    <LangLink href={`/posts/${post.path}`}>
      <div
        style={{
          borderLeftColor: borderColor,
        }}
        className={`flex flex-col gap-2 border-l-[7px] ${cardDecoration}`}
      >
        <PostTitle>{post.title}</PostTitle>
        <div className="mt-1 mb-1 flex flex-wrap items-center gap-3 sm:items-end-safe">
          <PostViews
            views={post.views}
            className="flex gap-1 text-sm font-bold text-slate-700"
          />
          <PostTags tags={post.tags} />
          <PostLang lang={post.lang} />
        </div>
        <PostDate
          date={new Date(post.date)}
          className="pb-1 text-sm font-semibold text-slate-500"
        />
        <PostDescription>
          {post.description}
        </PostDescription>
      </div>
    </LangLink>
  )
}

function PostTitle({ children }: WithReactChildren) {
  return (
    <h2 className="text-2xl font-extrabold tracking-wide">
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
