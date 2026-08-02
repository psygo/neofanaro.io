import Image from "next/image"
import Link from "next/link"

import { WithReactChildren } from "@types"

export function ArticleSection({
  children,
}: WithReactChildren) {
  return <section className="mt-10">{children}</section>
}

export function ArticleParagraph({
  children,
}: WithReactChildren) {
  return (
    <p className="text-justify hyphens-auto">{children}</p>
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
        internal ? "text-red-700" : "text-purple-700"
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
    <ol className="pl-10 sm:pl-12 [&>li]:my-1 [&>li]:pl-1">
      {children}
    </ol>
  )
}

export function ArticleUnorderedList({
  children,
}: WithReactChildren) {
  return (
    <ul className="mt-0 mb-0 pl-12 [&>li]:my-1 [&>li]:pl-0.5 [&>li]:marker:text-slate-700">
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
  className = "",
  children,
}: ArticleImageWithLegendProps) {
  return (
    <div className="flex flex-col items-center gap-2 pt-4 pb-2.5">
      <Image
        loading="eager"
        src={src}
        height={height}
        width={width}
        sizes="100vw"
        alt={alt}
        className={`mt-0 mb-0 ${className}`}
      />
      <div className="px-10 text-sm text-slate-600 sm:text-base [&>p]:mt-0 [&>p]:mb-0">
        {children}
      </div>
    </div>
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
  return <h2 className="font-extrabold">{children}</h2>
}

export function ArticleBlockQuote({
  children,
}: WithReactChildren) {
  return (
    <blockquote className="mr-8 ml-8 border-gray-300 pl-2.5 font-normal text-slate-600 not-italic [&_p:first-of-type]:before:content-[''] [&_p:last-of-type]:after:content-['']">
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

export function ArticleDivider() {
  return <hr className="mt-6 mb-6 border border-gray-300" />
}

type NoWrapProps = WithReactChildren

export function NoWrap({ children }: NoWrapProps) {
  return (
    <span className="whitespace-nowrap">{children}</span>
  )
}
