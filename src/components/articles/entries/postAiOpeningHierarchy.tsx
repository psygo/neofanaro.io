import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleUnorderedList,
  ArticleOrderedList,
} from "@components/articles/article"
import { GoDiagram } from "@components/articles/goDiagram"

export function PostAiOpeningHierarchy({
  post,
}: ArticleProps) {
  return (
    <Article data={post}>
      <ArticleSection>
        <ArticleParagraph>
          Before AI, we used to think side moves early in
          the opening had way closer value to corner moves
          than they actually do. Or at least way closer
          value than what AI tells us.
        </ArticleParagraph>
        <ArticleParagraph>
          That&apos;s one of the reasons we arrived at
          openings such as the{" "}
          <ArticleLink href="https://senseis.xmp.net/?SanRenSei">
            Sanrensei
          </ArticleLink>
          , or the{" "}
          <ArticleLink href="https://senseis.xmp.net/?ChineseFuseki">
            Chinese
          </ArticleLink>{" "}
          and its variants.
        </ArticleParagraph>
        <div className="flex flex-col items-center justify-center px-8 sm:flex-row">
          <GoDiagram
            src="/articles/post-ai-opening-hierarchy/sanrensei_fuseki.svg"
            height={120}
            width={120}
            diaNumber={1}
          >
            <ArticleParagraph>
              The Sanrensei Fuseki
            </ArticleParagraph>
          </GoDiagram>
          <GoDiagram
            src="/articles/post-ai-opening-hierarchy/chinese_fuseki.svg"
            height={120}
            width={120}
            diaNumber={2}
          >
            <ArticleParagraph>
              The Chinese Fuseki
            </ArticleParagraph>
          </GoDiagram>
        </div>
        <ArticleParagraph>
          Now, with AI, things have become much clearer. The
          opening hierarchy goes like this:
        </ArticleParagraph>
        <ArticleOrderedList>
          <li>Corner</li>
          <li>
            Largely interchangeable among these:
            <ArticleUnorderedList>
              <li>Corner Enclosure</li>
              <li>Corner Approach</li>
              <li>3-3 Invasion Against the 4-4</li>
            </ArticleUnorderedList>
          </li>
          <li>Side</li>
          <li>Center</li>
        </ArticleOrderedList>
      </ArticleSection>
    </Article>
  )
}
