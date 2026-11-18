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
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
  GoViewerPlayers,
} from "@components/goViewer/exports"

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
              Go Game Series YouTube Channel
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
            Shin Jinseo 9p vs Byun Sangil 9p for The Korean
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
            title="Shin Jinseo 9p vs Byun Sangil 9p - The National Korean Team League"
          />
        </ArticleSubSection>
        <ArticleParagraph>
          From an invasion in the bottom-left, SJS (Black)
          started gambling with having half the board in
          exchange for dying with the invader group.
        </ArticleParagraph>
        <ArticleAiSenseiIframe
          src="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/5c3b02a3-d941-47a2-aa42-0cfbfcfc783f"
          title="Shin Jinseo 9p vs Byun Sangil 9p - AI Sensei analysis"
        />
      </ArticleSection>
    </Article>
  )
}
