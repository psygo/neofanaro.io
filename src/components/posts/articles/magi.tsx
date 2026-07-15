import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostImageWithLegend,
  PostCode,
  PostBlockQuote,
  PostSectionTitle,
  PostIframe,
} from "@components/posts/post"

export function Magi({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Even though we typically explore the internet
          through a list, in the minds of its original
          creators, I would bet they viewed it as something
          two-dimensional, network is in the name after all.
        </PostParagraph>
        <PostParagraph>
          Perhaps it was all just a matter of lacking the
          tools, or lacking performant-enough tools. And, if
          that&apos;s the case, maybe{" "}
          <PostLink href="https://magi-phi.vercel.app/">
            Magi
          </PostLink>{" "}
          could fill in the gap.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/magi/magi_demo_1.png"
          height={425}
          width={425}
          className="rounded-sm"
          alt="Magi Demo 1"
        >
          <p></p>
        </PostImageWithLegend>
        <PostImageWithLegend
          src="/articles/magi/magi_demo_3.png"
          height={425}
          width={425}
          className="rounded-sm"
          alt="Magi Demo 2"
        >
          <p></p>
        </PostImageWithLegend>
        <PostParagraph>
          Magi is essentially a 2D version of Reddit, in
          which users create posts on a canvas and use
          different visual elements to relate them. Take a
          look:
        </PostParagraph>
        <PostIframe
          title="Magi"
          src="https://magi-phi.vercel.app/"
        />
        <PostParagraph>
          Visualizing the web as a graph is nothing new, but
          having but having a tool which lets you do it with
          other users is something I had never seen and
          wanted to have become a reality.
        </PostParagraph>
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          Technical Challenges
        </PostSectionTitle>
        <PostBlockQuote>
          <strong className="font-extrabold">Magi</strong>{" "}
          is open source:{" "}
          <PostLink href="https://github.com/psygo/magi">
            @psygo/magi
          </PostLink>
        </PostBlockQuote>
        <PostParagraph>
          Building Magi was not easy. I had to exploit every
          single React trick I knew and more, but,
          thankfully, the outstanding{" "}
          <PostLink href="https://github.com/excalidraw/excalidraw">
            Excalidraw
          </PostLink>{" "}
          package saved a colossal amount of time and
          effort.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/magi/Excalidraw.png"
          height={425}
          width={425}
          className="rounded-sm"
          alt="Excalidraw"
        >
          <p>Excalidraw</p>
        </PostImageWithLegend>
        <PostParagraph>
          In the end, the app&apos;s structure consists of
          an HTML <PostCode>&lt;canvas&gt;</PostCode> layer
          &mdash; handled by Excalidraw &mdash; and a
          regular HTML one. In many ways, Magi simply
          extends Excalidraw to become more socially
          interactive.
        </PostParagraph>
        <PostParagraph>
          The orchestration of all elements was quite the
          challenge, especially the pagination, which you
          can inspect{" "}
          <PostLink href="https://github.com/psygo/magi/blob/main/src/providers/canvas/PaginationProvider.tsx">
            here
          </PostLink>
          .
        </PostParagraph>
        <PostParagraph>
          However, maybe this project&apos;s toughest aspect
          was using a relational database to handle what
          should be in a graph database, such as{" "}
          <PostLink href="https://neo4j.com/">
            Neo4j
          </PostLink>
          . The resulting{" "}
          <PostLink href="https://github.com/psygo/magi/blob/main/src/server/db/schema.ts">
            schema
          </PostLink>{" "}
          was much simpler than I ever expected, but that
          needed many prior failed attempts with many
          different tools to ever become a reality.
        </PostParagraph>
        <PostParagraph>
          Neo4j seemed like a perfect solution at the
          beginning, but its performance as a front-facing
          database did not convince me, it doesn&apos;t seem
          to scale to direct users. Since Neo4j is by far
          the most advanced graph database still, that DB
          category is for sure many decades behind the
          typical relational ones.
        </PostParagraph>
        <PostBlockQuote>
          One of the most famous applications of treating
          the web as a network was Google&apos;s{" "}
          <PostLink href="https://en.wikipedia.org/wiki/PageRank">
            PageRank
          </PostLink>
          , which used collected data to create a usage
          graph for each website in the net. One possible
          visualization of that approach of the current
          state of the internet is{" "}
          <PostLink href="https://internet-map.net/">
            The Internet Map
          </PostLink>
          .
        </PostBlockQuote>
      </PostSection>
    </Post>
  )
}
