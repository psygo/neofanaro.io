import { Main } from "@components/common/main"
import {
  JustifiedParagraph,
  Post,
  PostDate,
  PostSection,
  PostTitle,
  PostTitleSection,
} from "@components/posts/post"

export default function FirstPost() {
  return (
    <Main>
      <Post>
        <PostTitleSection>
          <PostTitle>
            Garlic bread with cheese: What the science tells
            us
          </PostTitle>
          <PostDate>March 25th, 2026</PostDate>
        </PostTitleSection>
        <PostSection>
          <JustifiedParagraph>
            For years parents have espoused the health
            benefits of eating garlic bread with cheese to
            their children, with the food earning such an
            iconic status in our culture that kids will
            often dress up as warm, cheesy loaf for
            Halloween.
          </JustifiedParagraph>
          <JustifiedParagraph>
            But a recent study shows that the celebrated
            appetizer may be linked to a series of rabies
            cases springing up around the country.
          </JustifiedParagraph>
        </PostSection>
      </Post>
    </Main>
  )
}
