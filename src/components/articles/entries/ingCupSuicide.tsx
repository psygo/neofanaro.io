import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleSectionTitle,
  ArticleImageWithLegend,
  NoWrap,
} from "@components/articles/article"
import { GoDiagram } from "../goDiagram"

export function IngCupSuicide({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          About a year and a half ago, I published my first
          article on my now inactive Go Magic &quot;
          <ArticleLink href="https://www.instagram.com/p/DGqF7gZKrCh">
            psygo&apos;s Corner
          </ArticleLink>
          &quot; column. In it, I argued that the suicide
          rule was unnecessary, and that the game would be
          strictly richer if we dropped it.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/ing-cup-suicide/psygo_corner_1.jpeg"
          className="rounded-xl"
        >
          <ArticleParagraph>
            psygo&apos;s Corner&apos;s first article.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          My opinion remains the same. Let&apos;s now take a
          look at how it was actually even reinforced.
        </ArticleParagraph>
        <ArticleSection>
          <ArticleSectionTitle>
            The Ing Cup allows for suicide
          </ArticleSectionTitle>
        </ArticleSection>
        <ArticleParagraph>
          A few months after that article went public, Park
          Jeongsu <NoWrap>박정수</NoWrap> 4p, one of{" "}
          <ArticleLink href="https://www.bibabaduk.online/">
            BIBA
          </ArticleLink>
          &apos;s &mdash; Blackie&apos;s International Baduk
          Academy, a Go school for foreigners in Korea; have
          a watch of{" "}
          <ArticleLink
            internal
            href="/articles/one-year-in-asia"
          >
            this video
          </ArticleLink>{" "}
          for more info &mdash; substitute teachers, wanted
          to show us how{" "}
          <ArticleLink href="https://senseis.xmp.net/?IngRules">
            the Ing Cup&apos;s unique set of rules
          </ArticleLink>{" "}
          changes the game. That day, he mainly discussed
          this situation:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_1.svg"
          width={200}
          height={200}
          diaNumber={1}
        >
          <ArticleParagraph>
            Who wins the capturing race inside? Is it a
            seki?
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          That capturing race is an example of the &quot;big
          eye kills small eye&quot; principle:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_2.svg"
          width={200}
          height={200}
          diaNumber={2}
        >
          <ArticleParagraph>
            Black 2 and 4 are played elsewhere.
          </ArticleParagraph>
        </GoDiagram>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_3.svg"
          width={200}
          height={200}
          diaNumber={3}
        >
          <ArticleParagraph>
            Since Black cannot play at A, the triangle
            points are a privilege of the group with the
            bigger eye.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          However, something very unexpected happens when we
          take away the Suicide Rule, which is one of the
          Ing Cup&apos;s quirks &mdash; the{" "}
          <ArticleLink href="https://senseis.xmp.net/?IngCup">
            Ing Cup
          </ArticleLink>{" "}
          is considered to be the Olympics of Go, by the
          way, its most important tournament, happening only
          every four years. What then is the outcome if
          Black is able to play at A in diagram 3?
        </ArticleParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_4.svg"
          width={200}
          height={200}
          diaNumber={4}
        >
          <ArticleParagraph>
            Black can now race with White more freely.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          After the inner liberties are freed, Black is able
          to turn the intersections between both groups into
          normal liberties, preventing them from being
          privileges. So the final result is a seki now.
          Note that we have to be careful about how many
          inner liberties White has and how many common
          liberties both groups have, as this turns into a
          more normal capturing race, without any special
          advantages for White.
        </ArticleParagraph>
        <ArticleParagraph>
          In the end, we have that the asbence of a suicide
          rule grants the &quot;big eye vs small eye&quot;
          liberty race type more possibilities. Instead of
          it being a straight win for the bigger eye&apos;d
          group, now we have to examine if a suicide could
          erase the privileges.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
