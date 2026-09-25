import "katex/dist/katex.min.css"

import katex from "katex"

type ArticleMathProps = {
  children: string
  display?: boolean
}

export function ArticleMath({
  children,
  display = false,
}: ArticleMathProps) {
  // `throwOnError: false` renders malformed TeX in red instead of
  // taking the whole page down with it during SSR.
  const html = katex.renderToString(children, {
    displayMode: display,
    throwOnError: false,
  })

  return (
    <span
      className={`not-prose ${display ? "flex justify-center overflow-x-auto py-2" : "inline"}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
