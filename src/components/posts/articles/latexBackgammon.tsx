import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostBlockQuote,
  PostCode,
  PostPre,
  PostImageWithLegend,
} from "@components/posts/post"

export function LatexBackgammon({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Right after finishing my{" "}
          <PostLink href="/articles/latex-shogi">
            LaTeX Shogi
          </PostLink>{" "}
          project , I got an itch for doing something
          analogous but to another game, one that I believe
          is only second to Go in terms of strategy and
          beauty. The resulting code is here:{" "}
          <PostLink href="https://github.com/psygo/latex_backgammon">
            @psygo/latex_backgammon
          </PostLink>
          .
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/latex-backgammon/backgammon_color.svg"
          height={100}
          width={390}
        >
          <p>
            A vector diagram for the game of backgammon.
          </p>
        </PostImageWithLegend>
        <PostParagraph>
          This time though, I did 99% of the project with
          AI, more especifically, with Claude AI. The only
          thing I didn&apos;t create with AI was the
          specific scaffolding with TikZ and its{" "}
          <PostCode>\pic</PostCode> API, in an attempt to
          have the code more organized and readable.
        </PostParagraph>
        <PostBlockQuote>
          Curiously, backgammon is also the only board game,
          out of the ones still played, which could compete
          with Go when it comes to age. Its predecessor was
          known as{" "}
          <PostLink href="https://youtu.be/WZskjLq040I">
            The Royal Game of Ur
          </PostLink>{" "}
          , and was played as far back as ancient Babylon,
          around 4,000 years ago!
        </PostBlockQuote>
        <PostParagraph>
          If you&apos;re interested in the project, I
          suggest you check out{" "}
          <PostLink href="https://github.com/psygo/latex_shogi">
            LaTeX Shogi on Github
          </PostLink>{" "}
          and{" "}
          <PostLink href="/articles/latex-shogi">
            its companion article
          </PostLink>{" "}
          too, but the{" "}
          <PostLink href="https://github.com/psygo/latex_backgammon/blob/main/src/backgammon_export.tex">
            <PostCode>backgammon_export.tex</PostCode>
          </PostLink>{" "}
          file provides a pretty nice example of how to use
          the package.
        </PostParagraph>
        <PostParagraph>
          After generating the PDF, you could also generate
          an SVG through either opening up a graphical
          editor, such as{" "}
          <PostLink href="https://inkscape.org/">
            Inkscape
          </PostLink>
          , or by using this on the command line:
        </PostParagraph>
        <PostPre language="bash">
          pdftocairo -svg filename.pdf filename.svg
        </PostPre>
      </PostSection>
    </Post>
  )
}
