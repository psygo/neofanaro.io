"use client"

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react"

import { Post } from "../types/post"
import { WithReactChildren } from "../types/reactChildren"

type PostsContext = {
  posts: Post[]
  setPosts: Dispatch<SetStateAction<Post[]>>
}

const PostsContext = createContext<PostsContext | null>(
  null,
)

type PostsProviderProps = WithReactChildren & {
  initialPosts: Post[]
}

export function PostsProvider({
  initialPosts,
  children,
}: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
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
