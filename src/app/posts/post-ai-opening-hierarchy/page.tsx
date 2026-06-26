import type { Metadata } from "next"

import { generateMetadataHelper } from "@utils/generateMetadata"

import { get_post_views } from "@server/actions/posts/get_posts"

import { Main } from "@components/common/main"
import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostOrderedList,
  PostUnorderedList,
} from "@components/posts/post"
import { postCardDb } from "@components/posts/postsDb"
import { GoDiagram } from "@components/posts/goDiagram"

const postData = postCardDb[0]

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataHelper(
    postData.title,
    postData.description,
  )
}

export default async function PostAiOpeningHierarchy() {
  const pagePath = postData.href.split("/")[2]
  const views = (await get_post_views(pagePath)) || 0

  return (
    <Main>
      <Post data={postData} views={views}>
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
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <GoDiagram
              src="/articles/post-ai-opening-hierarchy/sanrensei_fuseki.svg"
              size={80}
              diaNumber={1}
              legend="The Sanrensei Fuseki"
            />
            <GoDiagram
              src="/articles/post-ai-opening-hierarchy/chinese_fuseki.svg"
              diaNumber={2}
              size={80}
              legend="The Chinese Fuseki"
            />
          </div>
          <PostParagraph>
            Now, with AI, things have become much clearer.
            The opening hierarchy goes like this:
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
    </Main>
  )
}
