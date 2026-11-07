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
  ArticleUnorderedList,
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
          This article is an extension to another{" "}
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
          It&apos;s worth noting that neither I nor Go Game
          Series (GGS) would like to shame anyone.
          Cataloging these blunders is just a way for us to
          treat ourselves less harshly whenever we are the
          ones on the sad end of the story, by realizing
          even legendary players have also experienced these
          tragic moments.
        </ArticleParagraph>
        <ArticleParagraph>
          If there&apos;s anything to say about these pro
          examples more directly, I would definitely
          emphasize that those pros&apos; willpower to move
          on and persist is admirable and commendable. All
          the more when considering how East Asians are so
          harsh on themselves and one another, and how shame
          takes a much bigger part in their culture than in
          the West.
        </ArticleParagraph>
        <ArticleParagraph>
          Additionally, personally, somehow I feel like
          I&apos;m able to turn their pain into learning of
          my own, making it less likely I end up playing the
          same mistakes.
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
          These are the blunders covered in GGS&apos;s
          video:
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
            Sangil 9p vs Choi Jeong 9p, for the 2022 Samsung
            Cup.
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
            between Ke Jie 9p and Park Junghwan 9p, in 2019.
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
            9p vs Kim Chaeyoung 1p, for the 2014 Female
            Kuksu title.
          </li>
        </ArticleOrderedList>
        <ArticleParagraph>
          A list of highly unfortunate events indeed, to say
          the least. However, some of the most spectacular
          weren&apos;t included in that video...
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
              One of them is in the last section of
              ALOUTOULOU&apos;s very funny meme compilation,{" "}
              <ArticleLink href="https://youtu.be/r1vIvOD5iGQ?t=51">
                &quot;Everyone is HERE (Game of Go
                Edition)&quot;
              </ArticleLink>
              :
            </ArticleParagraph>
            <ArticleYouTubeIframe
              src="https://www.youtube.com/embed/r1vIvOD5iGQ"
              title="Top 5 Biggest Blunders In Go!"
            />
            <ArticleImageWithLegend
              src="/articles/top-blunders/nakano_self_atari.png"
              height={100}
              width={500}
            >
              <ImageLegend>
                Nakano&apos;s (Black) self-atari. Black was
                winning, and there were mostly only dames
                left.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              That blunder comes from a game between Ishida
              Yoshio 9p and Nakano Yasuhiro 9p for the 2006,
              53rd NHK Cup.
            </ArticleParagraph>
            <ArticleParagraph>
              In an interview, 14 years later, Nakano said
              he was worried he would be stripped of his
              professional title at the time, due to the
              self-atari mistake.
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
              page offers yet another example, from{" "}
              <ArticleLink href="https://homepages.cwi.nl/~aeb/go/games/games/Cho_Chikun/tournaments/Kisei.html#:~:text=268-,sgf,-42">
                Game 7 of the 1983 Kisei Title Match
              </ArticleLink>
              :
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
              Instead of connecting in Dia.{" "}
              <DiagramRef label="cho_chikun_vs_fujisawa_shuko" />
              , Fujisawa could have captured a white stone,
              which would then lead both players to a
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
            <ArticleParagraph>
              That game broke Fujisawa Shuko 9p&apos;s
              6-year streak as the reigning{" "}
              <ArticleLink href="https://senseis.xmp.net/?Kisei">
                Kisei
              </ArticleLink>
              , the most prestigious title in Japan.
            </ArticleParagraph>
          </ArticleSubSection>
          <ArticleSubSection>
            <ArticleSubSectionTitle>
              Cho Hunhyun&apos;s Suicide
            </ArticleSubSectionTitle>
            <ArticleParagraph>
              Sensei&apos;s Library documents another
              blunder example on its{" "}
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
            <GoViewer sgf="/articles/top-blunders/cho_hunhyun_vs_choi_cheolhan.sgf">
              <GoViewerBoard
                startAt="end"
                showMoveNumbers={false}
                showCapturedStones
              />
              <GoViewerPlayers
                playerBlack="Cho Hunhyun 9p"
                playerWhite="Choi Cheolhan 5p"
              />
              <GoViewerControls />
              <GoViewerLegend>
                Cho Hunhyun 9p plays an illegal suicide.
                Instead, he probably intended to go for the
                ko at A.
              </GoViewerLegend>
            </GoViewer>
            <ArticleParagraph>
              It&apos;s a pity suicides are illegal. The
              deficit of gifting your opponent a stone while
              also passing your turn is painful enough, no?
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
              change some board positions&apos; outcomes,
              enriching the game.
            </ArticleBlockQuote>
            <ArticleImageWithLegend
              src="/articles/top-blunders/cho_hunhyun_vs_choi_cheolhan.jpg"
              height={100}
              width={450}
            >
              <ImageLegend>
                That specific example was also a part of my{" "}
                <ArticleLink href="https://www.instagram.com/p/DGqF7gZKrCh/?img_index=1">
                  &quot;psygo&apos;s Corner&quot; posts
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
          <ArticleSubSection>
            <ArticleSubSectionTitle>
              When A Senior Pro Bullies/Tricks/Induces His
              Peer Into A Self-Atari
            </ArticleSubSectionTitle>
            <ArticleParagraph>
              I don&apos;t have enough data on this one to
              judge if White bullied, tricked or induced
              Black, but, while playing the dames, White
              points at a self-atari move and Black falls
              right into it.
            </ArticleParagraph>
            <ArticleYouTubeIframe
              src="https://www.youtube.com/embed/7F_3miRj79k"
              title="Top 5 Biggest Blunders In Go!"
            />
            <ArticleImageWithLegend
              src="/articles/top-blunders/white_bully.png"
              height={100}
              width={500}
            >
              <ImageLegend>
                White bullies/tricks/induces Black into
                playing a self-atari. Black was also
                winning...
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              The players are Kim Dongyeop 9p and Kim
              Jongjun 7p, both veterans of Korean Go and
              former top players. One of the commentators
              for that game is none other than Do Eunkyo 1p,
              from the{" "}
              <ArticleLink href="https://www.youtube.com/@eunkyodo">
                Go Inside
              </ArticleLink>{" "}
              YouTube channel, and the video is on one of{" "}
              <ArticleLink href="https://www.youtube.com/@goproyeonwoo">
                Pro Yeonwoo
              </ArticleLink>
              &apos;s channels.
            </ArticleParagraph>
          </ArticleSubSection>
        </ArticleSection>
        <ArticleSection>
          <ArticleSectionTitle>Outro</ArticleSectionTitle>
          <ArticleParagraph>
            So, what do you think? Too sad? Any other
            spectacular blunders I didn&apos;t mention?
            Leave them in the comments!
          </ArticleParagraph>
          <ArticleParagraph>
            Another aspect of this theme is tackling why
            people still make these giant mistakes, what
            triggers these situations and how to prevent
            them. Overall, from my experience, it&apos;s
            usually a mix of:
          </ArticleParagraph>
          <ArticleUnorderedList>
            <li>Lapses in focus</li>
            <li>Time pressure</li>
          </ArticleUnorderedList>
          <ArticleParagraph>
            Imagine how the pressure from everyone watching
            you during televised matches could muddle your
            focus! As you struggle to regain your focus,
            there goes your thinking time!
          </ArticleParagraph>
          <ArticleParagraph>
            Many players and teachers do have their systems
            and set of recommendations for dealing with this
            problem, but I quite frankly think we&apos;re
            sorely lacking a more established, scientific
            solution here. Especially when considering
            we&apos;ve been playing this game for at least
            2,500 years already. Are there no other sports
            with thoroughly tested frameworks?
          </ArticleParagraph>
          <ArticleBlockQuote>
            If you&apos;re making too many blunders, Inseong
            Hwang 8d EGF recommends playing a high volume of
            quick games, since that usually means
            you&apos;re out of practice.
          </ArticleBlockQuote>
          <ArticleParagraph>
            The bare minimum to call this done would demand
            players be able to consistently realize in
            real-time when they are susceptible to
            committing such mistakes, I would say.
          </ArticleParagraph>
          {/* <ArticleParagraph>
            For the blunders during televised matches,
            handling the pressure can hinder focus
            dramatically.
          </ArticleParagraph>
          <ArticleParagraph>
            Anyhow, perhaps even more shameful than the
            blunders themselves is the current state of not
            systematizing what&apos;s behind this
            psychological and skill-related problem, both in
            terms of diagnosis and solutions.
          </ArticleParagraph>
          <ArticleParagraph>
            Of course, veteran players do have sets of
            solutions, but I still feel it&apos;s lacking
            and non-exhaustive.
          </ArticleParagraph> */}
          <ArticleParagraph>
            On my end, I did manage to improve my blunder
            rate by practicing more tsumegos and playing
            more, as I believe, in large part, that these
            types of huge mistakes can be offloaded to our
            monkey, instinctual brain &mdash; or are we
            actually fixing our monkey brains instead?
          </ArticleParagraph>
          <ArticleParagraph>
            But I do also try to be more aware of likely
            trivial problems I might need to fix beforehand,
            especially under time pressure. If you&apos;re
            feeling idle during a game, maybe a way of
            maintaining focus while also lowering risks
            could be just going through those trivial sentes
            you and your opponent have &mdash; you might
            even find out some of those are actually not
            sente!
          </ArticleParagraph>
          <ArticleParagraph>
            Lastly, in case you&apos;re overwhelmed by
            others potentially shaming you, I suggest{" "}
            psychologically <em>reframing</em> the issue:
            take joy from how others will feel once they
            lose to a supposed idiot.
          </ArticleParagraph>
        </ArticleSection>
      </ArticleSection>
    </Article>
  )
}
