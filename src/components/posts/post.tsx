"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { WithReactChildren } from "../../types/utils"

import { useLang } from "@hooks/useLang"

import { PostViewTracker } from "./postViewTracker"
import { PostFromDb } from "../../types/post"

type PostProps = {
  data: PostFromDb
  children: React.ReactNode
}

const DEFAULT_MAX_WIDTH_REM = 29 // matches former max-w-110

export function Post({ data, children }: PostProps) {
  const [maxWidth, setMaxWidth] = useState(
    DEFAULT_MAX_WIDTH_REM,
  )
  const [isDragging, setIsDragging] = useState(false)

  return (
    <article
      className={`prose border-r-2 transition-colors duration-150 sm:px-2 ${isDragging ? "border-r-slate-300" : "border-r-transparent"}`}
      style={{ maxWidth: `${maxWidth}rem` }}
    >
      <PostViewTracker path={data.path} />
      <PostTitleSection>
        <div className="mb-5 flex items-center justify-between gap-20">
          <PostTitle>{data.title}</PostTitle>
          <PostWidthSlider
            maxWidth={maxWidth}
            setMaxWidth={setMaxWidth}
            setIsDragging={setIsDragging}
          />
        </div>
        <PostViews views={data.views || 0} />
        <PostDate date={new Date(data.date)} />
        <PostTags tags={data.tags} />
      </PostTitleSection>
      {children}
    </article>
  )
}

// ---------------------------------------------------------
// Slider

type PostWidthSliderProps = {
  maxWidth: number
  setMaxWidth: (w: number) => void
  setIsDragging: (v: boolean) => void
}

function PostWidthSlider({
  maxWidth,
  setMaxWidth,
  setIsDragging,
}: PostWidthSliderProps) {
  const dragState = useRef<{
    startX: number
    startWidth: number
  } | null>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragState.current) return
      const delta =
        (e.clientX - dragState.current.startX) / 16
      setMaxWidth(
        Math.min(
          56,
          Math.max(
            20,
            dragState.current.startWidth + delta,
          ),
        ),
      )
    }
    const onMouseUp = () => {
      if (dragState.current) setIsDragging(false)
      dragState.current = null
    }
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [setMaxWidth, setIsDragging])

  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault()
        dragState.current = {
          startX: e.clientX,
          startWidth: maxWidth,
        }
        setIsDragging(true)
      }}
      className="not-prose hidden shrink-0 cursor-ew-resize rounded p-1 text-gray-400 select-none hover:bg-gray-100 hover:text-gray-600 active:bg-gray-200 sm:block"
      title="Drag to resize"
    >
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 7l-5 5 5 5" />
        <path d="M16 7l5 5-5 5" />
      </svg>
    </button>
  )
}

// ---------------------------------------------------------
// Post Title Section

export function PostTitleSection({
  children,
}: WithReactChildren) {
  return (
    <section className="flex flex-col gap-1 font-semibold">
      {children}
    </section>
  )
}

export function PostTitle({ children }: WithReactChildren) {
  return <h1 className="mb-0 font-black">{children}</h1>
}

type PostViewsProps = {
  views: number
  className?: string
}

export function PostViews({
  views,
  className = "flex gap-1 text-base font-bold text-slate-600",
}: PostViewsProps) {
  return (
    <h6 className={className}>
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
    <ol className="pl-10 sm:pl-12 [&>li]:my-1 [&>li]:pl-1">
      {children}
    </ol>
  )
}

export function PostUnorderedList({
  children,
}: WithReactChildren) {
  return (
    <ul className="mt-0 mb-0 pl-10 sm:pl-12 [&>li]:my-1 [&>li]:pl-0.5">
      {children}
    </ul>
  )
}

type PostImageProps = {
  src: string
  alt: string
  className?: string
}

export function PostImage({
  src,
  alt,
  className = "mx-auto h-full w-full px-3",
}: PostImageProps) {
  return (
    <Image
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className={className}
      alt={alt}
    />
  )
}

type PostImageWithLegendProps = {
  src: string
  legend: string
  className: string
}

export function PostImageWithLegend({
  src,
  legend,
  className,
}: PostImageWithLegendProps) {
  return (
    <div className="-mt-3 flex flex-col items-center">
      <Image
        loading="eager"
        src={src}
        width={0}
        height={0}
        sizes="100vw"
        className={className}
        alt={legend}
      />
      <p className="mt-2 mb-2 px-10 text-center text-sm text-slate-600 sm:text-base">
        {legend}
      </p>
    </div>
  )
}

export function PostCode({ children }: WithReactChildren) {
  return (
    <code className="mr-1.5 rounded-lg bg-gray-300 px-1.75 py-0.5 font-semibold before:content-[''] after:content-['']">
      {children}
    </code>
  )
}

export function PostSectionTitle({
  children,
}: WithReactChildren) {
  return <h2>{children}</h2>
}

export function PostBlockQuote({
  children,
}: WithReactChildren) {
  return (
    <blockquote className="mr-4 ml-8 border-gray-300 pl-2.5 font-normal text-slate-600 not-italic">
      {children}
    </blockquote>
  )
}

type PostIframeProps = {
  title: string
  src: string
}

export function PostIframe({
  title,
  src,
}: PostIframeProps) {
  return (
    <iframe
      id="inlineFrameExample"
      title={title}
      width={0}
      height={0}
      src={src}
      className="mx-auto h-60 w-full px-3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export function PostYouTubeIframe({
  src,
  title,
}: PostIframeProps) {
  return (
    <div className="flex justify-center">
      <div className="mx-6 mb-0.5 flex aspect-video w-full max-w-lg items-center overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export function PostDivider() {
  return (
    <hr className="mt-30 mb-6 border border-gray-300" />
  )
}

// ---------------------------------------------------------
