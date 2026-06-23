import { Main } from "@components/common/main"
import {
  PostParagraph,
  Post,
  PostDate,
  PostSection,
  PostTitle,
  PostTitleSection,
  PostLink,
  PostTags,
  PostOrderedList,
  PostUnorderedList,
} from "@components/posts/post"
import { postCardDb } from "@components/posts/postsDb"
import { GoDiagram } from "@components/posts/goDiagram"

export default function PostAiOpeningHierarchy() {
  return (
    <Main>
      <Post>
        <PostTitleSection>
          <PostTitle>{postCardDb[0].title}</PostTitle>
          <PostDate>{postCardDb[0].date}</PostDate>
          <PostTags tags={postCardDb[0].tags} />
        </PostTitleSection>
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
          <GoDiagram
            src="/articles/post-ai-opening-hierarchy/sanrensei_fuseki.svg"
            alt="Sanrensei Fuseki"
            diaNumber={1}
            legend="The Sanrensei Fuseki"
          />
          <GoDiagram
            src="/articles/post-ai-opening-hierarchy/chinese_fuseki.svg"
            alt="Chinese Fuseki"
            diaNumber={2}
            legend="The Chinese Fuseki"
          />
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
