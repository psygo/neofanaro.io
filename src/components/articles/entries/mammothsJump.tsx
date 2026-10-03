import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleQuote,
  ArticleSection,
  ArticleSectionTitle,
  ArticleTableOfContents,
  ArticleYouTubeIframe,
  DiagramRef,
  ImageLegend,
  NoWrap,
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
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
          in Dia. <DiagramRef label="game-example" />, in a{" "}
          <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/46aa4a9d-8754-40e0-8320-39e85bcc6696">
            game between Kim Eunji <NoWrap>김은지</NoWrap>{" "}
            9p (Black) and Lee Jihyeon{" "}
            <NoWrap>이지현</NoWrap> 9p (White)
          </ArticleLink>
          , played on September 20th, 2026:
        </ArticleParagraph>
        <GoViewer
          label="game-example"
          sgf="/articles/mammoths-jump/1.sgf"
          startAt="end"
        >
          <GoViewerBoard interactive={true} />
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
          label="elephants-jump"
          sgf="/articles/mammoths-jump/2.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
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
          The middle point between A and B in Dia.{" "}
          <DiagramRef label="elephants-jump" />
          &nbsp;is called the &quot;Elephant&apos;s
          Eye&quot;, and is usually a major weakness, since
          it splits the A from B. However, with proper setup
          and good direction, White 1 could backfire into a
          less meaningful, slow, or even dangerous poke.
          After all, it&apos;s a move in between two outside
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
          label="broken-keima"
          sgf="/articles/mammoths-jump/3.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
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
          In general, it&apos;s a better technique to jump
          ahead with a keima, as in Dia.{" "}
          <DiagramRef label="jump-ahead" />, staying ahead
          of the opponent, which allows us to then spend our
          turn to defend the A stone with B, or perhaps try
          fights or compromises with C.
        </ArticleParagraph>
        <GoViewer
          label="jump-ahead"
          sgf="/articles/mammoths-jump/4.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
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
          But with A a little bit further away, as in Dia.{" "}
          <DiagramRef label="jump-further" />, when playing
          moves such as 2, there&apos;s less direct damage
          to A when White breaks through.
        </ArticleParagraph>
        <GoViewer
          label="jump-further"
          sgf="/articles/mammoths-jump/5.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
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
          label="switch-bottom-right"
          sgf="/articles/mammoths-jump/6.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            fromNumber={32}
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black switches to the bottom-right corner, which
            is much more efficient than insisting on the
            center fight.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Black is willing to sacrifice the A stone in the
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
          &mdash; a kosumi is typically very slow in general
          as well, not only in this context. In the game, he
          chose to make a pretty shape with C.
        </ArticleParagraph>
        <ArticleParagraph>
          Unexpectedly, though, 32 in Dia.{" "}
          <DiagramRef label="switch-bottom-right" />
          &nbsp;is AI&apos;s recommendation for White still,
          with C losing almost a point, or around an 11% in
          win rate.
        </ArticleParagraph>
        <ArticleParagraph>
          Circling back to the appropriate context theme,
          the &quot;feels-good&quot; A cap in Dia.{" "}
          <DiagramRef label="switch-bottom-right" />, in the
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
          label="ai-recommended"
          sgf="/articles/mammoths-jump/7.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            fromNumber={31}
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
          The Mammoth&apos;s Jump is admittedly very niche.
          No wonder, this article is likely the longest
          essay on it to this day if not for a very long
          time &mdash; or forever, although that&apos;s also
          a very long time. But the point in studying it is
          to generalize the underlying, related techniques
          to other areas of the game.
        </ArticleParagraph>
        <ArticleParagraph>
          And one such area is related to moyos. Sometimes,
          the Elephant&apos;s Jump can be an amazing tool
          for defending moyos:
        </ArticleParagraph>
        <GoViewer
          label="moyo-defend"
          sgf="/articles/mammoths-jump/eleph_1.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            // fromNumber={31}
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black 1 goes one line beyond the
            influence-collision area.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Both Black and White are trying to expand their
          moyos, with the influence-collision area being
          around A. With 1 on Dia.{" "}
          <DiagramRef label="moyo-defend" />, Black aims at
          skipping one step further than A, while also
          reserving the possibility of turning that move
          into more of an invasion or reduction, rather than
          a moyo expansion.
        </ArticleParagraph>
        <ArticleParagraph>
          If White tries to get in, Black will switch to
          defending the right side, dealing with the lone
          Black group in the center separately, while
          forcing White into creating an empty triangle with
          the 2-4-6 shape:
        </ArticleParagraph>
        <GoViewer
          label="moyo-switch"
          sgf="/articles/mammoths-jump/eleph_2.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            // fromNumber={31}
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black deals with its center group separately.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          The Mammoth&apos;s Jump could serve similarly
          flexible purposes. For example, in the first NEC
          Japan-China Super Go team match, in 1984, Yoda
          Norimoto 5p (Black) unfortunately couldn&apos;t
          find the key move in defending his moyo while also
          reducing his opponent&apos;s, Jiang Zhujiu 7p
          (White):
        </ArticleParagraph>
        <GoViewer
          label="nec-match"
          sgf="/articles/mammoths-jump/nec_1.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            // fromNumber={31}
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black 1, the key move to defend its moyo while
            also reducing White&apos;s center.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Curiously, Black 1 happens to be a Mammoth&apos;s
          Jump from A, and an Elephant&apos;s Jump from B.
        </ArticleParagraph>
        <ArticleParagraph>
          If you would like to know how Black should deal
          with White&apos;s pokes, check out{" "}
          <ArticleLink href="https://youtu.be/FqiSshkeXKM?t=2218">
            Go Game Series&apos;s{" "}
            <em>China Japan Super Go Match</em> series
          </ArticleLink>{" "}
          &mdash; Go Game Series is, in my opinion, the best
          Go YouTube channel at this point &mdash;, which is
          where that example comes from:
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/FqiSshkeXKM"
          title="Go Game Series - TIGER'S TEETH! [China Japan Super Go Match] Season 1 Episode 3"
        />
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          The Mammoth&apos;s Jump and The Tiger Shimari
        </ArticleSectionTitle>
        <ArticleParagraph>
          The Mammoth&apos;s Jump, when placed in the
          corner, with the <NoWrap>5-3</NoWrap> first
          probably, has even received its own moniker, the{" "}
          <ArticleLink href="https://senseis.xmp.net/?3563Enclosure">
            Tiger Shimari
          </ArticleLink>
          :
        </ArticleParagraph>
        <GoViewer
          label="tiger-shimari"
          sgf="/articles/mammoths-jump/tiger_1.sgf"
          startAt="end"
        >
          <GoViewerBoard
            region={{
              minRow: 9,
              maxRow: 18,
              minCol: 9,
              maxCol: 18,
            }}
          />
          <GoViewerLegend>
            The Tiger Shimari.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Kataoka Satoshi <NoWrap>片岡聡</NoWrap> 9p gave it
          the following amusing commentary, during a game
          between O Meien <NoWrap>王銘琬</NoWrap> 9p (Black)
          and Takagi Shoichi <NoWrap>高木祥</NoWrap> 9p
          (White), in 2001 &mdash; that enclosure was even
          classed as a{" "}
          <ArticleLink href="https://senseis.xmp.net/?Meienism">
            Meienism
          </ArticleLink>
          :
        </ArticleParagraph>
        <ArticleQuote>
          It is just like dislocating one&apos;s jaw.
        </ArticleQuote>
        <ArticleParagraph>
          But he also added:
        </ArticleParagraph>
        <ArticleQuote>
          If Black is able to play A next (Dia.{" "}
          <DiagramRef label="tiger-shimari" />
          ), it would be quite the nice shape for Black.
          However, there are no such good moves available
          for White.
        </ArticleQuote>
        <ArticleParagraph>
          The Tiger Shimari seems to even have been played
          by the legendary Huang Longshi{" "}
          <NoWrap>黄龍士</NoWrap> (1651 - 1700) and Takemiya
          Masaki <NoWrap>武宮正樹</NoWrap> 9p, according to
          John Fairbairn. And, on Amazon Japan, it also has{" "}
          <ArticleLink href="https://amzn.asia/d/04LDkwOj">
            its own book
          </ArticleLink>{" "}
          .
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/mammoths-jump/tiger_shimari_book.jpg"
          height={100}
          width={300}
        >
          <ImageLegend>
            A whole book on the Tiger Shimari. It&apos;s
            longer than this article!
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Even though that curious pattern is mostly used
          out of boredom, or to get a competitive edge over
          the opponent, it does have its place as a possible
          best move. For example, in Dia.{" "}
          <DiagramRef label="tiger-best-moves" />, AI gives
          A, B and C as White&apos;s best options, in that
          order:
        </ArticleParagraph>
        <GoViewer
          label="tiger-best-moves"
          sgf="/articles/mammoths-jump/tiger_2.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
          />
          <GoViewerControls />
          <GoViewerLegend>
            A situation in which the Tiger Shimari is one of
            the best moves.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          The main idea behind the Tiger Shimari is to
          invite White into either A or B in Dia.{" "}
          <DiagramRef label="tiger-attack" />, in order to
          attack the splitting group from both sides,
          building territory from the attack.
        </ArticleParagraph>
        <GoViewer
          label="tiger-attack"
          sgf="/articles/mammoths-jump/tiger_3.sgf"
          startAt="end"
        >
          <GoViewerBoard
            region={{
              minRow: 9,
              maxRow: 18,
              minCol: 9,
              maxCol: 18,
            }}
          />
          <GoViewerLegend>
            Black invites both A and B, in order to attack
            it from both sides.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          As usual in the post-AI era, refuting non-standard
          strategies is as simple as playing standard,
          reasonable moves. The A shoulder hit in Dia.{" "}
          <DiagramRef label="tiger-attack" /> is a simple
          first idea, all White needs to avoid is falling
          for the shortage of liberties trap after 11:
        </ArticleParagraph>
        <GoViewer
          label="tiger-shoulder-hit-1"
          sgf="/articles/mammoths-jump/tiger_4.sgf"
          startAt="end"
        >
          <GoViewerBoard
            showMoveNumbers
            region={{
              minRow: 9,
              maxRow: 18,
              minCol: 7,
              maxCol: 18,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            The first way to deal with the Tiger Shimari,
            according to AI.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Unexpectedly, a floating group while Black secures
          the corner is enough for AI.
        </ArticleParagraph>
        <ArticleParagraph>
          Starting from the other shoulder hit, this is what
          AI suggests:
        </ArticleParagraph>
        <GoViewer
          label="tiger-shoulder-hit-2"
          sgf="/articles/mammoths-jump/tiger_5.sgf"
          startAt="end"
        >
          <GoViewerBoard
            showMoveNumbers
            region={{
              minRow: 9,
              maxRow: 18,
              minCol: 7,
              maxCol: 18,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            The second shoulder hit way of dealing with the
            Tiger Shimari, according to AI.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Locally, White could continue with A. And, if
          Black chooses B instead of 8, this is the final
          result:
        </ArticleParagraph>
        <GoViewer
          label="tiger-result"
          sgf="/articles/mammoths-jump/tiger_6.sgf"
          startAt="end"
        >
          <GoViewerBoard
            showMoveNumbers
            region={{
              minRow: 9,
              maxRow: 18,
              minCol: 7,
              maxCol: 18,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            A fierce battle ending in a peaceful exchange.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          At least to me, Dia.{" "}
          <DiagramRef label="tiger-result" />
          &nbsp;is most surprising, since giving Black such
          nice influence on the right with a healthy corner
          as well, while only getting a stable group on the
          left doesn&apos;t seem like a good trade. However,
          we have to add that the typically post-AI invasion
          pattern from A has its power severely diminished
          by the ataris of B and C.
        </ArticleParagraph>
        <ArticleParagraph>
          Lastly, one of the sequences with the most
          human-understandable techniques is in Dia.{" "}
          <DiagramRef label="tiger-cool" />:
        </ArticleParagraph>
        <GoViewer
          label="tiger-cool"
          sgf="/articles/mammoths-jump/tiger_7.sgf"
          startAt="end"
        >
          <GoViewerBoard
            showMoveNumbers
            showCapturedStones
            region={{
              minRow: 9,
              maxRow: 18,
              minCol: 7,
              maxCol: 18,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            White uses a forcing moves against Black&apos;s
            corner in order to obtain a cleaner outside
            shape.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          With 4, Black aims at forcing White into an empty
          triangle on 6. 15 is a skillful technique
          typically used in the endgame, but, in this case,
          it guarantees a connection underneath with the
          atari at A, in case Black 12 ever tries to escape.
        </ArticleParagraph>
        <ArticleParagraph>
          Wrapping this article up, according to AI, playing
          the Tiger Shimari and its sequences falls within a
          1- to 2-point loss, which is largely irrelevant
          when compared to any battle in the middle-game. No
          human can claim to have lost a game to any other
          non-AI entity by taking only a max 2-point loss at
          the beginning.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
