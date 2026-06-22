"use client"

import { useLang } from "@hooks/useLang"

import { PostCard } from "./postCard"
import { postCardDb } from "./postsDb"

export function PostsSection() {
  const lang = useLang()

  return (
    <section className="flex flex-col items-center gap-3">
      <h2 className="text-2xl font-extrabold">
        {lang === "pt" ? "Artigos" : "Articles"}
      </h2>
      <PostsList />
    </section>
  )
}

function PostsList() {
  return (
    <div className="flex flex-col gap-3">
      {postCardDb.map((postCard, i) => (
        <PostCard
          key={i}
          href={postCard.href}
          title={postCard.title}
          description={postCard.description}
          lang={postCard.lang}
          date={postCard.date}
          tags={postCard.tags}
        />
      ))}
    </div>
  )
}
