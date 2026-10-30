import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
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

export function SugeundaesajeonCover({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleSectionTitle>Context</ArticleSectionTitle>
        <ArticleParagraph>
          On a previous article, I shared{" "}
          <ArticleLink
            internal
            href="/articles/sugeundaesajeon"
          >
            my edition of the Tesuji Encyclopedia
          </ArticleLink>
          , for which I also created a different cover than
          the original, featuring 4 remarkable problems in
          that problem collection. Let&apos;s take a look at
          what makes those problems special.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/sugeundaesajeon-cover/sugeundaesajeon_my_cover.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            The cover for my edition of the Tesuji
            Encyclopedia. Imagine the problems isolated into
            quadrants.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/sugeundaesajeon-global/sugeundaesajeon_downscaled.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            The cover for the{" "}
            <ArticleLink href="https://drive.google.com/file/d/1GE-ejbqXoILEsUC9vSdguuty-tZy72RH/view?usp=drive_link">
              Chinese edition of the Nihon Kiin&apos;s{" "}
              <em>Tesuji Encyclopedia</em>
            </ArticleLink>
            .
          </ImageLegend>
          <ArticleBlockQuote>
            In another Tesuji Encyclopedia article, I also
            went through{" "}
            <ArticleLink href="/articles/sugeundaesajeon-global">
              its global problems
            </ArticleLink>
            .
          </ArticleBlockQuote>
        </ArticleImageWithLegend>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>Problems</ArticleSectionTitle>
        <ArticleParagraph>
          Imagine the problems on my cover as isolated in
          their respective quadrants. And in this
          encyclopedia, you need to figure out whose turn it
          is.
        </ArticleParagraph>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Top-Left
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            In a regular game, I doubt most people would
            have spotted there&apos;s something we can do
            here. But this wouldn&apos;t be featured in an
            encyclopedia if it didn&apos;t have anything
            special behind it.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_left.sgf">
            <GoViewerBoard
              width={350}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 11,
                minCol: 0,
                maxCol: 11,
              }}
            />
            <GoViewerLegend>
              The top-left problem on my cover.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            As usual, we must assume the ladder works for
            Black, so escaping with the A stone in Dia.{" "}
            <DiagramRef label="top_left_1" /> isn&apos;t
            really a possibility.
          </ArticleParagraph>
          <ArticleParagraph>
            Playing the typical atari is too simple. That
            sort of thinking helps a ton when trying to
            solve tsumegos, by the way.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_left_1.sgf">
            <GoViewerBoard
              width={350}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 11,
                minCol: 0,
                maxCol: 11,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black&apos;s stone at 2 helps a lot with
              whatever white tries at the top.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            There&apos;s a chance Black would have captured
            at B instead of 2 in Dia.{" "}
            <DiagramRef label="top_left_1" />. However,
            Black would then probably have to suffer the
            atari at White 2 instead. That&apos;s a huge
            hint:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_left_2.sgf">
            <GoViewerBoard
              width={350}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 11,
                minCol: 0,
                maxCol: 11,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              With the cross-atari here, Black&apos;s shape
              collapses.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Black ends up in a lot of trouble. Connecting
            the ko is terrible shape, and White gets an
            extra stone at the top. But fighting that ko is
            an unthinkable flower ko for White.
          </ArticleParagraph>
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Top-Right
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Next is a problem which tests out your side
            life-and-death and &quot; my opponent&apos;s
            best move is my best move &quot; thinking
            &mdash; the latter being what Inseong Hwang 8d
            EGF calls{" "}
            <ArticleLink href="https://eyd.yunguseng.com/videos/index.php?id=686">
              &quot;1-2-3 reading&quot;
            </ArticleLink>
            .
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_right.sgf">
            <GoViewerBoard
              width={425}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerLegend>
              The top-right problem on my cover.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Just sliding isn&apos;t enough to live. White
            will reduce Black&apos;s shape the famous 2-2-2,
            which is very often dead on the side, especially
            when the triangle-marked stones have no external
            liberties:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_right_1.sgf">
            <GoViewerBoard
              width={425}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Sliding isn&apos;t enough.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            The peep is of Black 1 on Dia.{" "}
            <DiagramRef label="top_right_2" /> is much
            better. The naïve solution would go like this:
          </ArticleParagraph>
          <ArticleParagraph>
            White should be very careful here. Just blocking
            in Dia. <DiagramRef label="top_right_6" /> seems
            to work at first, but Black can create a ko:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_right_6.sgf">
            <GoViewerBoard
              width={425}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black can create a ko if White doesn&apos;t
              push first.
            </GoViewerLegend>
          </GoViewer>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_right_2.sgf">
            <GoViewerBoard
              width={425}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              The naïve solution from the peep.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            With 3, Black expands its internal shape a bit
            beyond the 2-2-2 shape, which guarantees life.
            However, White won&apos;t be so kind, White will
            push first, as in Dia.{" "}
            <DiagramRef label="top_right_3" />. If you then
            block, White won&apos;t block directly, White
            will hit the vital point first, and we end up
            with the 2-2-2 once again.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_right_3.sgf">
            <GoViewerBoard
              width={425}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              White pushes first. If Black accepts it, we go
              back to the 2-2-2 shape.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Now we finally get to the key move of the
            problem actually, the reason I chose this
            specific tsumego. Can you apply 1-2-3 reading
            here?
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_right_4.sgf">
            <GoViewerBoard
              width={425}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              The key move for this problem.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            White has no choice but to connect, the corner
            is even bigger than the side kill after all. And
            then Black can finally reach the 2-2-3 shape and
            live.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-cover/top_right_5.sgf">
            <GoViewerBoard
              width={425}
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              The key move for this problem.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>
      </ArticleSection>
    </Article>
  )
}
