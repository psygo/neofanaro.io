"use client"

import Link from "next/link"

import { WithReactChildren } from "../../types/utils"

import { useLang } from "@hooks/useLang"

import { PostViewTracker } from "./postViewTracker"
import { PostFromDb } from "../../types/post"

type PostProps = {
  data: PostFromDb
  children: React.ReactNode
}

export function Post({ data, children }: PostProps) {
  return (
    <article className="prose max-w-110">
      <PostViewTracker path={data.path} />
      <PostTitleSection>
        <PostTitle>{data.title}</PostTitle>
        <PostViews views={data.views || 0} />
        <PostDate date={new Date(data.date)} />
        <PostTags tags={data.tags} />
      </PostTitleSection>
      {children}
    </article>
  )
}

// ---------------------------------------------------------
// Post Title Section

export function PostTitleSection({
  children,
}: WithReactChildren) {
  return (
    <section className="flex flex-col gap-1">
      {children}
    </section>
  )
}

export function PostTitle({ children }: WithReactChildren) {
  return <h1 className="mb-6">{children}</h1>
}

type PostViewsProps = {
  views: number
}

export function PostViews({ views }: PostViewsProps) {
  return (
    <h6 className="flex gap-1 text-base font-bold text-slate-600">
      {views} {views === 1 ? "view" : "views"}
    </h6>
  )
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

export function PostTag({ children }: WithReactChildren) {
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

export function PostSection({
  children,
}: WithReactChildren) {
  return <section className="mt-10">{children}</section>
}

export function PostParagraph({
  children,
}: WithReactChildren) {
  return (
    <p className="text-justify hyphens-auto" lang="en-us">
      {children}
    </p>
  )
}

type PostLinkProps = {
  children: React.ReactNode
  href: string
  internal?: boolean
}

export function PostLink({
  children,
  href,
  internal = false,
}: PostLinkProps) {
  return (
    <Link
      className={`${
        internal ? "text-red-700" : "text-purple-700"
      } underline`}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      style={{
        textUnderlineOffset: "3px",
      }}
    >
      {children}
    </Link>
  )
}

export function PostOrderedList({
  children,
}: WithReactChildren) {
  return (
    <ol className="pl-12 [&>li]:my-1 [&>li]:pl-1">
      {children}
    </ol>
  )
}

export function PostUnorderedList({
  children,
}: WithReactChildren) {
  return (
    <ul className="mt-0 mb-0 [&>li]:my-1 [&>li]:pl-0.5">
      {children}
    </ul>
  )
}

// ---------------------------------------------------------
