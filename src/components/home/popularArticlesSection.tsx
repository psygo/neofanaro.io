"use client"

import Link from "next/link"

import { PopularArticlesByCategory } from "@actions"

import { ArticleWithVotes } from "@types"

import { useLang } from "@hooks/useLang"

import { articleCategoryColor } from "@styles"

import { ArticleCard } from "@components/articles/articleCard"

type PopularArticlesSectionProps = {
  articles: PopularArticlesByCategory
}

export function PopularArticlesSection({
  articles,
}: PopularArticlesSectionProps) {
  const lang = useLang()

  return (
    <section className="flex flex-col items-center gap-6">
      <h2 className="mb-4 text-3xl font-black">
        {lang === "pt"
          ? "Artigos Populares"
          : "Popular Articles"}
      </h2>
      <PopularArticlesCategory
        title="Baduk"
        tag="baduk"
        color={articleCategoryColor(["baduk"])}
        posts={articles.baduk}
      />
      <PopularArticlesCategory
        title="Software"
        tag="software"
        color={articleCategoryColor(["software"])}
        posts={articles.software}
      />
      <PopularArticlesCategory
        title={lang === "pt" ? "Outros" : "Others"}
        tag="others"
        color={articleCategoryColor([])}
        posts={articles.other}
      />
    </section>
  )
}

type PopularArticlesCategoryProps = {
  title: string
  tag: string
  color: string
  posts: ArticleWithVotes[]
}

function PopularArticlesCategory({
  title,
  tag,
  color,
  posts,
}: PopularArticlesCategoryProps) {
  if (posts.length === 0) return null

  return (
    <div className="flex w-full flex-col gap-3">
      <Link
        href={`/articles?tags=${encodeURIComponent(tag)}`}
        className="flex w-fit items-center gap-2 text-lg font-bold no-underline hover:underline"
      >
        <span
          className="size-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <h3>{title}</h3>
      </Link>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
