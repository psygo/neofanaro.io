import Link from "next/link"

import { ReactChildren } from "../../types/reactChildren"

export function Post({ children }: ReactChildren) {
  return (
    <article className="prose max-w-110">
      {children}
    </article>
  )
}

// ---------------------------------------------------------
// Post Title Section

export function PostTitleSection({
  children,
}: ReactChildren) {
  return (
    <section className="flex flex-col gap-1">
      {children}
    </section>
  )
}

export function PostTitle({ children }: ReactChildren) {
  return <h1 className="mb-4">{children}</h1>
}

export function PostDate({ children }: ReactChildren) {
  return <h6 className="pb-1 text-slate-500">{children}</h6>
}

export function PostTag({ children }: ReactChildren) {
  return (
    <span className="rounded-2xl border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs font-semibold">
      {children}
    </span>
  )
}

type PostTagsProps = {
  tags: string[]
}

export function PostTags({ tags }: PostTagsProps) {
  return (
    <div className="mb-5 flex gap-2">
      {tags.map((tag, i) => (
        <PostTag key={i}>{tag}</PostTag>
      ))}
    </div>
  )
}

// ---------------------------------------------------------
// Post Content

export function PostSection({ children }: ReactChildren) {
  return <section>{children}</section>
}

export function PostParagraph({ children }: ReactChildren) {
  return (
    <p className="text-justify" lang="pt-br">
      {children}
    </p>
  )
}

type PostLinkProps = {
  children: React.ReactNode
  href: string
}

export function PostLink({
  children,
  href,
}: PostLinkProps) {
  return (
    <Link
      className="text-orange-600 no-underline"
      href={href}
    >
      {children}
    </Link>
  )
}

// ---------------------------------------------------------
