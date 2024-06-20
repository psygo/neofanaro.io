import { type ReactNode } from "react"

export type PostRow = {
  date: Date
  title: string
  content: ReactNode
}

export type PostsDb = Record<string, PostRow>
