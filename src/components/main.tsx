import { ReactChildren } from "../types/reactChildren"

export function Main({ children }: ReactChildren) {
  return (
    <main className="mx-auto flex max-w-100 flex-col gap-12 px-4 sm:max-w-4xl">
      {children}
    </main>
  )
}
