import { Main } from "@components/common/main"
import {
  PostParagraph,
  Post,
  PostDate,
  PostSection,
  PostTitle,
  PostTitleSection,
  //   PostLink,
  PostTags,
} from "@components/posts/post"
import { postCardDb } from "@components/posts/postsDb"
// import { GoDiagram } from "@components/posts/goDiagram"

export default function PostAiOpeningHierarchy() {
  return (
    <Main>
      <Post>
        <PostTitleSection>
          <PostTitle>{postCardDb[2].title}</PostTitle>
          <PostDate date={postCardDb[2].date} />
          <PostTags tags={postCardDb[2].tags} />
        </PostTitleSection>
        <PostSection>
          <PostParagraph>here</PostParagraph>
        </PostSection>
      </Post>
    </Main>
  )
}
