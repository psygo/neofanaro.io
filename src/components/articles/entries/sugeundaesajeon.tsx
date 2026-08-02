import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
} from "../articleContent"
import { ArticlePDFViewer } from "@components/articles/articlePDFViewer"

export function Sugeundaesajeon({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>S</ArticleParagraph>
        <ArticlePDFViewer src="/articles/latex-shogi/sample.pdf" />
      </ArticleSection>
    </Article>
  )
}
