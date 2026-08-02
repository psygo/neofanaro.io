import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleBlockQuote,
  ArticleSectionTitle,
  ArticleImageWithLegend,
  NoWrap,
} from "@components/articles/article"
import { GoDiagram } from "../goDiagram"

export function DowonPairGo({
  article: post,
}: ArticleProps) {
  return (
    <Article article={post}>
      <ArticleSection>
        <ArticleParagraph>
          During my stay at{" "}
          <ArticleLink href="https://www.bibabaduk.online/">
            BIBA
          </ArticleLink>
          , our studies and activities were almost always at
          Flower Baduk, a Go center located at the heart of
          Seoul, in Chungmuro <NoWrap>충무로</NoWrap>.
        </ArticleParagraph>
        <ArticleParagraph>
          <ArticleLink href="https://www.cyberoro.com/news/N_news_view.oro?num=531154">
            Founded in 2014 by four Korean female
            professional players
          </ArticleLink>
          , its objective was &mdash; and still is &mdash;
          to provide in-person lessons with pro players to
          adult amateurs. Nowadays, the sole owner is{" "}
          <ArticleLink href="https://senseis.xmp.net/?MoonDowon">
            Moon Dowon <NoWrap>문도원</NoWrap> 3p
          </ArticleLink>
          , one of the four founders, one of the main
          casters on Baduk TV, and a former holder of the
          most-wins-in-a-row record on the Women&apos;s
          Nongshim Cup, 7 in total. Around 2018, Moon Dowon
          retired from playing in order to focus on teaching
          and casting.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/dowon-pairgo/moon_dowon.webp"
          height={100}
          width={225}
          className="rounded-xl"
        >
          <ArticleParagraph>
            Moon Dowon <NoWrap>문도원</NoWrap> 3p
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/dowon-pairgo/flower_baduk_founders.jpg"
          height={100}
          width={325}
          className="rounded-xl"
        >
          <ArticleParagraph>
            Flower Baduk&apos;s founders, from left to
            right: Lee Dahye <NoWrap>이다혜</NoWrap> 4p, Kim
            Hyerim <NoWrap>김혜림</NoWrap> 2p, Bae Yunjin{" "}
            <NoWrap>배윤진</NoWrap> 3p and Moon Dowon{" "}
            <NoWrap>문도원</NoWrap> 3p.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/dowon-pairgo/Flower_Baduk_2.jpg"
          height={100}
          width={325}
          className="rounded-xl"
        >
          <ArticleParagraph>
            A panel of Flower Baduk&apos;s founders, from
            left to right: Lee Dahye <NoWrap>이다혜</NoWrap>{" "}
            4p, Bae Yunjin
            <NoWrap>배윤진</NoWrap> 3p, Moon Dowon{" "}
            <NoWrap>문도원</NoWrap> 3p and Kim Hyerim{" "}
            <NoWrap>김혜림</NoWrap> 2p.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          The ambiance is always pleasant at Flower Baduk,
          and that&apos;s certainly one of its main upsides
          for its students, as most people find it much
          easier to learn in a more positive environment.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/dowon-pairgo/Flower_Baduk_4.jpg"
          height={100}
          width={325}
          className="rounded-xl"
        >
          <ArticleParagraph>Flower Baduk</ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleBlockQuote>
          <ArticleParagraph>
            I studied with BIBA at Flower Baduk for 6 months
            in 2025. Overall, I studied in Asia for a year,
            between 2025 and 2026. If you would like to know
            more, do check my{" "}
            <ArticleLink
              internal
              href="https://neofanaroio.vercel.app/articles/one-year-in-asia"
            >
              video summary
            </ArticleLink>{" "}
            for that period.
          </ArticleParagraph>
        </ArticleBlockQuote>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          A Pair Go Challenge
        </ArticleSectionTitle>
        <ArticleParagraph>
          One day, after realizing I was by myself, without
          any other BIBA student, nor Diana Koszegi 2p
          &mdash; my main teacher &mdash;, Moon Dowon 3p
          invited me to play pair Go with three of her
          students. During a more or less common side
          pattern, my partner played the mistaken,
          unexpected cut at 8:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/dowon-pairgo/dowon_pairgo_1.svg"
          diaNumber={1}
        >
          <ArticleParagraph>
            A mistaken, unexpected cut (8) from my pair Go
            partner. White should have crawled with 8 at 9.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Where should Black play next?
        </ArticleParagraph>
        <ArticleParagraph>
          My first, immediate answer was simply turning at
          A, capturing White&apos;s stones on the side.
        </ArticleParagraph>
        <ArticleParagraph>
          However, right when I thought this was all
          obvious, during the review with Moon Dowon 3p, she
          and the other three students started discussing
          for a while in Korean, without placing any
          sequences on the board. Since my Korean at the
          time was infinitesimal, I mentally checked out.
          But, later, after checking the game out with AI, I
          began to suspect why they stopped to discuss at
          such a seemingly obvious move.
        </ArticleParagraph>
        <ArticleParagraph>
          If Black tries to capture White&apos;s group,
          White gets a ton of squeezing power from the
          outside:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/dowon-pairgo/dowon_pairgo_3.svg"
          diaNumber={2}
        >
          <ArticleParagraph>
            Black&apos;s groups surrounding White&apos;s
            captured stones are bound to get squeezed.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Black has three directions from which to squeezed,
          from A to C, there&apos;s no way to protect them
          all. According to AI, capturing White on the side
          is a 3-point loss.
        </ArticleParagraph>
        <ArticleParagraph>
          This is AI&apos;s recommended sequence, after
          Black captures White&apos;s group on the side:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/dowon-pairgo/dowon_pairgo_2.svg"
          diaNumber={3}
        >
          <ArticleParagraph>
            Black&apos;s groups surrounding White&apos;s
            captured stones are bound to get squeezed.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Black gets sente to play 19; but White gets thick
          on the left and bottom-right, the aji in the
          bottom-right is drastically reduced, Black&apos;s
          bottom-left corner is greatly reduced, and
          Black&apos;s bottom is essentially the captured
          group in the end.
        </ArticleParagraph>
        <ArticleParagraph>
          Going back, Black&apos;s best choice was to
          instead play what my opponent pair opted for, to
          capture the cutting stone:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/dowon-pairgo/dowon_pairgo_4.svg"
          diaNumber={4}
        >
          <ArticleParagraph>
            Black&apos;s thickness and outside trump
            capturing a sizeable chunk on the side.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Black 1 damages the A stone while thickening out
          Black&apos;s corner and outside, which grants
          Black sente to play the urgent move at 5.
        </ArticleParagraph>
        <ArticleParagraph>
          Later that day, I showed these surprising AI
          sequences to Moon Dowon 3p, thinking she would be
          just as amazed. I was then dumbfounded by the
          bored look on her face when she told me the
          squeeze and the outside forcing moves were what
          she was suggesting to her students when I zoned
          out due to my lacking Korean abilities.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
