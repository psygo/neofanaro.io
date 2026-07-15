import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostSectionTitle,
  PostImageWithLegend,
  NoWrap,
} from "@components/posts/post"
import { GoDiagram } from "../goDiagram"

export function IngCupSuicide({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          About a year and a half ago, I published my first
          article on my now inactive Go Magic &quot;
          <PostLink href="https://www.instagram.com/p/DGqF7gZKrCh">
            psygo&apos;s Corner
          </PostLink>
          &quot; column. In it, I argued that the suicide
          rule was unnecessary, and that the game would be
          strictly richer if we dropped it.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/ing-cup-suicide/psygo_corner_1.jpeg"
          className="rounded-xl"
        >
          <p>psygo&apos;s Corner&apos;s first article.</p>
        </PostImageWithLegend>
        <PostParagraph>
          My opinion remains the same. Let&apos;s now take a
          look at how it was actually even reinforced.
        </PostParagraph>
        <PostSection>
          <PostSectionTitle>
            The Ing Cup allows for suicide
          </PostSectionTitle>
        </PostSection>
        <PostParagraph>
          A few months after that article went public, Park
          Jeongsu <NoWrap>박정수</NoWrap> 4p, one of{" "}
          <PostLink href="https://www.bibabaduk.online/">
            BIBA
          </PostLink>
          &apos;s &mdash; Blackie&apos;s International Baduk
          Academy, a Go school for foreigners in Korea; have
          a watch of{" "}
          <PostLink internal href="/posts/one-year-in-asia">
            this video
          </PostLink>{" "}
          for more info &mdash; substitute teachers, wanted
          to show us how{" "}
          <PostLink href="https://senseis.xmp.net/?IngRules">
            the Ing Cup&apos;s unique set of rules
          </PostLink>{" "}
          changes the game. That day, he mainly discussed
          this situation:
        </PostParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_1.svg"
          width={200}
          height={200}
          diaNumber={1}
        >
          <p>
            Who wins the capturing race inside? Is it a
            seki?
          </p>
        </GoDiagram>
        <PostParagraph>
          That capturing race is an example of the &quot;big
          eye kills small eye&quot; principle:
        </PostParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_2.svg"
          width={200}
          height={200}
          diaNumber={2}
        >
          <p>Black 2 and 4 are played elsewhere.</p>
        </GoDiagram>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_3.svg"
          width={200}
          height={200}
          diaNumber={3}
        >
          <p>
            Since Black cannot play at A, the triangle
            points are a privilege of the group with the
            bigger eye.
          </p>
        </GoDiagram>
        <PostParagraph>
          However, something very unexpected happens when we
          take away the Suicide Rule, which is one of the
          Ing Cup&apos;s quirks &mdash; the Ing Cup is
          considered to be the Olympics of Go, by the way,
          its most important tournament, happening only
          every four years. What then is the outcome if
          Black is able to play at A in diagram 3?
        </PostParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_4.svg"
          width={200}
          height={200}
          diaNumber={4}
        >
          <p>Black can now race with White more freely.</p>
        </GoDiagram>
        <PostParagraph>
          After the inner liberties are freed, Black is able
          to turn the intersections between both groups into
          normal liberties, preventing them from being
          privileges. So the final result is a seki now.
          Note that we have to be careful about how many
          inner liberties White has and how many common
          liberties both groups have, as this turns into a
          more normal capturing race, without any special
          advantages for White.
        </PostParagraph>
        <PostParagraph>
          In the end, we have that the asbence of a suicide
          rule grants the &quot;big eye vs small eye&quot;
          liberty race type more possibilities. Instead of
          it being a straight win for the bigger eye&apos;d
          group, now we have to examine if a suicide could
          erase the privileges.
        </PostParagraph>
      </PostSection>
    </Post>
  )
}
