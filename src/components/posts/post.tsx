"use client"

import Link from "next/link"

import { ReactChildren } from "../../types/reactChildren"

import { useLang } from "@hooks/useLang"

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
  return <h1 className="mb-2.5">{children}</h1>
}

type PostDateProps = {
  date: Date
  className?: string
}

export function PostDate({
  date,
  className = "pb-1 text-slate-500",
}: PostDateProps) {
  const lang = useLang()

  const formattedDate = date.toLocaleDateString(
    lang === "pt" ? "pt-BR" : "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  )

  return <h6 className={className}>{formattedDate}</h6>
}

export function PostTag({ children }: ReactChildren) {
  return (
    <span className="rounded-2xl border border-gray-300 bg-gray-50 px-2 py-0.5 text-xs font-semibold text-gray-600">
      {children}
    </span>
  )
}

type PostTagsProps = {
  tags: string[]
}

export function PostTags({ tags }: PostTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
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
    <p className="text-justify hyphens-auto" lang="pt-br">
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
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </Link>
  )
}

export function PostOrderedList({
  children,
}: ReactChildren) {
  return (
    <ol className="pl-12 [&>li]:my-1 [&>li]:pl-1">
      {children}
    </ol>
  )
}

export function PostUnorderedList({
  children,
}: ReactChildren) {
  return (
    <ul className="mt-0 mb-0 [&>li]:my-1 [&>li]:pl-0.5">
      {children}
    </ul>
  )
}

// ---------------------------------------------------------
