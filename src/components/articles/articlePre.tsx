import hljs from "highlight.js"
import "highlight.js/styles/atom-one-dark.css"

type ArticlePreProps = {
  children: string
  language?: string
}

export function ArticlePre({
  children,
  language,
}: ArticlePreProps) {
  const result = language
    ? hljs.highlight(children.trim(), { language })
    : hljs.highlightAuto(children.trim())

  return (
    <pre className="not-prose max-w-full overflow-x-scroll rounded-lg text-sm">
      <code
        className="hljs"
        dangerouslySetInnerHTML={{ __html: result.value }}
      />
    </pre>
  )
}
