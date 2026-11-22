import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleSectionTitle,
  ArticleYouTubeIframe,
  ArticleAiSenseiIframe,
  ArticleSubSectionTitle,
  ArticleSubSection,
  ArticleTableOfContents,
  ArticleUnorderedList,
  ArticleImageWithLegend,
  ImageLegend,
  ArticleQuote,
} from "../articleContent"

export function BestGamesOf2026({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleSectionTitle>
          Introduction
        </ArticleSectionTitle>
        <ArticleParagraph>
          The year of our lord 2026 is closing out and
          we&apos;ve had many epic games to cherish.
        </ArticleParagraph>
        <ArticleParagraph>
          Here are two other resources for you if you would
          like to check out more outstanding games:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>
            <ArticleLink href="https://www.youtube.com/@JianqiuChen">
              Go Games Series &mdash; YouTube Channel
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.youtube.com/playlist?list=PLMYMhzMuvitRTPetvlWIy4rUhQNkT1zmh">
              Philippe Fanaro &mdash; Go - Reviews Playlist
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.youtube.com/playlist?list=PLeL-TssJiolY">
              Philippe Fanaro &mdash; Go - Pro Games
              Playlist
            </ArticleLink>
          </li>
        </ArticleUnorderedList>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          The Best Go Games of 2026
        </ArticleSectionTitle>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Shin Jinseo 9p vs Byun Sangil 9p &mdash; Samsung
            Cup - Semi-Final
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Going into this game, Byun Sangil 9p was facing
            a 9-43 head-to-head record against Shin Jinseo
            9p. In a post-game interview, when asked about
            it, he even said:
          </ArticleParagraph>
          <ArticleQuote>
            &quot;There is no way not to be conscious about
            it.&quot;
          </ArticleQuote>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/NaiOxgP8BZE"
            title="Baduk TV - Shin Jinseo 9p vs Byun Sangil 9p &mdash; The Samsung Cup - Semi-Final"
          />
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/6alyCMYmrBw"
            title="Go Games Series - Shin Jinseo 9p vs Byun Sangil 9p &mdash; The Samsung Cup - Semi-Final"
          />
          <ArticleParagraph>
            Both Korean 9p&apos;s played like demigods, so
            close to AI almost the entire game, with the
            game constantly on a knife&apos;s edge. Baduk TV
            had to hide their AI evaluation bar from the
            stream multiple times during the match, due to
            AI going crazy with its estimates.
          </ArticleParagraph>
          <ArticleParagraph>
            SJS&apos;s face when the fight for the ko on the
            right and the multiple dragons escalated
            summarizes everything pretty well:
          </ArticleParagraph>
          <ArticleImageWithLegend
            src="/articles/best-games-of-2026/sjs_wtf_face.jpeg"
            width={600}
          >
            <ImageLegend>
              If even SJS reacts to this game like this...
            </ImageLegend>
          </ArticleImageWithLegend>
          <ArticleAiSenseiIframe
            src="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/0398c1d0-86c8-403c-9d1f-d411ecbd2c12"
            title="Shin Jinseo 9p vs Byun Sangil 9p &mdash; The Samsung Cup - Semi-Final"
            move={49}
          />
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Fukuoka Kotaro 7p vs Ichiriki Ryo 9p &mdash;
            Honinbo Title Match - Game 4
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            This year was{" "}
            <ArticleLink href="https://senseis.xmp.net/?FukuokaKotaro">
              Fukuoka Kotaro 8p
            </ArticleLink>
            &apos;s breakthrough to the top of the Go scene
            for sure, both domestically and internationally.
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/G_C3MC8B17w"
            title="Go Games Series - Fukuoka Kotaro 7p vs Ichiriki Ryo 9p - Honinbo Title Match - Game 4"
          />
          <ArticleParagraph>
            Against Ichiriki Ryo 9p, we expect gargantuan
            fights everywhere. But Fukuoka showed us another
            path towards victory, by focusing on the bigger
            picture.
          </ArticleParagraph>
          <ArticleAiSenseiIframe
            src="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/5Ki4bAU1oKWaw0eo4hPr"
            title="Fukuoka Kotaro 7p vs Ichiriki Ryo 9p - Honinbo Title Match - Game 4"
            move={49}
          />
          <ArticleParagraph>
            Eventually, Fukuoka managed to clinch the
            Honinbo title away from Ichiriki Ryo 9p, in a
            thrilling 7-game series.
          </ArticleParagraph>
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Shin Jinseo 9p vs Byun Sangil 9p &mdash; Korean
            National Team League
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            After losing yet another world championship
            title to Shin Jinseo 9p, Byun Sangil 9p faced
            his nemesis once again, for the Korean National
            Team League on Baduk TV, on September 24th,
            2026.
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/a45BnGx7UDM"
            title="Baduk TV - Shin Jinseo 9p vs Byun Sangil 9p - The National Korean Team League"
          />
          <ArticleParagraph>
            From an invasion in the bottom-left, SJS (Black)
            started gambling with having half the board in
            exchange for dying with the invader group.
          </ArticleParagraph>
          <ArticleAiSenseiIframe
            src="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/5c3b02a3-d941-47a2-aa42-0cfbfcfc783f"
            title="Shin Jinseo 9p vs Byun Sangil 9p - AI Sensei analysis"
            move={84}
          />
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Shibano Toramaru 9p vs Ichiriki Ryo 9p &mdash;
            Meijin Title Match - Game 7
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            In the final game for the prestigious and
            historical{" "}
            <ArticleLink href="https://senseis.xmp.net/?Meijin">
              Meijin
            </ArticleLink>{" "}
            title, Shibano and Ichiriki both went all-in
            from start to finish.
          </ArticleParagraph>
          <ArticleParagraph>
            Starting with one of the most complex post-AI
            josekis on the top-left, the game became a
            tesuji-fest till the end.
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/rSZ7tmyRbpI"
            title="Go Games Series - Shibano Toramaru 9p vs Ichiriki Ryo 9p &mdash; Meijin Title Match - Game 7"
          />
          <ArticleAiSenseiIframe
            src="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/316be452-c0b4-4def-ab00-1cc363a79cc8?move=66"
            title="Shibano Toramaru 9p vs Ichiriki Ryo 9p &mdash; Meijin Title Match - Game 7"
            move={84}
          />
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Li Weiqing 9p vs Byun Sangil 9p &mdash; Samsung
            Cup - Final - Game 3
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            <ArticleLink href="https://senseis.xmp.net/?LiQincheng">
              Li Qincheng 9p
            </ArticleLink>{" "}
            had an amazing run during the 2026 Samsung Cup.
            World famous for being the fastest top
            professional, he pretty much managed to beat Gu
            Zihao 9p using only 30 min out of 2h, while Gu
            Zihao struggled with byo-yomi.
          </ArticleParagraph>
          <ArticleParagraph>
            However, the 2 last games of the final will
            likely make him change his approach to time
            management. The whole Go community watched as he
            played quickly during key moments which could
            have completely change the outcome of the game.
            During both of Byun Sangil 9p&apos;s wins in the
            final, Li Qincheng still had more than an hour
            on the clock:
          </ArticleParagraph>
          <ArticleQuote>
            Spending an hour thinking or spending your whole
            life regretting not having thought for an hour?
          </ArticleQuote>
          <ArticleParagraph>
            That is the question.
          </ArticleParagraph>
          <ArticleParagraph>
            Li Qincheng 9p is still not that old (b. 1998),
            so he&apos;ll have other opportunities to turn
            things around, but some world class players have
            historically only had one chance.
          </ArticleParagraph>
          <ArticleParagraph>
            All that said, as Go Games Series&apos;s
            Jiangqiu Chen emphasizes, it looks more and more
            as if this behavior is actually a psychological
            impediment or limitation for Li Weiqing 9p,
            maybe he has extreme difficulties to be able to
            focus for long stretches of time.
          </ArticleParagraph>
          <ArticleParagraph>
            And I guess I&apos;m on the same boat, since I
            also played a move in an important game while
            having time to spare, during my{" "}
            <ArticleLink
              internal
              href="/articles/second-brazil-open-2026"
            >
              2nd place run in the 2026 Brazil Open
            </ArticleLink>
            .
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/dAR8K40-GdA"
            title="Baduk TV - Li Weiqing 9p vs Byun Sangil 9p - Samsung Cup - Final - Game 3"
          />
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/ENC4KWGDbVE"
            title="Lee Hyunwook - Li Weiqing 9p vs Byun Sangil 9p - Samsung Cup - Final - Game 3"
          />
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/YwMLi4x8Fho"
            title="Go Games Series - Li Weiqing 9p vs Byun Sangil 9p - Samsung Cup - Final - Game 3"
          />
          <ArticleAiSenseiIframe
            src="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/11116c83-aa4c-4037-9a68-5cb2de8c87d3?move=116"
            title="Baduk TV - Li Weiqing 9p vs Byun Sangil 9p - Samsung Cup - Final - Game 3"
            move={84}
          />
        </ArticleSubSection>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>Outro</ArticleSectionTitle>
        <ArticleParagraph>
          Any other epic games from 2026 I didn&apos;t
          cover? Let me know in the comments!
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
