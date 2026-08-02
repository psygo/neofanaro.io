import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleImageWithLegend,
  ArticleCode,
  ArticleBlockQuote,
  ArticleSectionTitle,
  ArticleIframe,
} from "@components/articles/article"

export function Magi({ post }: ArticleProps) {
  return (
    <Article data={post}>
      <ArticleSection>
        <ArticleParagraph>
          Even though we typically explore the internet
          through a list, in the minds of its original
          creators, I would bet they viewed it as something
          two-dimensional, network is in the name after all.
        </ArticleParagraph>
        <ArticleParagraph>
          Perhaps it was all just a matter of lacking the
          tools, or lacking performant-enough tools. And, if
          that&apos;s the case, maybe{" "}
          <ArticleLink href="https://magi-phi.vercel.app/">
            Magi
          </ArticleLink>{" "}
          could fill in the gap.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/magi/magi_demo_1.png"
          height={425}
          width={425}
          className="rounded-sm"
          alt="Magi Demo 1"
        >
          <p></p>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/magi/magi_demo_3.png"
          height={425}
          width={425}
          className="rounded-sm"
          alt="Magi Demo 2"
        >
          <p></p>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Magi is essentially a 2D version of Reddit, in
          which users create posts on a canvas and use
          different visual elements to relate them. Take a
          look:
        </ArticleParagraph>
        <ArticleIframe
          title="Magi"
          src="https://magi-phi.vercel.app/"
        />
        <ArticleParagraph>
          Visualizing the web as a graph is nothing new, but
          having but having a tool which lets you do it with
          other users is something I had never seen and
          wanted to have become a reality.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Technical Challenges
        </ArticleSectionTitle>
        <ArticleBlockQuote>
          <strong className="font-extrabold">Magi</strong>{" "}
          is open source:{" "}
          <ArticleLink href="https://github.com/psygo/magi">
            @psygo/magi
          </ArticleLink>
        </ArticleBlockQuote>
        <ArticleParagraph>
          Building Magi was not easy. I had to exploit every
          single React trick I knew and more, but,
          thankfully, the outstanding{" "}
          <ArticleLink href="https://github.com/excalidraw/excalidraw">
            Excalidraw
          </ArticleLink>{" "}
          package saved a colossal amount of time and
          effort.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/magi/Excalidraw.png"
          height={425}
          width={425}
          className="rounded-sm"
          alt="Excalidraw"
        >
          <ArticleParagraph>Excalidraw</ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          In the end, the app&apos;s structure consists of
          an HTML <ArticleCode>&lt;canvas&gt;</ArticleCode>
          &nbsp;layer &mdash; handled by Excalidraw &mdash;
          and a regular HTML one. In many ways, Magi simply
          extends Excalidraw to become more socially
          interactive.
        </ArticleParagraph>
        <ArticleParagraph>
          The orchestration of all elements was quite the
          challenge, especially the pagination, which you
          can inspect{" "}
          <ArticleLink href="https://github.com/psygo/magi/blob/main/src/providers/canvas/PaginationProvider.tsx">
            here
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          However, maybe this project&apos;s toughest aspect
          was using a relational database to handle what
          should be in a graph database, such as{" "}
          <ArticleLink href="https://neo4j.com/">
            Neo4j
          </ArticleLink>
          . The resulting{" "}
          <ArticleLink href="https://github.com/psygo/magi/blob/main/src/server/db/schema.ts">
            schema
          </ArticleLink>{" "}
          was much simpler than I ever expected, but that
          needed many prior failed attempts with many
          different tools to ever become a reality.
        </ArticleParagraph>
        <ArticleParagraph>
          Neo4j seemed like a perfect solution at the
          beginning, but its performance as a front-facing
          database did not convince me, it doesn&apos;t seem
          to scale to direct users. Since Neo4j is by far
          the most advanced graph database still, that DB
          category is for sure many decades behind the
          typical relational ones.
        </ArticleParagraph>
        <ArticleBlockQuote>
          <ArticleParagraph>
            One of the most famous applications of treating
            the web as a network was Google&apos;s{" "}
            <ArticleLink href="https://en.wikipedia.org/wiki/PageRank">
              PageRank
            </ArticleLink>
            , which used collected data to create a usage
            graph for each website in the net. One possible
            visualization of that approach of the current
            state of the internet is{" "}
            <ArticleLink href="https://internet-map.net/">
              The Internet Map
            </ArticleLink>
            .
          </ArticleParagraph>
        </ArticleBlockQuote>
      </ArticleSection>
    </Article>
  )
}
