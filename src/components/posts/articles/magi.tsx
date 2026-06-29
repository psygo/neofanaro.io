import Image from "next/image"

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
        <Image
          src="/articles/magi/magi_demo_1.png"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-full w-full px-3"
          alt="Magi Demo 1"
        />
        <Image
          src="/articles/magi/magi_demo_3.png"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-full w-full px-3"
          alt="Magi Demo 2"
        />
        <PostParagraph>
          Magi is essentially a 2D version of Reddit, in
          which users create posts on a canvas and use
          different visual elements to relate them. Take a
          look:
        </PostParagraph>
        <iframe
          id="inlineFrameExample"
          title="Magi"
          width={0}
          height={0}
          src="https://magi-phi.vercel.app/"
          className="mx-auto h-60 w-full px-3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
          legend="Excalidraw"
          className="mb-0 h-full w-80"
        />
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
      </PostSection>
    </Post>
  )
}
