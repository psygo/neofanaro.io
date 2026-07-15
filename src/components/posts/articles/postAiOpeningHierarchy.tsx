import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostUnorderedList,
  PostOrderedList,
} from "@components/posts/post"
import { GoDiagram } from "@components/posts/goDiagram"

export function PostAiOpeningHierarchy({
  post,
}: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Before AI, we used to think side moves early in
          the opening had way closer value to corner moves
          than they actually do. Or at least way closer
          value than what AI tells us.
        </PostParagraph>
        <PostParagraph>
          That&apos;s one of the reasons we arrived at
          openings such as the{" "}
          <PostLink href="https://senseis.xmp.net/?SanRenSei">
            Sanrensei
          </PostLink>
          , or the{" "}
          <PostLink href="https://senseis.xmp.net/?ChineseFuseki">
            Chinese
          </PostLink>{" "}
          and its variants.
        </PostParagraph>
        <div className="flex flex-col items-center justify-center px-8 sm:flex-row">
          <GoDiagram
            src="/articles/post-ai-opening-hierarchy/sanrensei_fuseki.svg"
            height={120}
            width={120}
            diaNumber={1}
          >
            <p>The Sanrensei Fuseki</p>
          </GoDiagram>
          <GoDiagram
            src="/articles/post-ai-opening-hierarchy/chinese_fuseki.svg"
            height={120}
            width={120}
            diaNumber={2}
          >
            <p>The Chinese Fuseki</p>
          </GoDiagram>
        </div>
        <PostParagraph>
          Now, with AI, things have become much clearer. The
          opening hierarchy goes like this:
        </PostParagraph>
        <PostOrderedList>
          <li>Corner</li>
          <li>
            Largely interchangeable among these:
            <PostUnorderedList>
              <li>Corner Enclosure</li>
              <li>Corner Approach</li>
              <li>3-3 Invasion Against the 4-4</li>
            </PostUnorderedList>
          </li>
          <li>Side</li>
          <li>Center</li>
        </PostOrderedList>
      </PostSection>
    </Post>
  )
}
