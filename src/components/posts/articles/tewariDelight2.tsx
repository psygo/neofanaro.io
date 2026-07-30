import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
} from "@components/posts/post"

export function TewariDelight2({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          <PostLink href="https://senseis.xmp.net/?Tewari">
            Tewari
          </PostLink>{" "}
          has been one of my favorite for a long time, and,
          about a year and a half ago, I found myself
          wanting an example of how not to do it.
          That&apos;s how I got to the{" "}
          <PostLink href="https://senseis.xmp.net/?HowToLieWithTewari">
            How to lie with tewari
          </PostLink>{" "}
          page on Sensei&apos;s Library.
        </PostParagraph>
        <PostParagraph>
          In it, a discussion about the following shape
          popped up:
        </PostParagraph>
      </PostSection>
    </Post>
  )
}
