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
              Go Game Series &mdash; YouTube Channel
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
            Shin Jinseo 9p vs Byun Sangil 9p &mdash; The
            2026 Samsung Cup - Semi-Final
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Going into this game, Byun Sangil was facing a
            9-43 head-to-head record against Shin Jinseo 9p.
            In a post-game interview, when asked about it,
            he said there was no way not to be conscious
            about it.
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/NaiOxgP8BZE"
            title="Baduk TV - Shin Jinseo 9p vs Byun Sangil 9p &mdash; The 2026 Samsung Cup - Semi-Final"
          />
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/6alyCMYmrBw"
            title="Go Game Series - Shin Jinseo 9p vs Byun Sangil 9p &mdash; The 2026 Samsung Cup - Semi-Final"
          />
          <ArticleParagraph>
            Both Korean 9p&apos;s played like demigods, so
            close to AI almost the whole game... with the
            game on a knife&apos;s edge the whole time.
            Baduk TV had to hide their AI evaluation bar
            from the stream multiple times during the match,
            due to AI going crazy with its estimates.
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
            title="Shin Jinseo 9p vs Byun Sangil 9p &mdash; The 2026 Samsung Cup - Semi-Final"
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
            title="Go Game Series - Fukuoka Kotaro 7p vs Ichiriki Ryo 9p - Honinbo Title Match - Game 4"
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
            Shin Jinseo 9p vs Byun Sangil 9p &mdash; The
            Korean National Team League
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
            title, Shibano and Ichiriki both went all in
            from start to finish.
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/rSZ7tmyRbpI"
            title="Go Game Series - Shibano Toramaru 9p vs Ichiriki Ryo 9p &mdash; Meijin Title Match - Game 7"
          />
          <ArticleAiSenseiIframe
            src="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/316be452-c0b4-4def-ab00-1cc363a79cc8?move=66"
            title="Shibano Toramaru 9p vs Ichiriki Ryo 9p &mdash; Meijin Title Match - Game 7"
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
