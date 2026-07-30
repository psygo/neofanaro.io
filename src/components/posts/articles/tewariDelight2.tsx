import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
} from "@components/posts/post"
import { GoDiagram } from "../goDiagram"

export function TewariDelight2({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          <PostLink href="https://senseis.xmp.net/?Tewari">
            Tewari
          </PostLink>{" "}
          has been one of my favorite for a long time, and,
          as a teaching aid, about a year and a half ago, I
          found myself wanting an example of how not to do
          it. After a bit of searching through the web, I
          got to the{" "}
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
          width={200}
          height={200}
          diaNumber={1}
        >
          <p>
            An adaptation of the board position on the
            &quot;How to lie with tewari&quot; page causing
            a heated discussion on Sensei&apos;s Library.
          </p>
        </GoDiagram>
        <PostParagraph>
          The actual diagram had move 2 being at B, which is
          very weird as a sequence. I doubt anyone besides
          beginners would answer 1 at B instead of A, if 2
          were already in place. It&apos;s much more common
          for us to see such a shape as the peep on the
          tiger&apos;s move with the solid connection at 2.
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
          width={200}
          height={200}
          diaNumber={2}
        >
          <p>White ends up with broken keima.</p>
        </GoDiagram>
        <PostParagraph>
          However, it&apos;s also true that Black ends up
          with an empty triangle:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/3.svg"
          width={200}
          height={200}
          diaNumber={3}
        >
          <p>Black ends up with an empty triangle.</p>
        </GoDiagram>
        <PostParagraph>
          In this case, two things are true at the same
          time. The local board position is still slightly
          better for Black &mdash; after all, White has two
          very damaged stones &mdash; but it could have been
          worse for White.
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
          have been B instead. White 5 is clear nonsense,
          the post-AI, modern joseki is for White to play at
          A instead.
        </PostParagraph>
        <PostParagraph>
          If Black were to connect from the direct peep,
          White would try to revert back to Dia. 4 in fact:
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
          Black should strive for a more efficient shape.
          Instead of connecting at 4, maybe we could try
          capturing the A stone directly:
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/6.svg"
          width={350}
          height={350}
          diaNumber={6}
        >
          <p>
            White tries to get back to the subpar version of
            the joseki.
          </p>
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
          but the aji around the 3-3 at B, or D have
          increased a lot.
        </PostParagraph>
        <PostParagraph>
          What happens if we move this pattern to the center
          of the board?
        </PostParagraph>
        <GoDiagram
          src="/articles/tewari_delight_2/7.svg"
          width={200}
          height={200}
          diaNumber={7}
        >
          <p>
            The same pattern, but now in the center of the
            board. Black should now atari at 2 instead of 3.
          </p>
        </GoDiagram>
        <PostParagraph>
          The same rationale still applies. However, AI now
          recommends ataring from 2 instead of 3.
        </PostParagraph>
      </PostSection>
    </Post>
  )
}
