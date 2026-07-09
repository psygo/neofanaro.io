import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostImageWithLegend,
  PostSectionTitle,
  PostPre,
} from "@components/posts/post"

const latexCode = String.raw`\documentclass[12pt]{standalone}

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
\end{document}`

export function LatexShogi({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Recently, I&apos;ve been revisiting one of my last
          LaTeX projects:{" "}
          <PostLink href="https://github.com/psygo/latex_shogi">
            @psygo/latex_shogi
          </PostLink>
          , which allows people to draw vector diagrams with
          LaTeX for Japanese chess, or shogi.{" "}
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/latex_shogi/sample_1.svg"
          legend="An example diagram using all the pieces."
          className="mx-7 mb-0 h-full w-80"
        />
        <PostParagraph>
          That project started as an adaptation of the
          package I had built for drawing LaTeX vector
          diagrams for the game of{" "}
          <PostLink href="https://en.wikipedia.org/wiki/Go_(game)">
            Go
          </PostLink>
          , which I, in turn, had used to create my Go
          techniques book:{" "}
          <PostLink href="https://github.com/psygo/tecnicas_de_go">
            @psygo/tecnicas_de_go
          </PostLink>
          .
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/latex_shogi/shogi_problema_1.svg"
          legend="Another example, this time with coordinates."
          className="mx-7 mb-0 h-full w-80"
        />
        <PostParagraph>
          Through code that&apos;s as simple as{" "}
          <PostLink href="https://github.com/psygo/latex_shogi/blob/main/src/shogi_diagram_export.tex">
            this
          </PostLink>
          , we&apos;re now able to draw beautiful shogi
          diagrams which won&apos;t ever pixelate:
        </PostParagraph>
        <PostPre language="latex">{latexCode}</PostPre>
        <PostParagraph>
          That piece of code generates this square diagram,
          which is what you&apos;re gonna find in most shogi
          books:
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/latex_shogi/shogi_diagram_export.svg"
          legend="A square diagram example, the more common format in shogi books. Note that we do have the captured pieces on the side of the board feature."
          className="mx-7 mb-0 h-full w-90"
        />
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          Programming in LaTeX with AI
        </PostSectionTitle>
        <PostParagraph>
          One thing I need to add is that AI fastforwarded
          this project considerably. After I got the first
          version going, if I add up the other features, I
          could have easily worked for 2 weeks to have them
          happen cleanly. Instead, it took me 1-2 days with
          AI.
        </PostParagraph>
        <PostParagraph>
          Less than 2 years ago, even though AI was doing
          well in most programming languages, when it came
          to LaTeX, but, now, Claude AI does just as well as
          anyone &mdash; other AIs might make you suffer
          considerably still though. And it does well
          through code that&apos;s very easy to read, which
          cannot be said about many LaTeX experts out there,
          who mostly come from the academic world.
        </PostParagraph>
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          Exporting the Diagrams to Vector Images
        </PostSectionTitle>
        <PostParagraph>
          If you would like to use the diagrams as vector
          images on other projects, you could easily open
          the resulting PDF inside a vector graphics editor,
          such{" "}
          <PostLink href="https://inkscape.org/">
            Inkscape
          </PostLink>
          , and export a selection to a vector graphics
          image, such as an SVG.
        </PostParagraph>
        <PostParagraph>
          But that&apos;s the manual option, which might be
          more versatile, depending on your context. But, if
          you prefer the more programmatic version, you
          could just use this on the command line:
        </PostParagraph>
        <PostPre language="bash">
          pdftocairo -svg filename.pdf filename.svg
        </PostPre>
      </PostSection>
    </Post>
  )
}
