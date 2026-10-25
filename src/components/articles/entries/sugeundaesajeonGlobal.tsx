import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleSectionTitle,
  ArticleSubSection,
  ArticleSubSectionTitle,
  ArticleTableOfContents,
  DiagramRef,
  ImageLegend,
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
} from "../../goViewer/exports"

export function SugeundaesajeonGlobal({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleSectionTitle>Context</ArticleSectionTitle>
        <ArticleParagraph>
          On a previous post,{" "}
          <ArticleLink
            internal
            href="/articles/sugeundaesajeon"
          >
            I shared the workbook for the Nihon Kiin&apos;s{" "}
            <em>Tesuji Encyclopedia</em>
          </ArticleLink>
          . However, still, most people are probably unaware
          that problem collection features two parts: a
          first for the expected, local tesuji problems; but
          also a second, for global problems.
        </ArticleParagraph>
        <ArticleParagraph>
          At a first glance, those might seem like just some
          extra problems to contextualize what the reader
          has learned through the first, core section.
          That&apos;s not the case. The problems in that
          latter section grow on me every time I take a look
          at them, and I believe solving them is perhaps an
          even truer mark of expert skill than solving the
          more standard problems.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/sugeundaesajeon-global/sugeundaesajeon_downscaled.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            The cover for the Chinese edition of the Nihon
            Kiin&apos;s <em>Tesuji Encyclopedia</em>.
          </ImageLegend>
        </ArticleImageWithLegend>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionTitle>Problems</ArticleSectionTitle>

        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2479
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            This first problem is a brilliant illustration
            of flow and interaction effects.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2479.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2479, White to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            We have to link the forcing moves on both sides
            in order to have them collide:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2479_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black needs to save one side, saving both
              isn&pos;t possible.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            If Black tries to save it all...
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2479_2.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black fails in a ladder.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>

        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2478
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Some problems in the book, though, are
            definitely quite problematic. Not for their
            setup, but for their solution.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2478, White to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            As a not-so-strong player, I cannot approve the
            proposed solution here, and{" "}
            <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/57100eca-ce7a-4264-a70a-5cc112a4c448">
              neither can AI
            </ArticleLink>
            , estimating the loss from move 1 on Dia.{" "}
            <DiagramRef label="2478_1" /> to be around 2.3
            points.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
            />
            <GoViewerControls />
            <GoViewerLegend>
              The book&apos;s solution to problem 2478.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            If there&apos;s a vital point on the top,
            it&apos;s 1 on Dia.{" "}
            <DiagramRef label="2478_2" />, not 1 on Dia.{" "}
            <DiagramRef label="2478_1" />.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478_2.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
            />
            <GoViewerLegend>
              Problem 2478, White to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            According to AI, the top is still very hard to
            kill, so, surprisingly, it would choose to play
            11 on Dia. <DiagramRef label="2478_2" />
            &nbsp;first. If Black, tries to kill the top,
            only then does the book&apos;s tesuji shine:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478_3.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
            />
            <GoViewerControls />
            <GoViewerLegend>
              The book&apos;s tesuji shines even brighter
              when we tenuki first.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>

        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2482
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Again, Black has a potentially troublesome
            capture on the right side. How can White use it?
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2482.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2482, White to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            White uses a forcing move on the right with 1 to
            then drive the A stones. Due to the shortage of
            liberties, disconnecting White&apos;s group in
            the B direction isn&apos;t possible. And Black 8
            is necessary, given the C weakness.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2482_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              White pierces through on the right side.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>
      </ArticleSection>
    </Article>
  )
}
