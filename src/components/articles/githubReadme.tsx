import ReactMarkdown, {
  type Components,
} from "react-markdown"
import remarkBreaks from "remark-breaks"

import Image from "next/image"
import Link from "next/link"

import {
  ArticleLink,
  ArticleCode,
  ArticleOrderedList,
  ArticleUnorderedList,
  ArticleBlockQuote,
} from "./articleContent"

type ReadmeData = {
  markdown: string
  // Directory the README's own relative links/images resolve
  // against, e.g. "https://raw.githubusercontent.com/{owner}/{repo}/{branch}".
  rawBase: string
  blobBase: string
}

async function fetchReadme(
  owner: string,
  repo: string,
): Promise<ReadmeData | null> {
  try {
    const metaRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    )
    if (!metaRes.ok) return null
    const meta = (await metaRes.json()) as {
      download_url: string
    }

    const contentRes = await fetch(meta.download_url, {
      next: { revalidate: 3600 },
    })
    if (!contentRes.ok) return null
    const markdown = await contentRes.text()

    // meta.download_url is e.g.
    // "https://raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md" —
    // drop the filename to get the directory relative links/images
    // in the README resolve against.
    const rawBase = meta.download_url.replace(
      /\/[^/]+$/,
      "",
    )
    const branch = rawBase.split("/").pop()
    const blobBase = `https://github.com/${owner}/${repo}/blob/${branch}`

    return { markdown, rawBase, blobBase }
  } catch {
    return null
  }
}

function resolveRepoUrl(
  base: string,
  path: string,
): string {
  if (/^https?:\/\//.test(path) || path.startsWith("#"))
    return path
  return `${base}/${path.replace(/^\//, "")}`
}

function readmeComponents(
  rawBase: string,
  blobBase: string,
): Components {
  return {
    a: ({ href, children }) => (
      <ArticleLink
        href={resolveRepoUrl(blobBase, href ?? "")}
      >
        {children}
      </ArticleLink>
    ),
    img: ({ src, alt }) => (
      // next/image needs external hosts allowlisted in next.config,
      // and a README can link images from anywhere in its repo at
      // any size — a plain <img> avoids both problems for this
      // read-only, occasional embed.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolveRepoUrl(
          rawBase,
          typeof src === "string" ? src : "",
        )}
        alt={alt ?? ""}
        className="mx-auto my-3 max-w-full rounded"
      />
    ),
    h1: ({ children }) => (
      <h3 className="mt-4 mb-2 text-lg font-bold first:mt-0">
        {children}
      </h3>
    ),
    h2: ({ children }) => (
      <h4 className="mt-4 mb-2 font-bold first:mt-0">
        {children}
      </h4>
    ),
    h3: ({ children }) => (
      <h5 className="mt-3 mb-1 font-semibold first:mt-0">
        {children}
      </h5>
    ),
    p: ({ children }) => (
      <p className="mt-0 mb-3 last:mb-0">{children}</p>
    ),
    ul: ({ children }) => (
      <ArticleUnorderedList>
        {children}
      </ArticleUnorderedList>
    ),
    ol: ({ children }) => (
      <ArticleOrderedList>{children}</ArticleOrderedList>
    ),
    blockquote: ({ children }) => (
      <ArticleBlockQuote>{children}</ArticleBlockQuote>
    ),
    code: ({ children }) => (
      <ArticleCode>{children}</ArticleCode>
    ),
    pre: ({ children }) => (
      <pre className="mt-0 mb-3 overflow-x-auto rounded bg-gray-700 p-3 text-gray-100 [&_code]:bg-transparent [&_code]:p-0">
        {children}
      </pre>
    ),
  }
}

type ArticleGitHubReadmeProps = {
  href: string
  // Caps how tall the embedded README reads before scrolling, so one
  // repo's docs don't end up dwarfing the rest of the article.
  maxHeight?: number
}

// GitHub sends `X-Frame-Options: deny` (and a `frame-ancestors 'none'`
// CSP) on every page, so it can never actually render inside an
// <iframe> — this renders the repo's own README instead, fetched
// server-side, as the closest thing to an embed. Deliberately a
// Server Component (no "use client"): the fetch needs to run on the
// server, and it still composes fine as a child of the Client
// Component <ArticleSection> it's used inside.
export async function ArticleGitHubReadme({
  href,
  maxHeight = 420,
}: ArticleGitHubReadmeProps) {
  const repoPath = href
    .replace(/^https?:\/\/github\.com\//, "")
    .replace(/\/$/, "")
  const [owner, repo] = repoPath.split("/")

  const readme = await fetchReadme(owner, repo)

  return (
    <div className="mt-5 mb-5 flex justify-center">
      <div className="mx-2 w-full max-w-lg overflow-hidden rounded-md border border-slate-200 shadow-lg sm:mx-6 sm:rounded-lg dark:border-slate-700">
        <Link
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2 leading-none no-underline transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          <Image
            loading="eager"
            src="/footer/github_logo.svg"
            alt="GitHub"
            width={16}
            height={16}
            className="not-prose h-4 w-4 shrink-0 dark:invert"
          />
          <span className="truncate font-mono text-sm leading-none font-semibold text-slate-900 dark:text-slate-100">
            {repoPath}
          </span>
        </Link>
        {readme ? (
          <div
            className="overflow-y-auto px-4 py-3 text-sm hyphens-auto text-slate-700 dark:text-slate-300"
            style={{ maxHeight: `${maxHeight}px` }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkBreaks]}
              components={readmeComponents(
                readme.rawBase,
                readme.blobBase,
              )}
            >
              {readme.markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
            Couldn&apos;t load this repository&apos;s README
            right now &mdash; see it directly on GitHub
            above.
          </p>
        )}
      </div>
    </div>
  )
}
