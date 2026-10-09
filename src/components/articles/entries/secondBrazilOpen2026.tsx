import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ImageLegend,
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
} from "../../goViewer/exports"

export function SecondBrazilOpen2026({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleImageWithLegend
          src="/articles/second-brazil-open-2026/trophy.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            The 2nd place trophy of the 2026 Brazil Open,
            alongside some souvenirs I got from my stay in
            South Korea. Congrats to Alexandre Amaro on his
            win!
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          The 2026 of the Brazil Open happened as a congress
          at the beginning of September, and somehow I
          managed to place second on it, missing first place
          by just a bit.
        </ArticleParagraph>
        <ArticleParagraph>
          During the regular tournament, I managed to win
          against Alexandre Amaro 7-8d Fox, but
          unfortunately lost to 94-year-old Uyama Hissao
          right after. That led me and Alexandre to the
          highly improbable tie on SOS and SOSOS!
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/second-brazil-open-2026/players_against.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            The players I matched up against. (I was
            probably registered as a 5d because I
            hadn&apos;t played in a tournament in Brazil in
            a long while.)
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Since the tournament had no direct confrontation
          tiebreaker rule, we had to play a blitz game of 10
          min + 3x10s byo-yomi to decide it all. The clock
          we were using did have sound but it didn&apos;t
          pronounce the pronounce the countdown, so tracking
          the 10s was really difficult. And 10s on the board
          is much less than 10s on a computer, since we have
          to take the stones, place them and then tap the
          clock.{" "}
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/second-brazil-open-2026/final_points.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            The extremely unlikely SOS/SOSOS tie which led
            to the blitz tiebreaker.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Towards the beginning of the endgame, I thought I
          was losing, due to having many stones captured,
          but I was actually winning. Nonetheless, I failed
          on my time management and lost on time. It was a
          bummer, but still surprising given that I rarely
          play quick games, I almost always practice with
          long time settings, and Alexandre usually
          practices with quick games himself.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/second-brazil-open-2026/standings.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            The final standings. You can check them out{" "}
            <ArticleLink href="https://s1.chess-results.com/tnr1491211.aspx?lan=10&art=1&turdet=YES&flag=30&SNode=S0">
              here
            </ArticleLink>
            .
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          My game against Uyama had me in a joseki which was
          very easy for him to play, but extremely difficult
          for me. And all that after getting exhausted from
          difficult games against Alexandre Amaro and
          Hiroaki Okawa. Also, Uyama keeps himself sharp at
          such an advanced age still. According to Alexandre
          Amaro, on their past 4 games, Uyama managed to
          average 7.5d Fox, an estimate given by the AI
          platform{" "}
          <ArticleLink href="https://zhangqi.com.cn/">
            Zhangqi
          </ArticleLink>
          . As a comparison, my first game against Alexandre
          had us around 7.5d Fox, and our blitz tiebreaker
          hovered around 6.5d.
        </ArticleParagraph>
        <GoViewer
          label="fatal-joseki"
          sgf="/articles/second-brazil-open-2026/joseki_uyama.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={true}
            showMoveNumbers={true}
            region={{
              minRow: 9,
              maxRow: 18,
              minCol: 9,
              maxCol: 18,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            The fatal joseki in my against Uyama Hissao. I
            like pincering with 3, and, after White&apos;s
            keima with 4, if White simply captures in a
            ladder with 8 at 9, I counter atari at 8. White
            would then have an extra stone to the ponnuki
            with 4. I had never seen the extremely simple
            follow-ups to 10 and 12, I couldn&apos;t find
            Black 19 let alone 25, since White seems to
            easily break through.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          At the time of writing, I hop between 6-7d Fox,
          and so managing to beat Alexandre, who has been
          between 7-8d was very unexpected to everybody,
          including me.
        </ArticleParagraph>
        <ArticleParagraph>
          Our first game had me (White) in a tough position
          after the double-hane of 75 on the bottom. But it
          also got him too comfortable, and he started
          playing slack. The profits from attacking his two
          center groups and invading the top-left corner
          settled me in the lead for quite a while,
          according to AI, though we both thought Black was
          winning, somehow I edged it out by 3.5 in the end.
        </ArticleParagraph>
        <GoViewer
          label="fatal-joseki"
          sgf="/articles/second-brazil-open-2026/alexandre_amaro_vs_philippe_fanaro.sgf"
          startAt="end"
        >
          <GoViewerBoard interactive={true} />
          <GoViewerControls />
          <GoViewerLegend>
            The regular tournament game against Alexandre
            Amaro 7-8d Fox (Black). You can check the game
            out{" "}
            <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/wahxPVlmuL6sMgpfRbwj">
              here on AI Sensei
            </ArticleLink>
            . The yose moves might be mixed up a bit, since
            I had to transcribe it from memory &mdash;
            Brasil Nihon Kiin had issues with their streams.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Here&apos;s the blitz tiebreaker &mdash; I played
          as White:
        </ArticleParagraph>
        <GoViewer
          label="fatal-joseki"
          sgf="/articles/second-brazil-open-2026/alexandre_amaro_vs_philippe_fanaro_tiebreaker.sgf"
          startAt="end"
        >
          <GoViewerBoard interactive={true} />
          <GoViewerControls />
          <GoViewerLegend>
            After the ko ended, we played only about 10
            moves before I (White) lost on time. And
            I&apos;m not sure what happened actually. I
            wouldn&apos;t trust any of the moves past 193.
            The game is also available{" "}
            <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/bQHPgq3CFpaveBTYLUNd">
              here on AI Sensei
            </ArticleLink>
            .
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          As I mentioned on my{" "}
          <ArticleLink href="/articles/one-year-in-asia">
            One Year in Asia Studying Go
          </ArticleLink>{" "}
          article, I feel disappointed at myself that my
          overall improvement wasn&apos;t as great as I
          expected or wanted it to be. However, placing so
          high during this year&apos;s Brazil Open is a nice
          silver lining. It is unfortunate I didn&apos;t
          manage to get first place &mdash; to be frank,
          after my first win against Alexandre, everything
          felt as if it were starting to go against me, with
          me being tired, the improbable SOS/SOSOS tie,
          getting unlucky with a joseki, etc. &mdash;, but
          it was a nice experience nonetheless.
        </ArticleParagraph>
        <ArticleBlockQuote>
          This year, I&apos;ve been solving 5-10 tsumegos
          and playing at least one game everyday. Treating
          Go just like gym work helps with staying in good
          shape, and it creates a habit, which is much
          easier to manage in the long run, since we
          don&apos;t have to spend as much mental effort on
          it.
        </ArticleBlockQuote>
      </ArticleSection>
    </Article>
  )
}
