"use client"

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
      <h2 className="text-2xl font-black">
        {lang === "pt"
          ? "Artigos Populares"
          : "Popular Articles"}
      </h2>
      <PopularArticlesCategory
        title="Baduk"
        color={articleCategoryColor(["baduk"])}
        posts={articles.baduk}
      />
      <PopularArticlesCategory
        title="Software"
        color={articleCategoryColor(["software"])}
        posts={articles.software}
      />
      <PopularArticlesCategory
        title={lang === "pt" ? "Outros" : "Other"}
        color={articleCategoryColor([])}
        posts={articles.other}
      />
    </section>
  )
}

type PopularArticlesCategoryProps = {
  title: string
  color: string
  posts: ArticleWithVotes[]
}

function PopularArticlesCategory({
  title,
  color,
  posts,
}: PopularArticlesCategoryProps) {
  if (posts.length === 0) return null

  return (
    <div className="flex w-full flex-col gap-3">
      <h3 className="flex items-center gap-2 text-lg font-bold">
        <span
          className="size-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
