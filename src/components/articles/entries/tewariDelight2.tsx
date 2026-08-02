import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleYouTubeIframe,
  ArticleBlockQuote,
} from "@components/articles/article"
import { ArticleMath } from "@components/articles/articleMath"
import { GoDiagram } from "../goDiagram"

export function TewariDelight2({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          <ArticleLink href="https://senseis.xmp.net/?Tewari">
            Tewari
          </ArticleLink>{" "}
          (手割り) has been one of my favorite concepts in
          Go for a long time, not only for its inherent
          beauty but also for its usefulness in helping us
          avoid mistakes and inefficient moves.
        </ArticleParagraph>
        <ArticleBlockQuote>
          <ArticleParagraph>
            In case you&apos;re wondering, Tewari Delight #1
            doesn&apos;t exist as a post here, it was
            actually a{" "}
            <ArticleLink href="https://youtu.be/c3GU2td0To8">
              video
            </ArticleLink>
            .
          </ArticleParagraph>
        </ArticleBlockQuote>
        <ArticleParagraph>
          As a teaching aid, about a year and a half ago, I
          found myself wanting an example of how not to do
          it though. After a bit of searching through the
          web, I got to the{" "}
          <ArticleLink href="https://senseis.xmp.net/?HowToLieWithTewari">
            How to lie with tewari
          </ArticleLink>{" "}
          page on Sensei&apos;s Library.
        </ArticleParagraph>
        <ArticleParagraph>
          In it, a discussion about the following shape
          popped up:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/1.svg"
          width={250}
          height={250}
          diaNumber={1}
        >
          <ArticleParagraph>
            An adaptation of the board position on the
            &quot;How to lie with tewari&quot; page, causing
            a heated discussion on Sensei&apos;s Library.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          The original diagram had move 2 at B, the stone at
          2 would already be in place. One of the first
          arguments in the discussion was that, if 2 were
          already there, then Black should play at A. Which
          is actually not true, it&apos;s still better to
          play at B, having a clean broken keima is better
          in that case.
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, it&apos;s much more common for us to see
          that shape as the peep on the tiger&apos;s move
          with the solid connection at 2.
        </ArticleParagraph>
        <ArticleParagraph>
          If that sequence were to happen as in Dia. 1, what
          would you think? Optimal for both sides? Better
          for Black? Better for White?
        </ArticleParagraph>
        <ArticleParagraph>
          One point of view would be White ending up with
          with a broken keima shape, evidenced by the square
          stones cutting through the triangle keima:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/2.svg"
          width={250}
          height={250}
          diaNumber={2}
        >
          <ArticleParagraph>
            White ends up with a broken keima.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          However, it&apos;s also true that Black ends up
          with an empty triangle:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/3.svg"
          width={250}
          height={250}
          diaNumber={3}
        >
          <ArticleParagraph>
            Black ends up with an empty triangle.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          In this case, two things are true at the same
          time. The local board position is still slightly
          better for Black &mdash; after all, White has two
          very damaged stones &mdash; but it could have been
          worse for White. Overall, by playing suboptimally
          here, Black incurred a near-point loss.
        </ArticleParagraph>
        <ArticleParagraph>
          Shifting this pattern to the 4-4 will make things
          clearer for now:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/4.svg"
          width={350}
          height={350}
          diaNumber={4}
        >
          <ArticleParagraph>
            The same problem, but transposed to a modern,
            post-AI joseki.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          If we apply tewari to the similar position in Dia.
          4, we can easily see that move number 6 should
          have been B instead. White 5 is clear nonsense;
          the post-AI, modern joseki is for White to play at
          A instead.
        </ArticleParagraph>
        <ArticleParagraph>
          Similarly, if Black were to connect from the
          direct peep, White would try to revert back to
          Dia. 4:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/5.svg"
          width={350}
          height={350}
          diaNumber={5}
        >
          <ArticleParagraph>
            White tries to get back to the subpar version of
            the joseki.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Through that joseki analysis, it&apos;s more
          obvious that the end result isn&apos;t ideal for
          Black. But how should Black better play then?
        </ArticleParagraph>
        <ArticleParagraph>
          Unexpectedly, globally, even if Black plays the
          correct punishment, AI&apos;s evaluation is B+1.5
          only. Black connecting at 2 gets us back to an
          even game, at B+0.5. Apparently, a broken keima
          evens out with the empty triangle in this context.
        </ArticleParagraph>
        <ArticleParagraph>
          Black should then strive for a more efficient
          shape. Instead of connecting at 4, maybe we could
          try capturing the A stone directly:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/6.svg"
          width={350}
          height={350}
          diaNumber={6}
        >
          <ArticleParagraph>
            Black tries to justify connecting at 4.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          White shouldn&apos;t give Black a clean ponnuki
          here, but it is nonetheless a surprising move to
          descend at 3 here, cnosidering that we will end up
          with the broken keima shape from 1 to A. From
          Black&apos;s perspective, it is finally
          satisfactory to connect at 4, since White invested
          another stone at 3.
        </ArticleParagraph>
        <ArticleParagraph>
          Locally, White would follow things up with C,
          going back to the familiar modern joseki once
          again. White 3 might seem like a near total waste,
          but the aji around the 3-3 at B, or D, has
          increased a lot.
        </ArticleParagraph>
        <ArticleParagraph>
          What happens if we move this pattern to the center
          of the board?
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/7.svg"
          width={250}
          height={250}
          diaNumber={7}
        >
          <ArticleParagraph>
            The same pattern, but now in the center of the
            board. Black should now atari at 2 instead of 3.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          The same rationale still applies. However, AI now
          recommends ataring from 2 instead of 3. Both Black
          and White should prioritize the corners though, if
          they are empty.
        </ArticleParagraph>
        <ArticleParagraph>
          Last year, I converted this analysis into a video
          on my English YouTube channel, in a partnership
          with{" "}
          <ArticleLink href="https://www.youtube.com/@GoMagic">
            Go Magic
          </ArticleLink>
          :
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/m0iO3OkbQik"
          title="One Year in Asia | A Summary"
        />
        <ArticleParagraph>
          Towards the end of the video, unfortunately, I
          accidentally mixed some things up, and said that,
          in the case of a broken keima in the center, if
          the corners are open, both players should go for
          them, instead of completing or preventing the
          broken shape.
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/8.svg"
          width={250}
          height={250}
          diaNumber={8}
        >
          <ArticleParagraph>
            Should we play at A or go for open corners?
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Black should absolutely complete the broken keima
          at A. It is a bit surprising that not doing so is
          only a 2-point loss, however. What I meant to say
          in the video was that Black shouldn&apos;t play at
          A and go for corners if we had a stone at B
          already.
        </ArticleParagraph>
        <ArticleParagraph>
          Comparatively, a broken jump is much worse than a
          broken keima. But by how much?
        </ArticleParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/8.svg"
          width={250}
          height={250}
          diaNumber={9}
        >
          <ArticleParagraph>
            What&apos;s the cost of not playing at A?
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          If Black plays for a corner now, instead of a
          2-point loss, we get into a near 6-point deficit.
        </ArticleParagraph>
        <ArticleParagraph>
          So there you go:
        </ArticleParagraph>
        <ArticleMath display>
          {String.raw`
            \begin{array}{l@{\;}l}
              Broken\ Keima &= Empty\ Triangle \\
              Broken\ Jump &= Broken\ Keima - 4
              \\
              \therefore
              \\
              Broken\ Jump &= Empty\ Triangle - 4
            \end{array}
          `}
        </ArticleMath>
        <ArticleParagraph>
          That&apos;s simple math for you. Relatively true.
          Absolute nonsense.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
