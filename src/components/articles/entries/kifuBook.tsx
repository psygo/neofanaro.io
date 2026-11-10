"use client"

import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
} from "../articleContent"
import { ArticlePDFViewer } from "@components/articles/articlePDFViewer"

export function KifuBook({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          In the past few months, I&apos;ve shared here my
          editions of the{" "}
          <ArticleLink internal href="/articles/haengma3">
            Haengma 3
          </ArticleLink>{" "}
          and{" "}
          <ArticleLink
            internal
            href="/articles/sugeundaesajeon"
          >
            Tesuji Encyclopedia
          </ArticleLink>{" "}
          books. In this article, I&apos;m sharing my
          edition of a simple game records book.
        </ArticleParagraph>
        <ArticleParagraph>
          This kifu book is written in Portuguese, but there
          isn&apos;t much need for knowing that language,
          since most of its perks are common knowledge for
          Go players. And, with AI, you could translate its
          short preface and the rest of its contents.
        </ArticleParagraph>
        <ArticleParagraph>
          This book was built programmatically with LaTeX
          and open source code, which you can inspect here:{" "}
          <ArticleLink href="https://github.com/psygo/tsumego_workbooks">
            @psygo/tsumego_workbooks
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          One major benefit of doing things with code is the
          ease of editing and customizing. For example, if
          you would like to take out the coordinates to get
          more space for the board itself, doing so is as
          easy as changing a single parameter.
        </ArticleParagraph>
        <ArticleParagraph>
          A lot of people might not want to buy or print the
          whole book, but might want to use a kifu page here
          and there. So use the PDF on demand and print the
          pages you see fit!
        </ArticleParagraph>
        <ArticleBlockQuote>
          I have also included pages for the 9&times;9 and
          13&times;13 boards as well.
        </ArticleBlockQuote>
        <ArticlePDFViewer src="/articles/kifu-book/kifu.pdf" />
      </ArticleSection>
    </Article>
  )
}
