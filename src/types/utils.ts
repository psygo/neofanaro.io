import { type ReactNode } from "react"

export type WithReactChildren = {
  children: ReactNode
}

export enum OrderBy {
  date,
  views,
}
