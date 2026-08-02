import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleSectionTitle,
  ArticlePre,
  ArticlePDFViewer,
  ArticleBlockQuote,
  ArticleImageWithLegend,
} from "@components/articles/article"

const latexCode = String.raw`
\documentclass[12pt]{standalone}

\def\repoPath{/path/to/shogiban}
\usepackage{\repoPath/shogiban/shogiban}

\begin{document}
  \begin{shogiban}[%
    board dimension = 8 cm,
    font scale      = 2.5,
    book style,
    letter ranks
  ]
    % Defending
    \pic at (9, 1) {%
      shogi piece = {%
        text   = \shogiKingGote,
        scale  = 1.25,
        rotate = 180
      }
    };
    \pic at (8, 1) {shogi piece = {text = \shogiGold, scale = 1.15, rotate = 180}};

    % Captured (Gote)
    \pic at (10.5, 1) {shogi piece = {text = \shogiRook, scale = 1, rotate = 180}};

    % Attacking
    \pic at (6, 1) {shogi piece = {text = \shogiRook, scale = 1.2}};
    \pic at (8, 3) {shogi piece = {text = \shogiPawn, scale = 1.1}};

    % Captured (Sente)
    \pic at (-0.875, 9) {shogi piece = {text = \shogiGold, scale = 1}};
  \end{shogiban}
\end{document}
`

export function LatexShogi({
  article: post,
}: ArticleProps) {
  return (
    <Article article={post}>
      <ArticleSection>
        <ArticleParagraph>
          Recently, I&apos;ve been revisiting one of my last
          LaTeX projects:{" "}
          <ArticleLink href="https://github.com/psygo/latex_shogi">
            @psygo/latex_shogi
          </ArticleLink>
          , a package which allows writers to draw vector
          diagrams for Japanese chess, or shogi, with LaTeX.
        </ArticleParagraph>
        <ArticleImageWithLegend src="/articles/latex-shogi/sample_1.svg">
          <ArticleParagraph>
            An example diagram using all the pieces.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          That project started as an adaptation of the
          package I had built for drawing LaTeX vector
          diagrams for the game of{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Go_(game)">
            Go
          </ArticleLink>
          , which I, in turn, had used to create my Go
          techniques book:{" "}
          <ArticleLink href="https://github.com/psygo/tecnicas_de_go">
            @psygo/tecnicas_de_go
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleImageWithLegend src="/articles/latex-shogi/shogi_problema_1.svg">
          <ArticleParagraph>
            Another example diagram, this time with
            coordinates.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Through code that&apos;s as simple as{" "}
          <ArticleLink href="https://github.com/psygo/latex_shogi/blob/main/src/shogi_diagram_export.tex">
            this
          </ArticleLink>
          , we&apos;re now able to draw beautiful shogi
          diagrams which won&apos;t ever pixelate:
        </ArticleParagraph>
        <ArticlePre language="latex">
          {latexCode}
        </ArticlePre>
        <ArticleParagraph>
          That piece of code generates this square diagram,
          which is what you&apos;re gonna find in most shogi
          books:
        </ArticleParagraph>
        <ArticleImageWithLegend src="/articles/latex-shogi/shogi_diagram_export.svg">
          <ArticleParagraph>
            A square diagram example, the more common format
            in shogi books. Note that we do have the
            &quot;mochigoma&quot; feature, that is, the
            captured pieces on the side of the board.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Here&apos;s a{" "}
          <ArticleLink href="/articles/latex-shogi/sample.pdf">
            sample
          </ArticleLink>{" "}
          of what can be done with the current package, in
          Portuguese though:
        </ArticleParagraph>
        <ArticlePDFViewer src="/articles/latex-shogi/sample.pdf" />
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Programming in LaTeX with AI
        </ArticleSectionTitle>
        <ArticleParagraph>
          One thing I need to add is that AI fastforwarded
          this project considerably. After I got the first
          version going, if I were to implement all the
          other features myself, without any help, I could
          have easily worked for 2 weeks to have them happen
          cleanly. Instead, it took me 1-2 days with AI.
        </ArticleParagraph>
        <ArticleParagraph>
          Less than 2 years ago, even though AI was doing
          well in most programming languages, that was not
          the case when it came to LaTeX. But, now, Claude
          AI does just as well as anyone &mdash; although
          other AIs might make you suffer quite a lot still.
          And it does well through code that&apos;s very
          easy to read, which cannot be said about many
          LaTeX experts out there, who mostly come from the
          academic world.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Exporting the Diagrams to Vector Images
        </ArticleSectionTitle>
        <ArticleParagraph>
          If you would like to use the diagrams as vector
          images on other projects, you could just open the
          resulting PDF inside a vector graphics editor,
          such{" "}
          <ArticleLink href="https://inkscape.org/">
            Inkscape
          </ArticleLink>
          , and export a selection to a vector graphics
          image, such as an SVG.
        </ArticleParagraph>
        <ArticleParagraph>
          But that&apos;s the manual option, which might be
          more versatile, depending on your context.
          However, if you prefer the more programmatic
          version, you could instead use this on the command
          line:
        </ArticleParagraph>
        <ArticlePre language="bash">
          pdftocairo -svg filename.pdf filename.svg
        </ArticlePre>
        <ArticleBlockQuote>
          Those are the processes I&apos;ve been using to
          create my Go diagrams in my Go articles, such as
          the{" "}
          <ArticleLink
            internal
            href="https://neofanaroio.vercel.app/articles/okaoigo-ai-articles"
          >
            okaoigo&apos;s one
          </ArticleLink>
          .
        </ArticleBlockQuote>
      </ArticleSection>
    </Article>
  )
}
