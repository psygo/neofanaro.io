"use client"

import { ArticleProps } from "@types"

import { useLang } from "@hooks"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
} from "../articleContent"
import { ArticlePDFViewer } from "@components/articles/articlePDFViewer"

export function Sugeundaesajeon({ article }: ArticleProps) {
  const lang = useLang()

  return (
    <Article article={article}>
      {lang === "pt" ? (
        <ArticleSection>
          <ArticleParagraph>
            A Enciclopédia de Tesujis (手筋大事典) da Nihon
            Kiin (日本棋院), a Associação Japonesa de Go,
            foi o livro que mais me marcou na minha estadia
            de um ano na Ásia, entre 2025 e 2026 &mdash;
            confira o vídeo{" "}
            <ArticleLink
              internal
              href="/articles/one-year-in-asia"
            >
              One Year in Asia Studying Go
            </ArticleLink>
            . Conhecida como Sugeundaesajeon (수근대사전) na
            Coreia do Sul, ela é utilizada para treinar
            inseis há mais de 50 anos tanto no Japão quanto
            na Coreia do Sul e na China.
          </ArticleParagraph>
          <ArticleBlockQuote>
            <ArticleParagraph>
              Se você gosta de livros de exercícios, sugiro
              o projeto{" "}
              <ArticleLink href="https://101books.github.io/">
                101books
              </ArticleLink>
              , que extraiu problemas do site{" "}
              <ArticleLink href="https://www.101weiqi.com/">
                101weiqi
              </ArticleLink>
              , e os transformou programaticamente em
              livros.
            </ArticleParagraph>
          </ArticleBlockQuote>
          <ArticleParagraph>
            Consegui recentemente um transcrição em SGF dos
            exercícios. E criei programaticamente um livro
            LaTeX em PDF com diagramas vetoriais. O código
            pode ser acessado por aqui:{" "}
            <ArticleLink href="https://github.com/psygo/tsumego_workbooks">
              @psygo/tsumego_workbooks
            </ArticleLink>
            . Mais informações detalhadas no prefácio:
          </ArticleParagraph>
          <ArticlePDFViewer src="/articles/sugeundaesajeon/sugeundaesajeon.pdf" />
        </ArticleSection>
      ) : (
        <ArticleSection>
          <ArticleParagraph>
            The Tesuji Encyclopedia (手筋大事典) from the
            Nihon Kiin (日本棋院), the Japanese Go
            Association, was the book which impacted me the
            most during my one-year stay in Asia, between
            2025 and 2026 &mdash; check out the{" "}
            <ArticleLink
              internal
              href="/articles/one-year-in-asia"
            >
              One Year in Asia Studying Go
            </ArticleLink>{" "}
            video . Known as Sugeundaesajeon (수근대사전) in
            South Korea, it has been used to train inseis
            for more than 50 years in Japan, as well as
            South Korea, and China.
          </ArticleParagraph>
          <ArticleBlockQuote>
            <ArticleParagraph>
              If you like workbooks, I suggest the{" "}
              <ArticleLink href="https://101books.github.io/">
                101books
              </ArticleLink>{" "}
              project, which extracted problems from the{" "}
              <ArticleLink href="https://www.101weiqi.com/">
                101weiqi
              </ArticleLink>{" "}
              website, and programmatically turned them into
              books.
            </ArticleParagraph>
          </ArticleBlockQuote>
          <ArticleParagraph>
            I recently got an SGF transcription of the
            exercises, which I then programmatically
            converted into PDF via LaTeX, with vector
            diagrams. The code is open-source:{" "}
            <ArticleLink href="https://github.com/psygo/tsumego_workbooks">
              @psygo/tsumego_workbooks
            </ArticleLink>
            .
          </ArticleParagraph>
          <ArticleParagraph>
            I&apos;ve only created a Portuguese edition so
            far, but most of the book consists of problems
            anyway, which are language-agnostic:
          </ArticleParagraph>
          <ArticlePDFViewer src="/articles/sugeundaesajeon/sugeundaesajeon.pdf" />
        </ArticleSection>
      )}
    </Article>
  )
}
