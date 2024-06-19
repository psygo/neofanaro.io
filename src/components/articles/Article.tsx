import { type WithReactChildren } from "@types"

export function Article({ children }: WithReactChildren) {
  return <article>{children}</article>
}
