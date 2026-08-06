import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleBlockQuote,
  ArticleCode,
  ArticleImageWithLegend,
} from "../articleContent"
import { ArticlePre } from "@components/articles/articlePre"

export function LatexBackgammon({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Right after finishing my{" "}
          <ArticleLink href="/articles/latex-shogi">
            LaTeX Shogi
          </ArticleLink>{" "}
          project , I got an itch for doing something
          analogous but to another game, one that I believe
          is only second to Go in terms of strategy and
          beauty. The resulting code is here:{" "}
          <ArticleLink href="https://github.com/psygo/latex_backgammon">
            @psygo/latex_backgammon
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/latex-backgammon/backgammon_color.svg"
          height={100}
          width={390}
        >
          <ArticleParagraph>
            A vector diagram for the game of backgammon.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          This time though, I did 99% of the project with
          AI, more especifically, Claude AI. The only thing
          I didn&apos;t create with AI was the scaffolding
          with TikZ and its <ArticleCode>\pic</ArticleCode>{" "}
          API, in an attempt to have the code more organized
          and readable.
        </ArticleParagraph>
        <ArticleBlockQuote>
          <ArticleParagraph>
            Curiously, backgammon is also the only board
            game, out of the ones still played, which could
            compete with Go when it comes to age. Its
            predecessor was known as{" "}
            <ArticleLink href="https://youtu.be/WZskjLq040I">
              The Royal Game of Ur
            </ArticleLink>
            , and was played as far back as ancient Babylon,
            around 4,000 years ago!
          </ArticleParagraph>
        </ArticleBlockQuote>
        <ArticleParagraph>
          If you&apos;re interested in the project, I
          suggest you check out{" "}
          <ArticleLink href="https://github.com/psygo/latex_shogi">
            LaTeX Shogi on Github (@psygo/latex_shogi)
          </ArticleLink>{" "}
          and{" "}
          <ArticleLink href="/articles/latex-shogi">
            its companion article
          </ArticleLink>{" "}
          too, but the{" "}
          <ArticleLink href="https://github.com/psygo/latex_backgammon/blob/main/src/backgammon_export.tex">
            <ArticleCode>backgammon_export.tex</ArticleCode>
          </ArticleLink>{" "}
          file provides a pretty nice example of how to use
          the package.
        </ArticleParagraph>
        <ArticleParagraph>
          After generating the PDF, you could also generate
          an SVG through either opening up a graphical
          editor, such as{" "}
          <ArticleLink href="https://inkscape.org/">
            Inkscape
          </ArticleLink>
          , or by using this on the command line:
        </ArticleParagraph>
        <ArticlePre language="bash">
          pdftocairo -svg filename.pdf filename.svg
        </ArticlePre>
      </ArticleSection>
    </Article>
  )
}
