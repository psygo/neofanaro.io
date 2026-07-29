"use client"

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"

import { PostFromDb } from "../types/post"
import { WithReactChildren } from "../types/utils"

type PostsContext = {
  posts: PostFromDb[]
  setPosts: Dispatch<SetStateAction<PostFromDb[]>>
  allTags: string[]
}

const PostsContext = createContext<PostsContext | null>(
  null,
)

type PostsProviderProps = WithReactChildren & {
  initialPosts: PostFromDb[]
}

export function PostsProvider({
  initialPosts,
  children,
}: PostsProviderProps) {
  const [posts, setPosts] =
    useState<PostFromDb[]>(initialPosts)

  const allTags = Array.from(
    new Set(initialPosts.flatMap((p) => p.tags)),
  ).sort()

  return (
    <PostsContext.Provider value={{ posts, setPosts, allTags }}>
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  const context = useContext(PostsContext)

  if (!context)
    throw new Error(
      "`usePosts` must be used within a `PostsProvider`.",
    )

  return context
}
