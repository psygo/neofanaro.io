import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleYouTubeIframe,
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
  readSgfFile,
} from "@components/goViewer/exports"

export function MammothsJump({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          There&apos;s nothing new under the sun. But, at
          the same time, the post-AI era seems to emphasize
          different enough shapes for us to feel like
          they&apos;re new.
        </ArticleParagraph>
        <ArticleParagraph>
          In this series, we&apos;ll explore some of them.
          Most have been spotted and catalogued by much
          stronger players than me, but this first one I
          haven&apos;t spotted anyone mentioning yet. In
          order to not forward any misinformation, I&apos;ve
          double-checked the following information with
          friends and professional players, such as
          Alexandre Amaro 7d Fox and Michael Chen 2p &mdash;
          my current rank is Fox 6-7d.
        </ArticleParagraph>
        <ArticleParagraph>
          The &quot;Mammoth&apos;s Jump&quot; is exemplified
          here, in a{" "}
          <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/46aa4a9d-8754-40e0-8320-39e85bcc6696">
            game between Kim Eunji 9p (Black) and Lee
            Jihyeon 9p (White)
          </ArticleLink>
          , played on September 20th, 2026:
        </ArticleParagraph>
        <GoViewer
          sgf={readSgfFile("/articles/mammoths-jump/1.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            // {...goViewerKayaTheme}
            // {...goViewerBookishTheme}
            // showMoveNumbers
            // backgroundImage="/board_themes/kaya/kaya_bg.png"
            // backgroundImage=""
            interactive={true}
            size={425}
          />
          <GoViewerControls />
          <GoViewerLegend>
            A cap from a game between Kim Eunji 9p (Black)
            and Lee Jihyeon 9p (White), forming the
            &quot;Mammoth&apos;s Jump&quot; with A.
          </GoViewerLegend>
        </GoViewer>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/1OtxBf-EQJ8"
          title="Kim Eunji 9p vs Lee Jihyeon 9p - Mammoth's Jump"
        />
      </ArticleSection>
    </Article>
  )
}
