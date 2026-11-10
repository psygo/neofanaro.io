"use client"

import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
} from "../articleContent"
import { ArticlePDFViewer } from "@components/articles/articlePDFViewer"

export function KifuBook({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>H</ArticleParagraph>
        <ArticlePDFViewer src="/articles/kifu-book/kifu.pdf" />
      </ArticleSection>
    </Article>
  )
}
