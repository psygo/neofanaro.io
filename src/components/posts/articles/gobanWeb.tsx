import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostSectionTitle,
  PostBlockQuote,
} from "@components/posts/post"
import { WgoPlayer } from "@components/posts/wgoPlayer"

export function GobanWeb({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostBlockQuote>
          If you would like to directly skip to the code,
          here&apos;s the project on Github:{" "}
          <PostLink href="https://github.com/psygo/goban_web">
            @psygo/goban_web
          </PostLink>
          .
        </PostBlockQuote>
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
        <PostParagraph>
          Through{" "}
          <PostLink href="https://claude.com/product/claude-code">
            Claude Code
          </PostLink>{" "}
          more specifically, I was able to create a new
          viewer in a matter of a few days, with a few dozen
          customizable parameters even. At the very least,
          this speed is an amazing tool for experimentation.
          And, given that I do have professional experience
          with Web Components, I can safely say the code is
          of pretty good quality as well.
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
          . Web Components are supported by all browsers,
          and pretty much all web frameworks also offer
          ports for them, since they should be recognized as
          just another HTML tag in the end anyways. And many
          non-web frameworks also offer ports for Web
          Components.
        </PostParagraph>
        <PostParagraph>
          Here is wgo.js in action, showing Shusaku&apos;s
          famous Ear-Reddening Game (1846) — use the
          controls to step through the moves:
        </PostParagraph>
        {/* <WgoPlayer sgf="/articles/goban-web/xu_wenyan_vs_risa_ueno_17_07_2026.sgf" /> */}
        {/* TODO: Show how I use SVGs from LaTeX project here. */}
      </PostSection>
    </Post>
  )
}
