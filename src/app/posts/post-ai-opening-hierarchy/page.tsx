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

export default function FirstPost() {
  return (
    <Main>
      <Post>
        <PostTitleSection>
          <PostTitle>Post-AI Opening Hierarchy</PostTitle>
          <PostDate>June 21st, 2026</PostDate>
          <PostTags tags={["baduk", "AI"]} />
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
              sanrensei
            </PostLink>
            , or the{" "}
            <PostLink href="https://senseis.xmp.net/?ChineseFuseki">
              Chinese
            </PostLink>{" "}
            and its variants.
          </PostParagraph>
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
