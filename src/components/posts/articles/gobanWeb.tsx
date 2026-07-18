import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostSectionTitle,
} from "@components/posts/post"

export function GobanWeb({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Up till now, still, the most used web viewer for
          the game of Go is{" "}
          <PostLink href="https://github.com/waltheri/wgo.js">
            wgo.js
          </PostLink>
          , a project created by Jan Prokop 6d EGF, spanning
          more or less 2013 to 2016 for its development
          &mdash; Jan Prokop is also behind the amazing{" "}
          <PostLink href="https://ps.waltheri.net/">
            Waltheri Pattern Search
          </PostLink>{" "}
          project. That project was so successful even Asian
          websites, such as{" "}
          <PostLink href="https://kifudepot.net/">
            Kifu Depot
          </PostLink>
          , the biggest database for kifus, use it.
        </PostParagraph>
        <PostParagraph>
          Even considering that wgo.js is an outstanding
          project, it is still sad no alternatives have
          popped up, and, even worse, wgo.js hasn&apos;t had
          any updates in at least 5 years.
        </PostParagraph>
        <PostParagraph>
          The only two real alternatives for wgo.js I can
          think of are{" "}
          <PostLink href="https://sabaki.yichuanshen.de/">
            Sabaki
          </PostLink>
          , and Go Magic&apos; viewer &mdash; which you can
          have exemplified at the end of one of{" "}
          <PostLink href="https://gomagic.org/secrets-of-the-master-of-go-kawabata-shusai-kitani/">
            their articles
          </PostLink>
          . But Sabaki was not intentionally built for this,
          and the original maintainer or creator hasn&apos;t
          been working with the project for a long while at
          this point. And the Go Magic team doesn&apos;t
          seem interested in sharing their viewer, not even
          through licensing.
        </PostParagraph>
        <PostParagraph>
          Thankfully, things might change from now. And
          that&apos;s not due to the project I&apos;m gonna
          share down below, but due to AI. Programming a
          visual component for the game of Go isn&apos;t the
          most complex of projects, but it&apos;s still a
          ton of work, just take a look at all the code
          around{" "}
          <PostLink href="https://github.com/SabakiHQ">
            Sabaki&apos;s ecosystem on Github
          </PostLink>{" "}
          . And what&apos;s worse is that nobody should be
          expecting any substantial reward for that work.
          Given all those constraints, I think AI can be a
          game changer here, and even all the AI haters will
          have to accept things as they are.
        </PostParagraph>
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          The Goban Web Project
        </PostSectionTitle>
        <PostParagraph>
          In order to have this viewer as portable as
          possible, I&apos;ve chosen it to be written as a{" "}
          <PostLink href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components">
            Web Component
          </PostLink>
          , with no dependencies involved, not even the{" "}
          <PostLink href="https://lit.dev/">
            Lit Framework
          </PostLink>
          .
        </PostParagraph>
      </PostSection>
    </Post>
  )
}
