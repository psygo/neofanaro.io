import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleImageWithLegend,
  ImageLegend,
  ArticleSectionTitle,
  ArticleUnorderedList,
  ArticleBlockQuote,
} from "../articleContent"
import { ArticleGitHubReadme } from "../githubReadme"

export function WikipediaTimeline({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleImageWithLegend
          src="/articles/wikipedia-timeline/timeline_images_of_earth.png"
          height={100}
          width={600}
        >
          <ImageLegend>
            The converted article for the{" "}
            <ArticleLink href="https://en.wikipedia.org/wiki/Timeline_of_first_images_of_Earth_from_space">
              Timeline of images of Earth from space
            </ArticleLink>
            . I&apos;ve also added a dropdown switcher for
            preserving the previous table or list views (and
            you could also add any other views).
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Recently, I got into the mindset of creating a{" "}
          <ArticleLink href="https://go-hall-of-fame.vercel.app/">
            Go (board game) Hall of Fame
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
        <ArticleImageWithLegend
          src="/articles/go-hall-of-fame/timeline_1.png"
          width={600}
        >
          <ImageLegend>
            A timeline example (1). Players and games are
            not only links, but entities in the database.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/go-hall-of-fame/timeline_2.png"
          width={600}
        >
          <ImageLegend>A timeline example (2).</ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/wikipedia-timeline/timeline_of_go_1.png"
          width={600}
        >
          <ImageLegend>
            A{" "}
            <ArticleLink href="https://en.wikipedia.org/wiki/Timeline_of_Go">
              Timeline of Go
            </ArticleLink>
            , based on Wikipedia&apos;s{" "}
            <ArticleLink href="https://en.wikipedia.org/wiki/History_of_Go">
              History of Go
            </ArticleLink>
            , Sensei&apos;s Library{" "}
            <ArticleLink href="https://senseis.xmp.net/?GoHistory">
              Go History
            </ArticleLink>{" "}
            and my{" "}
            <ArticleLink href="https://go-hall-of-fame.vercel.app/timeline">
              Go Hall of Fame&apos;s Timeline
            </ArticleLink>
            .
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Wikipedia is not only open to the public for
          editing, but also open source and open to software
          contributions as well. So creating new components
          for it is possible.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/wikipedia-timeline/timeline_historic_inventions.png"
          height={100}
          width={600}
        >
          <ImageLegend>
            The converted article for the{" "}
            <ArticleLink href="https://en.wikipedia.org/wiki/User:Fanaro009/Timeline_of_historic_inventions">
              Timeline of historic inventions
            </ArticleLink>
            .
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          My first try at a timeline component was through{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Wikipedia:Template_namespace">
            Wikipedia Templates
          </ArticleLink>
          , but they turn out to be highly inefficient when
          the component features multiple levels of nesting,
          which ends up blowing up the article&apos;s total
          size pretty quickly. Thus, in the end, I
          implemented things using{" "}
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
          maintainers wanting your feature, and the process
          could take months.
        </ArticleParagraph>
        <ArticleParagraph>
          Hopefully, I won&apos;t need such a lengthy
          process for enabling this to the public. And
          I&apos;ve also added a view switcher dropdown
          button to preserve the original timeline
          visualizations people had developed prior to my
          component, so nothing will be lost in any articles
          &mdash; my component is even able to automatically
          generate list and table views from the timeline
          view itself!
        </ArticleParagraph>
        <ArticleBlockQuote>
          <ArticleParagraph>
            I have to say I&apos;m quite shocked by
            Wikipedia opting for its templates and modules
            having to be reimplemented in each and every
            language. This is likely the number one tenant
            for good software engineering: D.R.Y., i.e.
            don&apos;t repeat yourself. It makes code so
            much more difficult to maintain...{" "}
          </ArticleParagraph>
          <ArticleParagraph>
            People need to basically copy-paste their code
            potentially hundreds of times to make it
            available on other languages. There are
            proposals for changing that, such as the{" "}
            <ArticleLink href="https://www.mediawiki.org/wiki/Global_templates">
              Global templates
            </ArticleLink>
            , but it is ridiculous that, in 2026, 25 years
            after Wikipedia&apos;s founding, we still have
            to deal with this.
          </ArticleParagraph>
        </ArticleBlockQuote>
        <ArticleGitHubReadme href="https://github.com/psygo/wikipedia_timeline" />
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          References
        </ArticleSectionTitle>
        <ArticleUnorderedList>
          <li>
            <ArticleLink href="https://github.com/psygo/wikipedia_timeline">
              @psygo/wikipedia_timeline
            </ArticleLink>
          </li>
          <ArticleUnorderedList>
            <li>
              <ArticleLink href="https://psygo.github.io/wikipedia_timeline/">
                Wikipedia Timeline Rail Demo
              </ArticleLink>
            </li>
          </ArticleUnorderedList>
          <li>
            <ArticleLink href="https://en.wikipedia.org/wiki/Wikipedia:Village_pump_(proposals)#Timeline_Visual_Component">
              Wikipedia Timeline Component Proposal
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://en.wikipedia.org/w/index.php?title=Module:TimelineRail">
              Timeline Rail Lua Module
            </ArticleLink>
          </li>
          <li>
            Public Wikipedia Articles
            <ArticleUnorderedList>
              <li>
                <ArticleLink href="https://en.wikipedia.org/wiki/Timeline_of_first_images_of_Earth_from_space">
                  Timeline of images of Earth from Space
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://en.wikipedia.org/wiki/Timeline_of_Go">
                  Timeline of Go
                </ArticleLink>
              </li>
            </ArticleUnorderedList>
          </li>
          <li>Drafts</li>
          <ArticleUnorderedList>
            <li>
              <ArticleLink href="https://en.wikipedia.org/wiki/User:Fanaro009/Timeline_of_historic_inventions">
                Timeline of historic inventions
              </ArticleLink>
            </li>
            <li>
              <ArticleLink href="https://en.wikipedia.org/wiki/User:Fanaro009/Timeline_of_artificial_intelligence">
                Timeline of artificial intelligence
              </ArticleLink>
            </li>
          </ArticleUnorderedList>
        </ArticleUnorderedList>
      </ArticleSection>
    </Article>
  )
}
