import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostYouTubeIframe,
} from "@components/posts/post"
import { PostMath } from "@components/posts/postMath"
import { GoDiagram } from "../goDiagram"

export function TewariDelight2({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          <PostLink href="https://senseis.xmp.net/?Tewari">
            Tewari
          </PostLink>{" "}
          (手割り) has been one of my favorite concepts in
          Go for a long time, not only for its inherent
          beauty but also for its usefulness in helping us
          avoid mistakes and inefficient moves.
        </PostParagraph>
        <PostParagraph>
          As a teaching aid, about a year and a half ago, I
          found myself wanting an example of how not to do
          it though. After a bit of searching through the
          web, I got to the{" "}
          <PostLink href="https://senseis.xmp.net/?HowToLieWithTewari">
            How to lie with tewari
          </PostLink>{" "}
          page on Sensei&apos;s Library.
        </PostParagraph>
        <PostParagraph>
          In it, a discussion about the following shape
          popped up:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/1.svg"
          width={250}
          height={250}
          diaNumber={1}
        >
          <p>
            An adaptation of the board position on the
            &quot;How to lie with tewari&quot; page, causing
            a heated discussion on Sensei&apos;s Library.
          </p>
        </GoDiagram>
        <PostParagraph>
          The original diagram had move 2 at B, the stone at
          2 would already be in place. One of the first
          arguments in the discussion was that, if 2 were
          already there, then Black should play at A. Which
          is actually not true, it&apos;s still better to
          play at B, having a clean broken keima is better
          in that case.
        </PostParagraph>
        <PostParagraph>
          Anyway, it&apos;s much more common for us to see
          that shape as the peep on the tiger&apos;s move
          with the solid connection at 2.
        </PostParagraph>
        <PostParagraph>
          If that sequence were to happen as in Dia. 1, what
          would you think? Optimal for both sides? Better
          for Black? Better for White?
        </PostParagraph>
        <PostParagraph>
          One point of view would be White ending up with
          with a broken keima shape, evidenced by the square
          stones cutting through the triangle keima:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/2.svg"
          width={250}
          height={250}
          diaNumber={2}
        >
          <p>White ends up with a broken keima.</p>
        </GoDiagram>
        <PostParagraph>
          However, it&apos;s also true that Black ends up
          with an empty triangle:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/3.svg"
          width={250}
          height={250}
          diaNumber={3}
        >
          <p>Black ends up with an empty triangle.</p>
        </GoDiagram>
        <PostParagraph>
          In this case, two things are true at the same
          time. The local board position is still slightly
          better for Black &mdash; after all, White has two
          very damaged stones &mdash; but it could have been
          worse for White. Overall, by playing suboptimally
          here, Black incurred a near-point loss.
        </PostParagraph>
        <PostParagraph>
          Shifting this pattern to the 4-4 will make things
          clearer for now:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/4.svg"
          width={350}
          height={350}
          diaNumber={4}
        >
          <p>
            The same problem, but transposed to a modern,
            post-AI joseki.
          </p>
        </GoDiagram>
        <PostParagraph>
          If we apply tewari to the similar position in Dia.
          4, we can easily see that move number 6 should
          have been B instead. White 5 is clear nonsense;
          the post-AI, modern joseki is for White to play at
          A instead.
        </PostParagraph>
        <PostParagraph>
          Similarly, if Black were to connect from the
          direct peep, White would try to revert back to
          Dia. 4:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/5.svg"
          width={350}
          height={350}
          diaNumber={5}
        >
          <p>
            White tries to get back to the subpar version of
            the joseki.
          </p>
        </GoDiagram>
        <PostParagraph>
          Through that joseki analysis, it&apos;s more
          obvious that the end result isn&apos;t ideal for
          Black. But how should Black better play then?
        </PostParagraph>
        <PostParagraph>
          Unexpectedly, globally, even if Black plays the
          correct punishment, AI&apos;s evaluation is B+1.5
          only. Black connecting at 2 gets us back to an
          even game, at B+0.5. Apparently, a broken keima
          evens out with the empty triangle in this context.
        </PostParagraph>
        <PostParagraph>
          Black should then strive for a more efficient
          shape. Instead of connecting at 4, maybe we could
          try capturing the A stone directly:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/6.svg"
          width={350}
          height={350}
          diaNumber={6}
        >
          <p>Black tries to justify connecting at 4.</p>
        </GoDiagram>
        <PostParagraph>
          White shouldn&apos;t give Black a clean ponnuki
          here, but it is nonetheless a surprising move to
          descend at 3 here, cnosidering that we will end up
          with the broken keima shape from 1 to A. From
          Black&apos;s perspective, it is finally
          satisfactory to connect at 4, since White invested
          another stone at 3.
        </PostParagraph>
        <PostParagraph>
          Locally, White would follow things up with C,
          going back to the familiar modern joseki once
          again. White 3 might seem like a near total waste,
          but the aji around the 3-3 at B, or D, has
          increased a lot.
        </PostParagraph>
        <PostParagraph>
          What happens if we move this pattern to the center
          of the board?
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/7.svg"
          width={250}
          height={250}
          diaNumber={7}
        >
          <p>
            The same pattern, but now in the center of the
            board. Black should now atari at 2 instead of 3.
          </p>
        </GoDiagram>
        <PostParagraph>
          The same rationale still applies. However, AI now
          recommends ataring from 2 instead of 3. Both Black
          and White should prioritize the corners though, if
          they are empty.
        </PostParagraph>
        <PostParagraph>
          Last year, I converted this analysis into a video
          on my English YouTube channel, in a partnership
          with{" "}
          <PostLink href="https://www.youtube.com/@GoMagic">
            Go Magic
          </PostLink>
          :
        </PostParagraph>
        <PostYouTubeIframe
          src="https://www.youtube.com/embed/m0iO3OkbQik"
          title="One Year in Asia | A Summary"
        />
        <PostParagraph>
          Towards the end of the video, unfortunately, I
          accidentally mixed some things up, and said that,
          in the case of a broken keima in the center, if
          the corners are open, both players should go for
          them, instead of completing or preventing the
          broken shape.
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/8.svg"
          width={250}
          height={250}
          diaNumber={8}
        >
          <p>Should we play at A or go for open corners?</p>
        </GoDiagram>
        <PostParagraph>
          Black should absolutely complete the broken keima
          at A. It is a bit surprising that not doing so is
          only a 2-point loss, however. What I meant to say
          in the video was that Black shouldn&apos;t play at
          A and go for corners if we had a stone at B
          already.
        </PostParagraph>
        <PostParagraph>
          Comparatively, a broken jump is much worse than a
          broken keima. But by how much?
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/8.svg"
          width={250}
          height={250}
          diaNumber={9}
        >
          <p>What&apos;s the cost of not playing at A?</p>
        </GoDiagram>
        <PostParagraph>
          If Black plays for a corner now, instead of a
          2-point loss, we get into a near 6-point deficit.
        </PostParagraph>
        <PostParagraph>So there you go:</PostParagraph>
        <PostMath display>{equations}</PostMath>
        <PostParagraph>
          That&apos;s simple math for you. Relatively true.
          Absolute nonsense.
        </PostParagraph>
      </PostSection>
    </Post>
  )
}

const equations = String.raw`
\begin{align}
  &Broken\ Keima = Empty\ Triangle \\
  &Broken\ Jump = Broken\ Keima - 4
\end{align}
`
