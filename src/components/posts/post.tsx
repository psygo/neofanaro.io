import { ReactChildren } from "../../types/reactChildren"

export function Post({ children }: ReactChildren) {
  return (
    <article className="prose prose-zinc max-w-110">
      {children}
    </article>
  )
}

export function PostTitleSection({
  children,
}: ReactChildren) {
  return (
    <section className="flex flex-col">{children}</section>
  )
}

export function PostTitle({ children }: ReactChildren) {
  return <h1>{children}</h1>
}

export function PostDate({ children }: ReactChildren) {
  return (
    <h6 className="-mt-4 pb-5 text-slate-500">
      {children}
    </h6>
  )
}

export function PostSection({ children }: ReactChildren) {
  return <section>{children}</section>
}

export function JustifiedParagraph({
  children,
}: ReactChildren) {
  return (
    <p className="text-justify" lang="pt-br">
      {children}
    </p>
  )
}
