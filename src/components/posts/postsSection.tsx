"use client"

import { useLang } from "@hooks/useLang"

import { PostCard } from "./postCard"

import { usePosts } from "@providers/postsProvider"

export function PostsSection() {
  const lang = useLang()

  return (
    <section className="flex flex-col items-center gap-3">
      <h2 className="text-2xl font-black">
        {lang === "pt" ? "Artigos" : "Articles"}
      </h2>
      <PostsList />
    </section>
  )
}

function PostsList() {
  const { posts } = usePosts()

  return (
    <div className="flex flex-col gap-3">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  )
}
