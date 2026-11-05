import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
  ArticleImageWithLegend,
  ArticleLink,
  ArticleOrderedList,
  ArticleParagraph,
  ArticleSection,
  ArticleSectionTitle,
  ArticleSubSection,
  ArticleSubSectionTitle,
  ArticleTableOfContents,
  ArticleTimestamp,
  ArticleYouTubeIframe,
  DiagramRef,
  ImageLegend,
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
  GoViewerPlayers,
} from "../../goViewer/exports"

export function TopBlunders({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleSectionTitle>
          Go Game Series&apos; Blunders Compilation
        </ArticleSectionTitle>
        <ArticleParagraph>
          This article is just an extension on another{" "}
          <ArticleLink href="https://youtu.be/LkzDawFyAGA">
            outstanding video from Go Game Series
          </ArticleLink>
          :
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/LkzDawFyAGA"
          title="Top 5 Biggest Blunders In Go!"
        />
        <ArticleParagraph>
          Neither I nor Go Game Series (GGS) would like to
          shame anyone. Cataloging those out is just a way
          for us to treat ourselves less harshly whenever we
          are the ones on the sad end of the story.{" "}
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/top-blunders/blunder_tennis.jpeg"
          height={100}
          width={500}
        >
          <ImageLegend>
            If you feel like blunders are killing your joy,
            remember that pros from all sports need to learn
            how to forgive themselves. That post is from my{" "}
            <ArticleLink href="https://www.instagram.com/p/DMIZ1bQIozy/?img_index=2">
              now-inactive column on Go Magic,
              &quot;psygo&apos;s Corner&quot;.
            </ArticleLink>
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          If there&apos;s anything to say about these pro
          examples more directly, I would definitely
          emphasize that admire those pro&apos;s willpower
          to move on and persist.
        </ArticleParagraph>
        <ArticleParagraph>
          In GGS&apos;s video, these are the blunders he
          goes over:
        </ArticleParagraph>
        <ArticleOrderedList>
          <li>
            <ArticleTimestamp>00:00</ArticleTimestamp>{" "}
            <em>Heo&apos;s Blindspot Capture</em>, Heo
            Seohyun 1p vs Yu Changhyuk 9p, in 2020.
          </li>
          <li>
            <ArticleTimestamp>00:32</ArticleTimestamp>{" "}
            <em>Byun Sangil&apos;s Self-Slaps</em>, Byun
            Sangil 9p vs Choi Jeong 9p, for the Samsung Cup
            2022.
          </li>
          <li>
            <ArticleTimestamp>00:48</ArticleTimestamp>{" "}
            &quot;The Shortest Professional Game&quot;,
            between Ono Nobuyuki 6p and Kudo Norio 9p in
            1996.
          </li>
          <li>
            <ArticleTimestamp>07:45</ArticleTimestamp>{" "}
            &quot;Bro filled the wrong hole&quot;, a game
            between Ahn Kukhyun 9p and Kim Myeonghun 9p in
            2024.
          </li>
          <li>
            <ArticleTimestamp>09:26</ArticleTimestamp>{" "}
            &quot;Ke Jie&apos;s Famous Slap&quot;, a game
            between Ke Jie 9p and Park Junghwan 9p, 2019.
          </li>
          <li>
            <ArticleTimestamp>13:08</ArticleTimestamp>{" "}
            &quot;Lee Sedol&apos;s Revenge Failed&quot;, a
            game between Lee Sedol 9p and Ke Jie 9p, in
            2016.
          </li>
          <li>
            <ArticleTimestamp>22:48</ArticleTimestamp>{" "}
            &quot;Most Traumatizing Event&quot;, Park Jieun
            9p vs Kim Chaeyoung 1p, in the 2014 Female
            Kuksu.
          </li>
        </ArticleOrderedList>
        <ArticleParagraph>
          A list of highly unfortunate events indeed, to say
          the least. However, some of the most spectacular
          weren&apos;t included in that video.
        </ArticleParagraph>
        <ArticleSection>
          <ArticleSectionTitle>
            More Blunders
          </ArticleSectionTitle>
          <ArticleSubSection>
            <ArticleSubSectionTitle>
              Nakano Yasuhiro&apos;s Self-Atari
            </ArticleSubSectionTitle>
            <ArticleParagraph>
              One of them is in{" "}
              <ArticleLink href="https://youtu.be/r1vIvOD5iGQ?t=51">
                ALOUTOULOU&apos;s very funny meme
                compilation, &quot;Everyone is HERE (Game of
                Go Edition)&quot;
              </ArticleLink>
              :
            </ArticleParagraph>
            <ArticleYouTubeIframe
              src="https://www.youtube.com/embed/r1vIvOD5iGQ"
              title="Top 5 Biggest Blunders In Go!"
            />
            <ArticleParagraph>
              That blunder comes from a game between Ishida
              Yoshio 9p and Nakano Yasuhiro 9p for the 2006,
              53rd NHK Cup. Later, in an interview, Nakano
              said he was afraid at the time that he would
              be stripped of his professional title.
            </ArticleParagraph>
          </ArticleSubSection>
          <ArticleSubSection>
            <ArticleSubSectionTitle>
              Fujisawa Shuko&apos;s Connection
            </ArticleSubSectionTitle>
            <ArticleParagraph>
              On Sensei&apos;s Library, the{" "}
              <ArticleLink href="https://senseis.xmp.net/?Blunder">
                Blunder
              </ArticleLink>{" "}
              page offers yet another example:
            </ArticleParagraph>
            <GoViewer sgf="/articles/top-blunders/cho_chikun_vs_fujisawa_shuko.sgf">
              <GoViewerBoard
                startAt="end"
                interactive={true}
                showMoveNumbers
                showCapturedStones
              />
              <GoViewerPlayers
                playerBlack="Fujisawa Shuko 9p"
                playerWhite="Cho Chikun 9p"
              />
              <GoViewerControls />
              <GoViewerLegend>
                Fujisawa&apos;s connection blunder.
              </GoViewerLegend>
            </GoViewer>
            <ArticleParagraph>
              Instead, Fujisawa could have captured
              White&apos;s stone, which would lead to a
              half-point game:
            </ArticleParagraph>
            <GoViewer sgf="/articles/top-blunders/cho_chikun_vs_fujisawa_shuko_variant.sgf">
              <GoViewerBoard
                startAt="end"
                interactive={true}
                showMoveNumbers
                showCapturedStones
              />
              <GoViewerPlayers
                playerBlack="Fujisawa Shuko 9p"
                playerWhite="Cho Chikun 9p"
              />
              <GoViewerControls />
              <GoViewerLegend>
                How the game should have continued.
              </GoViewerLegend>
            </GoViewer>
          </ArticleSubSection>
          <ArticleSubSection>
            <ArticleSubSectionTitle>
              Cho Hunhyun&apos;s Suicide
            </ArticleSubSectionTitle>
            <ArticleParagraph>
              Sensei&apos;s Library catalogs another blunder
              example on its{" "}
              <ArticleLink href="https://senseis.xmp.net/?Suicide">
                suicide
              </ArticleLink>{" "}
              page, in a game between two other legends of
              the game,{" "}
              <ArticleLink href="http://gokifu.com/ko/s/igz-%EA%B8%B0%EB%B3%B4%EA%B0%90%EC%83%81gokifu%EB%B0%94%EB%91%91-20031002-%EC%A1%B0%ED%9B%88%ED%98%849%EB%8B%A8-%EC%B5%9C%EC%B2%A0%ED%95%9C5%EB%8B%A8.html">
                Cho Hunhyun 9p and Choi Cheolhan 5p, in 2003
              </ArticleLink>
              . In it, Cho played an illegal move, a
              suicide.
            </ArticleParagraph>
            <GoViewer sgf="/articles/top-blunders/cho_vs_choi.sgf">
              <GoViewerBoard
                startAt="end"
                interactive={true}
                showMoveNumbers
                showCapturedStones
              />
              <GoViewerPlayers
                playerBlack="Cho Hunhyun 9p"
                playerWhite="Choi Cheolhan 5p"
              />
              <GoViewerControls />
              <GoViewerLegend>
                Cho Hunhyun 9p plays an illegal suicide.
              </GoViewerLegend>
            </GoViewer>
            <ArticleParagraph>
              It&apos;s a pity a suicide is an illegal move.
              The deficit of gifting your opponent a stone
              while also passing your turn is painful
              enough, no?
            </ArticleParagraph>
            <ArticleParagraph>
              And{" "}
              <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/e106cb2d-8264-4285-be82-52c7b41ff7c6">
                the game was actually in Cho&apos;s favor,
                according to AI
              </ArticleLink>
              , Black was estimated to be winning by 6
              points.
            </ArticleParagraph>
            <ArticleBlockQuote>
              In a previous article &mdash;{" "}
              <ArticleLink
                href="/articles/ing-cup-suicide"
                internal
              >
                An Unexpected Effect of The Suicide Rule
              </ArticleLink>{" "}
              &mdash; , I discussed how suicides could
              change some board positions&apos;s outcomes,
              enriching the game.
            </ArticleBlockQuote>
            <ArticleImageWithLegend
              src="/articles/top-blunders/cho_hunhyun_vs_choi_cheolhan.jpg"
              height={100}
              width={450}
            >
              <ImageLegend>
                That specific example was also featured in
                one of my{" "}
                <ArticleLink href="https://www.instagram.com/p/DGqF7gZKrCh/?img_index=1">
                  &quot;psygo&apos; Corner&quot; posts
                </ArticleLink>
                .
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleBlockQuote>
              Here&apos;s a link to a treasure trove of{" "}
              <ArticleLink href="https://homepages.cwi.nl/~aeb/go/games/games/unusual/index.html">
                Unusual Go Games
              </ArticleLink>
              , from CWI, the Netherlands&apos; Institute of
              Mathematics and Theoretical Computer Science.
            </ArticleBlockQuote>
          </ArticleSubSection>
        </ArticleSection>
      </ArticleSection>
    </Article>
  )
}
