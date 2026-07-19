"use client"

import dynamic from "next/dynamic"

import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostSectionTitle,
  PostBlockQuote,
  PostCode,
} from "@components/posts/post"
import { WgoPlayer } from "@components/posts/wgoPlayer"
import { GoDiagram } from "../goDiagram"

const GoBoardPlayer = dynamic(
  () =>
    import("@components/posts/goBoardPlayer").then(
      (m) => m.GoBoardPlayer,
    ),
  { ssr: false },
)

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
            <PostCode>wgo.js</PostCode>
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
          Even considering that <PostCode>wgo.js</PostCode>{" "}
          is an outstanding project, it is still sad no
          alternatives have popped up, and, even worse, it
          hasn&apos;t had any updates in at least 5 years.
        </PostParagraph>
        <PostParagraph>
          The only real alternatives to it I can think of
          are{" "}
          <PostLink href="https://sabaki.yichuanshen.de/">
            Sabaki
          </PostLink>
          , and{" "}
          <PostLink href="https://gomagic.org/">
            Go Magic
          </PostLink>
          &apos; viewer &mdash; which you can have
          exemplified at the end of this{" "}
          <PostLink href="https://gomagic.org/secrets-of-the-master-of-go-kawabata-shusai-kitani/">
            article
          </PostLink>
          . But Sabaki was not intentionally built for this,
          and the original maintainer or creator hasn&apos;t
          been working with the project for a long while at
          this point. And the Go Magic team doesn&apos;t
          seem interested in sharing their viewer, not even
          through licensing.
        </PostParagraph>
        <PostBlockQuote>
          If nothing else, this article and the Goban Web
          project are good reference points for future
          projects.
        </PostBlockQuote>
        <PostParagraph>
          Thankfully, things might change from now. And
          that&apos;s not necessarily due to the project
          I&apos;m gonna share down below, but due to AI.
        </PostParagraph>
        <PostParagraph>
          Programming a visual component for the game of Go
          isn&apos;t the most complex of projects, but
          it&apos;s still a ton of work, just take a look at
          all the code around{" "}
          <PostLink href="https://github.com/SabakiHQ">
            Sabaki&apos;s ecosystem on Github
          </PostLink>{" "}
          . And what&apos;s worse is that nobody should be
          expecting any substantial reward for that effort.
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
        <PostParagraph>
          Anyhow, I hope this project opens up new
          possibilities for Go projects in the near future.
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
          There are mainly two options for drawing on the
          web: the{" "}
          <PostLink href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
            <PostCode>&lt;canvas&gt;</PostCode>
          </PostLink>{" "}
          and{" "}
          <PostLink href="https://developer.mozilla.org/en-US/docs/Web/SVG">
            SVG
          </PostLink>
          s . For videogames or complex drawings, with lots
          of animations, the canvas component is much more
          performant. For simpler drawings, I would rather
          go with SVGs, since then each visual component is
          also easily accessible externally, granting other
          developers many more possibilities about further
          styling, animations and functionalities. Both
          options offer scalability without pixelation
          though.
        </PostParagraph>
        <PostParagraph>
          Before developing the Goban Web package, for
          displaying Go diagrams, I was using my{" "}
          <PostLink href="https://github.com/psygo/tecnicas_de_go">
            LaTeX Goban
          </PostLink>{" "}
          package, which I developed to write my Go
          techniques book in Portuguese. With it, I would
          generate an SVG either through the command line or
          through opening the PDF with{" "}
          <PostLink href="https://inkscape.org/">
            Inkscape
          </PostLink>
          . Here&apos;s an example:
        </PostParagraph>
        <GoDiagram
          src="/articles/dowon-pairgo/dowon_pairgo_1.svg"
          diaNumber={1}
        >
          <p>
            A mistaken, unexpected cut (8), with surprising
            results afterwards. For more info, check out{" "}
            <PostLink internal href="/posts/dowon-pairgo">
              this article
            </PostLink>
            .
          </p>
        </GoDiagram>
        <PostParagraph>
          Comparatively, <PostCode>wgo.js</PostCode>
          &nbsp;has way more features and interactivity.
          Here&apos;s{" "}
          <PostLink href="https://kifudepot.net/kifucontents.php?id=NpTievFCGfFGHBj%2BVKpSLw%3D%3D">
            Game 4 of this year&apos;s Honinbo Title Match
          </PostLink>
          , between Fukuoka Kotaro 6p (Black) and Ichiriki
          Ryo 9p (White), one of the best games this year:
        </PostParagraph>
        <div className="px-4">
          <WgoPlayer sgf="/articles/goban-web/fukuoka_vs_ichiriki_honinbo_4.sgf" />
        </div>
        <PostParagraph>
          However, I&apos;m still not sure if{" "}
          <PostCode>wgo.js</PostCode>&nbsp;does cover all
          the necessary features for being a Go viewer. I
          haven&apos;t yet been able to find out how to deal
          with partial boards with it, for example.
          Here&apos;s an example of a partial board diagram:
        </PostParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_1.svg"
          width={200}
          height={200}
          diaNumber={1}
        >
          <p>
            This capturing race yields a different result if
            we take away the suicide rule. Check{" "}
            <PostLink href="/posts/ing-cup-suicide">
              this article
            </PostLink>{" "}
            for more.
          </p>
        </GoDiagram>
        <PostParagraph>
          With the Goban Web project, we can now cover all
          of the basic Go viewer features:
        </PostParagraph>
        <GoBoardPlayer sgf="/articles/goban-web/fukuoka_vs_ichiriki_honinbo_4.sgf" />
      </PostSection>
    </Post>
  )
}
