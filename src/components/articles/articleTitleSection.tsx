import { WithReactChildren } from "@types"

import { useLang } from "@hooks"

export function ArticleTitleSection({
  children,
}: WithReactChildren) {
  return (
    <section className="flex flex-col gap-1 font-semibold">
      {children}
    </section>
  )
}

export function ArticleTitle({
  children,
}: WithReactChildren) {
  return <h1 className="mb-0 font-black">{children}</h1>
}

type ArticleViewsProps = {
  views: number
  className?: string
}

export function ArticleViews({
  views,
  className = "flex gap-1 text-base font-bold text-slate-600",
}: ArticleViewsProps) {
  return (
    <h6 className={className}>
      {views} {views === 1 ? "view" : "views"}
    </h6>
  )
}

type ArticleDateProps = {
  date: Date
  className?: string
}

export function ArticleDate({
  date,
  className = "pb-1 text-slate-500",
}: ArticleDateProps) {
  const lang = useLang()

  const formattedDate = date.toLocaleDateString(
    lang === "pt" ? "pt-BR" : "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  )

  return <h6 className={className}>{formattedDate}</h6>
}

export function ArticleTag({
  children,
}: WithReactChildren) {
  return (
    <span className="rounded-2xl border border-gray-300 bg-gray-50 px-2 py-0.5 text-xs font-semibold text-gray-600">
      {children}
    </span>
  )
}

type ArticleTagsProps = {
  tags: string[]
}

export function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <ArticleTag key={i}>{tag}</ArticleTag>
      ))}
    </div>
  )
}
