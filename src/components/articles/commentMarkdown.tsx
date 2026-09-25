import ReactMarkdown, {
  type Components,
} from "react-markdown"
import remarkBreaks from "remark-breaks"

import { ArticleLink } from "./articleContent"

const components: Components = {
  a: ({ href, children }) => (
    <ArticleLink href={href ?? "#"}>{children}</ArticleLink>
  ),
  p: ({ children }) => (
    <p className="mt-0 mb-2 last:mb-0">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-0 mb-2 list-disc pl-5 last:mb-0">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-0 mb-2 list-decimal pl-5 last:mb-0">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="my-0.5">{children}</li>
  ),
  code: ({ children }) => (
    <code className="rounded bg-gray-700 px-1 py-0.5 font-mono text-[0.85em] text-gray-100">
      {children}
    </code>
  ),
}

export function CommentMarkdown({
  content,
}: {
  content: string
}) {
  return (
    <div className="text-sm hyphens-auto text-slate-700 dark:text-slate-300">
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
