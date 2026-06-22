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
} from "@components/posts/post"

export default function FirstPost() {
  return (
    <Main>
      <Post>
        <PostTitleSection>
          <PostTitle>Post-AI Opening Hierarchy</PostTitle>
          <PostDate>March 25th, 2026</PostDate>
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
        </PostSection>
      </Post>
    </Main>
  )
}
