import { WithReactChildren } from "@types"

export function Main({ children }: WithReactChildren) {
  return (
    <main className="mx-auto flex max-w-full flex-col gap-12 px-2 sm:max-w-2xl sm:px-4">
      {children}
    </main>
  )
}
