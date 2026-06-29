import { WithReactChildren } from "../../types/utils"

export function Main({ children }: WithReactChildren) {
  return (
    <main className="mx-auto flex max-w-100 flex-col gap-12 px-2 sm:max-w-4xl sm:px-4">
      {children}
    </main>
  )
}
