import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleSectionTitle,
  ArticleTableOfContents,
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
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleSectionTitle>
          The Next Gen Shapes Series
        </ArticleSectionTitle>
        <ArticleParagraph>
          There&apos;s nothing new under the sun. But, at
          the same time, the post-AI era seems to emphasize
          different enough shapes for us to maybe feel like
          they&apos;re new.
        </ArticleParagraph>
        <ArticleParagraph>
          In this series, we&apos;ll explore some of them.
          Most have been spotted and catalogued by much
          stronger players than me, but this first one I
          haven&apos;t spotted anyone mentioning yet.
        </ArticleParagraph>
        <ArticleParagraph>
          The following explanations haven&apos;t really
          been checked by any professional players,
          they&apos;ve mostly come from my experiences and
          interpretation, as a Fox 6-7d player, at most I
          have briefly commented about them to friends and
          colleagues of similar rank.
        </ArticleParagraph>
        <ArticleParagraph>
          So bear with me through the future improvements
          this article will inevitably need. And, if you
          feel like you have something to add, please do so
          in the comments below or through direct messages
          with me.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          The Mammoth&apos;s Jump
        </ArticleSectionTitle>
        <ArticleParagraph>
          The &quot;Mammoth&apos;s Jump&quot; is exemplified
          in Dia. 1, in a{" "}
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
          <GoViewerBoard interactive={true} size={425} />
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
        <ArticleParagraph>
          The shape between 1 and A is similar to the{" "}
          <ArticleLink href="https://senseis.xmp.net/?Elephant">
            &quot;Elephant&apos;s Jump&quot;
          </ArticleLink>
          , hence the overly creative name for it. Do people
          prefer &quot;Big Elephant&apos;s Jump&quot;
          instead? An <em>ohazama tobi</em> perhaps?
        </ArticleParagraph>
        <GoViewer
          sgf={readSgfFile("/articles/mammoths-jump/2.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            size={330}
            region={{
              minRow: 6,
              maxRow: 12,
              minCol: 6,
              maxCol: 12,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            The &quot;Elephant&apos;s Jump&quot;, diagonal
            jump or <em>hazama tobi</em>&nbsp; in Japanese,
            the shape from A to B. This shape&apos;s name
            comes from the elephant piece in the game of
            xiangqi &mdash; <em>xiàng</em>&nbsp; means
            elephant in Chinese, so xiangqi is quite
            literally &quot;Elephant Board/Strategy
            Game&quot; &mdash;, in which the elephant piece
            jumps over one space diagonally.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          The middle point between A and B in Dia. 2 is
          called the &quot;Elephant&apos;s Eye&quot;, and is
          usually a major weakness, since it splits the A
          from B. However, with proper setup and good
          direction, White 1 could backfire into a less
          meaningful, slow, or even dangerous poke. After
          all, it&apos;s a move in-between two outside
          opposing stones, not generating any shape or
          points by itself.
        </ArticleParagraph>
        <ArticleParagraph>
          In almost all cases, Black would like to avoid
          trying to block the splitting stone too tightly,
          as it doesn&apos;t work, and essentially only
          creates a broken keima between 1 and A:
        </ArticleParagraph>
        <GoViewer
          sgf={readSgfFile("/articles/mammoths-jump/3.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            size={330}
            region={{
              minRow: 6,
              maxRow: 12,
              minCol: 6,
              maxCol: 12,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black chases White from behind, while also
            damaging the A stone.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          In general, it&apos;s better technique to jump
          ahead with a keima, as in Dia. 4, staying ahead of
          the opponent, which allows us to then spend our
          turn to defend the A stone with B, or perhaps try
          fights or compromises with C.
        </ArticleParagraph>
        <GoViewer
          sgf={readSgfFile("/articles/mammoths-jump/4.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            size={330}
            region={{
              minRow: 6,
              maxRow: 12,
              minCol: 6,
              maxCol: 12,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black now jumps ahead, and is then able to
            defend the A stone in the next move.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          The Mammoth&apos;s Jump is just a variation on the
          logic behind the Elephant&apos;s Jump, as far as I
          was able to investigate.
        </ArticleParagraph>
        <ArticleParagraph>
          But with A a little bit further away, as in Dia.
          5, when playing moves such as 2, there&apos;s less
          direct damage to A when White breaks through.
        </ArticleParagraph>
        <GoViewer
          sgf={readSgfFile("/articles/mammoths-jump/5.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            size={330}
            region={{
              minRow: 6,
              maxRow: 13,
              minCol: 6,
              maxCol: 12,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            As White breaks through, Black&apos;s A stone
            takes less direct damage.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Again, it&apos;s worth emphasizing that neither
          the Elephant&apos;s Jump nor the Mammoth&apos;s
          Jump make much sense without the appropriate
          context.
        </ArticleParagraph>
        <ArticleParagraph>
          In the game example we&apos;ve briefly inspected
          above, Black has quite a few reinforcements
          backing one side of the Mammoth&apos;s Jump, and
          that&apos;s not even mentioning that the
          bottom-right context of a lone White stone might
          be even more relevant here:
        </ArticleParagraph>
        <GoViewer
          sgf={readSgfFile("/articles/mammoths-jump/6.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            fromNumber={32}
            size={425}
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black switches to the bottom-right corner, which
            is much more efficient than insisting on the
            center fight.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Black is willing the sacrifice the A stone in the
          center, the stone which originated the
          Mammoth&apos;s Jump in the first place, in order
          to take strength and potential profits against
          White&apos;s B stone.
        </ArticleParagraph>
        <ArticleParagraph>
          Lee Jihyeon 9p (White)&apos;s thought process is
          not available to me, nonetheless I suppose he
          didn&apos;t poke through because, not only does it
          damage B, it&apos;s a slow move in the center
          &mdash; a kosumi is typically a very slow in
          general as well, not only in this context. In the
          game, he chose to make a pretty shape with C.
        </ArticleParagraph>
        <ArticleParagraph>
          Unexpectedly, though, 32 in Dia. 6 is AI&apos;s
          recommendation for White still, with C losing
          almost a point, or around 11% of win ratio.
        </ArticleParagraph>
        <ArticleParagraph>
          Circling back to the appropriate context theme,
          the &quot;feels-good&quot; A cap in Dia. 6, in the
          middle, in the beginning of the game is typically
          too vague for AI. White&apos;s group on the left
          is not weak enough to justify a center move at
          this point in the game. The loss is small, of
          course, and Kim Eunji 9p (Black) probably chose it
          anyway because it fits her fierce style of play.
          To the AI acolytes out there, as Alexandre Amaro
          Fox 7-8d would say, A feels like a gamble.
        </ArticleParagraph>
        <ArticleParagraph>
          AI would rather kick White&apos;s stone in the
          bottom-right, while showing a beautiful display of
          flexibility in response, diving into the 3-3 right
          way:
        </ArticleParagraph>
        <GoViewer
          sgf={readSgfFile("/articles/mammoths-jump/7.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            fromNumber={31}
            size={425}
          />
          <GoViewerControls />
          <GoViewerLegend>
            According to AI, Black should have switched
            directly to the bottom-right, and White should
            flexibly not insist on saving the A stone.
          </GoViewerLegend>
        </GoViewer>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          The Mammoth&apos;s Jump for Moyo Development
        </ArticleSectionTitle>
        <ArticleParagraph>
          Another context in which the Mammoth&apos;s Jump
          shows itself, even more so as a new move, is in
          moyo development.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          The Mammoth&apos;s Jump and The Tiger Shimari
        </ArticleSectionTitle>
        <ArticleParagraph>T</ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
