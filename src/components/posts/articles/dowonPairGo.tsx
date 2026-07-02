import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostImageWithLegend,
  PostBlockQuote,
} from "@components/posts/post"
import { GoDiagram } from "../goDiagram"

export function DowonPairGo({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          During my stay at BIBA, our studies and activities
          were almost always at Flower Baduk, a Go center
          located at the heart of Seoul, in Chungmuro
          충무로.
        </PostParagraph>
        <PostParagraph>
          Founded in 2014 by four Korean female professional
          players, its objective was &mdash; and still is
          &mdash; to provide adult amateurs with lessons
          from pro players. Nowadays, the sole owner is{" "}
          <PostLink href="https://senseis.xmp.net/?MoonDowon">
            Moon Dowon 문도원 3p
          </PostLink>
          , one of the four founders, one of the main
          casters on Baduk TV, and a former holder of the
          most-wins-in-a-row record on the Women&apos;s
          Nongshim Cup (7).
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/dowon-pairgo/moon_dowon.webp"
          legend="Moon Dowon 문도원 3p"
          className="mx-7 mb-0 h-full w-50 rounded-xl"
        />
        <PostParagraph>
          The ambiance is always pleasant at Flower Baduk,
          and that&apos;s certainly one of its main upsides
          for its students, as most people find it much
          easier to learn in a more positive environment.
        </PostParagraph>
        <PostBlockQuote>
          I studied with BIBA at Flower Baduk for 6 months
          in 2025. Overall, I studied in Asia for a year,
          between 2025 and 2026. If you would like to know
          more, do check my{" "}
          <PostLink
            internal
            href="https://neofanaroio.vercel.app/posts/one-year-in-asia?lang=en"
          >
            video summary
          </PostLink>{" "}
          for that period.
        </PostBlockQuote>
        <PostParagraph>
          One day, realizing I was by myself, without any
          other BIBA student nor Diana Koszegi 2p, my main
          teacher, Moon Dowon 3p invited me to play a pair
          Go game with three of her students. During a more
          or less common side pattern, my partner played the
          unexpected cut at 8:
        </PostParagraph>
        <GoDiagram
          src="/articles/dowon-pairgo/dowon_pairgo_1.svg"
          size={100}
          diaNumber={1}
          legend="An unexpected cut (8) from my pair Go partner. White should have crawled with 8 at 9."
        />
      </PostSection>
      <PostParagraph>
        Where should Black play next?
      </PostParagraph>
      <PostParagraph>
        My first, immediate answer was simply turning at A,
        capturing White&apos;s stones on the side.
      </PostParagraph>
      <PostParagraph>
        However, right when I thought this was all obvious,
        during the review with Moon Dowon 3p, she and the
        other three students started discussing for a while
        in Korean. Since my Korean at the time was
        infinitesimal, I mentally checked out. But, later,
        after checking the game out with AI, I understood
        why they stopped to discuss at a seemingly obvious
        move.
      </PostParagraph>
      <PostParagraph>
        If Black tries to capture White&apos;s group, White
        gets a ton of squeezing power from the outside:
      </PostParagraph>
      <GoDiagram
        src="/articles/dowon-pairgo/dowon_pairgo_3.svg"
        size={100}
        diaNumber={2}
        legend="Black's groups surrounding White's captured stones are bound to get squeezed."
      />
      <PostParagraph>
        Black has three directions from which to squeezed,
        from A to C, there&apos;s no way to protect them
        all. According to AI, capturing White on the side is
        a 3-point loss.
      </PostParagraph>
      <PostParagraph>
        This is AI&apos;s recommended sequence, after Black
        captures White&apos;s group on the side:
      </PostParagraph>
      <GoDiagram
        src="/articles/dowon-pairgo/dowon_pairgo_2.svg"
        size={100}
        diaNumber={3}
        legend="Black's groups surrounding White's captured stones are bound to get squeezed."
      />
      <PostParagraph>
        Black gets sente to play 19; but White gets thick on
        the left and bottom-right, Black&apos;s bottom-left
        corner is greatly reduced, and Black&apos;s bottom
        is essentially the captured group in the end.
      </PostParagraph>
      <PostParagraph>
        Black&apos;s best choice at the beginning was to
        play what my opponent pair opted for, to capture the
        cutting stone:
      </PostParagraph>
      <GoDiagram
        src="/articles/dowon-pairgo/dowon_pairgo_4.svg"
        size={100}
        diaNumber={4}
        legend="Black's groups surrounding White's captured stones are bound to get squeezed."
      />
      <PostParagraph>
        Black 1 damages the A stone while thickening out
        Black&apos;s corner and outside, which grants Black
        sente to play the urgent move at 5.
      </PostParagraph>
      <PostParagraph>
        Later that day, I showed these surprising AI
        sequences to Moon Dowon 3p, thinking she would be
        just as amazed. I was then stunned by the bored look
        on her face when she told me the squeeze and the
        outside forcing moves were what she was suggesting
        to her students when I zoned out due to my lacking
        Korean.
      </PostParagraph>
    </Post>
  )
}
