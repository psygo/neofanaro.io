import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleImageWithLegend,
  ArticleLink,
  ArticleOrderedList,
  ArticleParagraph,
  ArticleSection,
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
} from "../../goViewer/exports"

export function TopBlunders({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
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
          width={600}
        >
          <ImageLegend>
            If you feel like blunders are killing your joy,
            remember that pros from all sports need to learn
            how to forgive themselves.
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
            <ArticleTimestamp>0:48</ArticleTimestamp> The
            Shortest Professional Game between Ono Nobuyuki
            and Kudo Norio
          </li>
          <li></li>
        </ArticleOrderedList>
      </ArticleSection>
    </Article>
  )
}
