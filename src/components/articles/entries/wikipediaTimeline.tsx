import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
} from "../articleContent"

export function WikipediaTimeline({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Recently, I had the idea of creating a{" "}
          <ArticleLink href="https://go-hall-of-fame.vercel.app/">
            Go Hall of Fame
          </ArticleLink>
          {/* &mdash; which I discuss here:{" "}
          <ArticleLink
            internal
            href="/articles/go-hall-of-fame"
          >
            Go | Hall of Fame
          </ArticleLink> */}
          . And, while developing the proof of concept, I
          was surprised at how nice and useful the timeline
          feature ended up being, so much so that I started
          asking myself why other websites, such as
          Wikipedia itself, didn&apos;t have one.
        </ArticleParagraph>
        <ArticleParagraph>
          Wikipedia is not only open to the public for
          editing, but also open source and open to software
          contributions as well. So creating new components
          for it is possible.
        </ArticleParagraph>
        <ArticleParagraph>
          My first try at a timeline component was through{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Wikipedia:Template_namespace">
            Wikipedia Templates
          </ArticleLink>
          , but they turn out to be highly inefficient when
          the component features multiple levels of nesting,
          which ends up blowing up article size on memory
          pretty quickly. Thus, in the end, I implemented
          things with{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Wikipedia:Lua">
            Wikipedia Lua Modules
          </ArticleLink>
          , a newer interface for extending Wikipedia&apos;s
          core software. From Lua Modules, the next step
          would be developing a{" "}
          <ArticleLink href="https://www.mediawiki.org/wiki/Category:Extensions">
            MediaWiki Extension
          </ArticleLink>
          , but that step depends on the Wikipedia
          maintainers&apos; wanting your feature, and the
          process could take months.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
