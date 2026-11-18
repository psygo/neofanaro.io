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

export function GoHallOfFame({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleImageWithLegend
          src="/articles/go-hall-of-fame/home.png"
          width={600}
        >
          <ImageLegend>Go | Hall of Fame</ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          It&apos;s sad that at this point in time, Go
          doesn&apos;t have a centralized resource for all
          of its most outstanding games and history.
          Ultimately, that would be a part of an online Go
          museum, but a standalone hall of fame would
          already be an amazing starting point.
        </ArticleParagraph>
        <ArticleParagraph>
          That need was how I started working on the{" "}
          <ArticleLink href="https://go-hall-of-fame.vercel.app">
            Go | Hall of Fame
          </ArticleLink>{" "}
          project, which is mostly just a proof of concept
          for now.
        </ArticleParagraph>
        <ArticleParagraph>
          Even though the games and players database was
          supposed to be the most interesting part of that
          project, I accidentally ended up enjoying the
          timeline much more. Since we can link up timeline
          events with games and players, everything ends up
          being tightly connected, providing many other
          visualization possibilities as well.
        </ArticleParagraph>
        <ArticleBlockQuote>
          My timeline is largely based on the great{" "}
          <ArticleLink href="https://senseis.xmp.net/?GoHistory">
            Sensei&apos;s Library &quot;Go History&quot;
          </ArticleLink>
          &nbsp;page.
        </ArticleBlockQuote>
        <ArticleImageWithLegend
          src="/articles/go-hall-of-fame/timeline_1.png"
          width={600}
        >
          <ImageLegend>A timeline example (1).</ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/go-hall-of-fame/timeline_2.png"
          width={600}
        >
          <ImageLegend>A timeline example (2).</ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          I was so fond of the timeline feature that I
          started thinking it would be a great addition to
          Wikipedia as well. As a result, I&apos;ve also
          started working on a new component for Wikipedia
          itself! Take a look at the{" "}
          <ArticleLink href="https://github.com/psygo/wikipedia_timeline">
            @psygo/wikipedia_timeline
          </ArticleLink>{" "}
          project, and the respective{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Wikipedia:Village_pump_(proposals)#Timeline_Visual_Component">
            Wikipedia Proposal
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/go-hall-of-fame/wikipedia_timeline.png"
          width={600}
        >
          <ImageLegend>
            My Wikipedia timeline component.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          For now, I&apos;m letting this project be, because
          I need to spend my time and energy elsewhere, but
          let me know what you think! And a website like
          this would require curators and contributors, so
          do also let the the community be aware if you
          would like to be one!
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
