"use client"

import { useId, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { WithReactChildren } from "@types"

import { ArticleImageLightbox } from "./articleImageLightbox"

export { ArticleTableOfContents } from "./articleToc"
export { DiagramRef } from "./diagramRef"

export function ArticleSection({
  children,
}: WithReactChildren) {
  return <section className="mt-10">{children}</section>
}

type ArticleParagraphProps = WithReactChildren & {
  textAlign?: React.CSSProperties["textAlign"]
}

export function ArticleParagraph({
  children,
  textAlign = "justify",
}: ArticleParagraphProps) {
  return (
    <p className="hyphens-auto" style={{ textAlign }}>
      {children}
    </p>
  )
}

type ArticleQuoteProps = WithReactChildren & {
  textAlign?: React.CSSProperties["textAlign"]
}

export function ArticleQuote({
  children,
  textAlign = "justify",
}: ArticleQuoteProps) {
  return (
    <p
      className="px-8 hyphens-auto italic"
      // className="relative px-8 pt-2 hyphens-auto before:absolute before:top-0 before:left-3 before:font-serif before:text-4xl before:leading-none before:text-slate-400 before:content-['\201C'] after:absolute after:top-0 after:right-3 after:font-serif after:text-4xl after:leading-none after:text-slate-400 after:content-['\201D'] dark:before:text-slate-400 dark:after:text-slate-400"
      style={{ textAlign }}
    >
      {children}
    </p>
  )
}

type ArticleLinkProps = {
  children: React.ReactNode
  href: string
  internal?: boolean
}

export function ArticleLink({
  children,
  href,
  internal = false,
}: ArticleLinkProps) {
  return (
    <Link
      className={`${
        internal
          ? "text-red-700 dark:text-red-400"
          : "text-purple-700 dark:text-purple-400"
      } underline underline-offset-4 [&:has(>_code)]:decoration-gray-700 [&:has(>_code)]:underline-offset-8`}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </Link>
  )
}

export function ArticleOrderedList({
  children,
}: WithReactChildren) {
  return (
    <ol className="pl-10 text-justify hyphens-auto sm:pl-12 [&>li]:my-1 [&>li]:pl-1">
      {children}
    </ol>
  )
}

export function ArticleUnorderedList({
  children,
}: WithReactChildren) {
  return (
    <ul className="mt-0 mb-0 pl-12 text-justify hyphens-auto [&>li]:my-1 [&>li]:pl-0.5 [&>li]:marker:text-slate-700 dark:[&>li]:marker:text-slate-400">
      {children}
    </ul>
  )
}

type ArticleImageProps = {
  src: string
  alt: string
  className?: string
}

export function ArticleImage({
  src,
  alt,
  className = "mx-auto h-full w-full px-3",
}: ArticleImageProps) {
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

type ArticleImageWithLegendProps = WithReactChildren & {
  src: string
  alt?: string
  height?: number
  width?: number
  className?: string
}

export function ArticleImageWithLegend({
  src,
  alt = "",
  height = 300,
  width = 300,
  className = "rounded-lg",
  children,
}: ArticleImageWithLegendProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-2 pt-4 pb-2.5">
      <div
        className="w-full px-4"
        style={{ maxWidth: `${width}px` }}
      >
        {/* Clipping via an ancestor's `overflow-hidden`, rather than
            relying on the <img> to clip its own raster content with
            its own `border-radius`, sidesteps a real Chromium
            GPU-compositor bug where a large photographic image's
            corners fail to round under hardware-accelerated
            rendering — reproduces in real Chrome, not in headless/
            software-rendered testing, so it's easy to miss. */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className={`block w-full cursor-zoom-in overflow-hidden ${className}`}
        >
          <Image
            loading="eager"
            src={src}
            height={height}
            width={width}
            // Mirrors the `maxWidth` above: the image renders at
            // `width`px once the viewport is that wide, and shrinks
            // to fill it (via .responsive-image's width:100%) below
            // that. Without this, the default "100vw" hint has
            // Next.js request (and downscale) a much bigger image
            // than what's ever actually displayed.
            sizes={`(min-width: ${width}px) ${width}px, 100vw`}
            alt={alt}
            className="responsive-image mt-0 mb-0 block"
          />
        </button>
      </div>
      <div className="px-10 text-sm text-slate-600 sm:text-base dark:text-slate-400 [&>p]:mt-0 [&>p]:mb-0">
        {children}
      </div>
      {lightboxOpen && (
        <ArticleImageLightbox
          src={src}
          alt={alt}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

type ImageLegendProps = WithReactChildren & {
  textAlign?: React.CSSProperties["textAlign"]
}

export function ImageLegend({
  children,
  textAlign = "left",
}: ImageLegendProps) {
  return (
    <p
      className="mx-auto max-w-100 hyphens-auto"
      style={{ textAlign }}
    >
      {children}
    </p>
  )
}

export function ArticleCode({
  children,
}: WithReactChildren) {
  return (
    <code className="rounded bg-gray-700 px-1.5 py-0.5 font-mono text-[0.8em] font-medium text-gray-100 before:content-[''] after:content-['']">
      {children}
    </code>
  )
}

export function ArticleSectionTitle({
  children,
}: WithReactChildren) {
  const id = useId()

  // The visible number is a CSS counter (see .article-section-title
  // in globals.css), not React state — it has to stay in sync with
  // however many of these render, and a counter can't desync the way
  // a second, independently-maintained number could.
  return (
    <h2
      id={id}
      className="article-section-title font-extrabold"
    >
      {children}
    </h2>
  )
}

export function ArticleBlockQuote({
  children,
}: WithReactChildren) {
  return (
    <blockquote className="mr-8 ml-8 border-gray-300 pl-2.5 font-normal text-slate-600 not-italic dark:border-slate-700 dark:text-slate-400 [&_p:first-of-type]:before:content-[''] [&_p:last-of-type]:after:content-['']">
      {children}
    </blockquote>
  )
}

type ArticleIframeProps = {
  title: string
  src: string
}

export function ArticleIframe({
  title,
  src,
}: ArticleIframeProps) {
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

export function ArticleYouTubeIframe({
  src,
  title,
}: ArticleIframeProps) {
  return (
    <div className="mt-5 mb-5 flex justify-center">
      <div className="mx-6 flex aspect-video w-full max-w-lg items-center overflow-hidden rounded-lg border border-slate-200 shadow-lg dark:border-slate-700">
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

export function ArticleDivider() {
  return (
    <hr className="mt-6 mb-6 border border-gray-300 dark:border-slate-700" />
  )
}

type NoWrapProps = WithReactChildren

export function NoWrap({ children }: NoWrapProps) {
  return (
    <span className="whitespace-nowrap">{children}</span>
  )
}
