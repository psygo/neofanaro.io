"use client"

import dynamic from "next/dynamic"

import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleSectionTitle,
  ArticleBlockQuote,
  ArticleCode,
  ArticlePre,
} from "@components/articles/article"
import { WgoPlayer } from "@components/articles/wgoPlayer"
import { GoDiagram } from "../goDiagram"

const GoBoardPlayer = dynamic(
  () =>
    import("@components/articles/goBoardPlayer").then(
      (m) => m.GoBoardPlayer,
    ),
  { ssr: false },
)

export function GobanWeb({ post }: ArticleProps) {
  return (
    <Article data={post}>
      <ArticleSection>
        <ArticleBlockQuote>
          If you would like to directly skip to the code,
          here&apos;s the project on Github:{" "}
          <ArticleLink href="https://github.com/psygo/goban_web">
            @psygo/goban_web
          </ArticleLink>
          .
        </ArticleBlockQuote>
        <ArticleParagraph>
          Up till now, still, the most used web viewer for
          the game of Go is{" "}
          <ArticleLink href="https://github.com/waltheri/wgo.js">
            <ArticleCode>wgo.js</ArticleCode>
          </ArticleLink>
          , a project created by Jan Prokop 6d EGF, spanning
          more or less 2013 to 2016 for its development
          &mdash; Jan Prokop is also behind the amazing{" "}
          <ArticleLink href="https://ps.waltheri.net/">
            Waltheri Pattern Search
          </ArticleLink>{" "}
          project. That project was so successful even Asian
          websites, such as{" "}
          <ArticleLink href="https://kifudepot.net/">
            Kifu Depot
          </ArticleLink>
          , the biggest database for kifus, use it.
        </ArticleParagraph>
        <ArticleParagraph>
          Even considering that{" "}
          <ArticleCode>wgo.js</ArticleCode> is an
          outstanding project, it is still sad no
          alternatives have popped up, and, even worse, it
          hasn&apos;t had any updates in at least 5 years.
        </ArticleParagraph>
        <ArticleParagraph>
          The only real alternatives to it I can think of
          are{" "}
          <ArticleLink href="https://sabaki.yichuanshen.de/">
            Sabaki
          </ArticleLink>
          , and{" "}
          <ArticleLink href="https://gomagic.org/">
            Go Magic
          </ArticleLink>
          &apos; viewer &mdash; which you can have
          exemplified at the end of this{" "}
          <ArticleLink href="https://gomagic.org/secrets-of-the-master-of-go-kawabata-shusai-kitani/">
            article
          </ArticleLink>
          . But Sabaki was not intentionally built for this,
          and the original maintainer or creator hasn&apos;t
          been working with the project for a long while at
          this point. And the Go Magic team doesn&apos;t
          seem interested in sharing their viewer, not even
          through licensing.
        </ArticleParagraph>
        <ArticleBlockQuote>
          If nothing else, this article and the Goban Web
          project are good reference points for future
          projects.
        </ArticleBlockQuote>
        <ArticleParagraph>
          Thankfully, things might change from now. And
          that&apos;s not necessarily due to the project
          I&apos;m gonna share down below, but due to AI.
        </ArticleParagraph>
        <ArticleParagraph>
          Programming a visual component for the game of Go
          isn&apos;t the most complex of projects, but
          it&apos;s still a ton of work, just take a look at
          all the code around{" "}
          <ArticleLink href="https://github.com/SabakiHQ">
            Sabaki&apos;s ecosystem on Github
          </ArticleLink>{" "}
          . And what&apos;s worse is that nobody should be
          expecting any substantial reward for that effort.
          Given all those constraints, I think AI can be a
          game changer here, and even all the AI haters will
          have to accept things as they are.
        </ArticleParagraph>
        <ArticleParagraph>
          Through{" "}
          <ArticleLink href="https://claude.com/product/claude-code">
            Claude Code
          </ArticleLink>{" "}
          more specifically, I was able to create a new
          viewer in a matter of a few days, with a few dozen
          customizable parameters even. At the very least,
          this speed is an amazing tool for experimentation.
          And, given that I do have professional experience
          with Web Components, I can safely say the code is
          of pretty good quality as well.
        </ArticleParagraph>
        <ArticleParagraph>
          Anyhow, I hope this project opens up new
          possibilities for Go projects in the near future.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionTitle>
          The Goban Web Project
        </ArticleSectionTitle>
        <ArticleParagraph>
          In order to have this viewer as portable as
          possible, I&apos;ve chosen it to be written as a{" "}
          <ArticleLink href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components">
            Web Component
          </ArticleLink>
          , with no dependencies involved, not even the{" "}
          <ArticleLink href="https://lit.dev/">
            Lit Framework
          </ArticleLink>
          . Web Components are supported by all browsers,
          and pretty much all web frameworks also offer
          ports for them, since they should be recognized as
          just another HTML tag in the end anyways. And many
          non-web frameworks also offer ports for Web
          Components.
        </ArticleParagraph>
        <ArticleParagraph>
          There are mainly two options for drawing on the
          web: the{" "}
          <ArticleLink href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API">
            <ArticleCode>&lt;canvas&gt;</ArticleCode>
          </ArticleLink>{" "}
          and{" "}
          <ArticleLink href="https://developer.mozilla.org/en-US/docs/Web/SVG">
            SVG
          </ArticleLink>
          s . For videogames or complex drawings, with lots
          of animations, the canvas component is much more
          performant. For simpler drawings, I would rather
          go with SVGs, since then each visual component is
          also easily accessible externally, granting other
          developers many more possibilities about further
          styling, animations and functionalities. Both
          options offer scalability without pixelation
          though.
        </ArticleParagraph>
        <ArticleParagraph>
          Before developing the Goban Web package, for
          displaying Go diagrams, I was using my{" "}
          <ArticleLink href="https://github.com/psygo/tecnicas_de_go">
            LaTeX Goban
          </ArticleLink>{" "}
          package, which I developed to write my Go
          techniques book in Portuguese. With it, I would
          generate an SVG either through the command line or
          through opening the PDF with{" "}
          <ArticleLink href="https://inkscape.org/">
            Inkscape
          </ArticleLink>
          . Here&apos;s an example:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/dowon-pairgo/dowon_pairgo_1.svg"
          diaNumber={1}
        >
          <ArticleParagraph>
            A mistaken, unexpected cut (8), with surprising
            results afterwards. For more info, check out{" "}
            <ArticleLink
              internal
              href="/articles/dowon-pairgo"
            >
              this article
            </ArticleLink>
            .
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Comparatively, <ArticleCode>wgo.js</ArticleCode>
          &nbsp;has way more features and interactivity.
          Here&apos;s{" "}
          <ArticleLink href="https://kifudepot.net/kifucontents.php?id=NpTievFCGfFGHBj%2BVKpSLw%3D%3D">
            Game 4 of this year&apos;s Honinbo Title Match
          </ArticleLink>
          , between Fukuoka Kotaro 6p (Black) and Ichiriki
          Ryo 9p (White), one of the best games this year:
        </ArticleParagraph>
        <div className="px-4">
          <WgoPlayer sgf="/articles/goban-web/fukuoka_vs_ichiriki_honinbo_4.sgf" />
        </div>
        <ArticleParagraph>
          However, I&apos;m still not sure if{" "}
          <ArticleCode>wgo.js</ArticleCode>&nbsp;does cover
          all the necessary features for being a Go viewer.
          I haven&apos;t yet been able to find out how to
          deal with partial boards with it, for example.
          Here&apos;s an example of a partial board diagram:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/ing-cup-suicide/ing_cup_rules_1.svg"
          width={200}
          height={200}
          diaNumber={1}
        >
          <ArticleParagraph>
            This capturing race yields a different result if
            we take away the suicide rule. Check{" "}
            <ArticleLink href="/articles/ing-cup-suicide">
              this article
            </ArticleLink>{" "}
            for more.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          With the Goban Web project, we can now cover all
          of the basic Go viewer features:
        </ArticleParagraph>
        <GoBoardPlayer sgf="/articles/goban-web/fukuoka_vs_ichiriki_honinbo_4.sgf" />
        <ArticleParagraph>
          With code as simple as this, we&apos;re able to
          use the Goban Web project:
        </ArticleParagraph>
        <ArticlePre language="html">
          {gobanWebHtmlCode}
        </ArticlePre>
        <ArticleParagraph>
          You may use{" "}
          <ArticleLink href="https://github.com/psygo/neofanaro.io/blob/main/src/components/articles/goBoardPlayer.tsx">
            this website&apos;s code
          </ArticleLink>{" "}
          as reference, but here is an example of using the
          React version of Goban Web:
        </ArticleParagraph>
        <ArticlePre language="jsx">
          {gobanWebReactCode}
        </ArticlePre>
      </ArticleSection>
    </Article>
  )
}

const gobanWebHtmlCode = String.raw`
<go-board-container>
  <go-metadata-container details="false"></go-metadata-container>
  <go-board
    theme="wgojs"
    sgf="/assets/ing_cup_rules_2.sgf"
    width="480"
    height="480"
    coordinates="none"
    coordinates-gap="15px"
    coordinates-font-size="10pt"
    padding="16px"
    corner-radius="8px"
    label-offset-y="-1.25"
    label-font="'Latin Modern Roman', serif"
    stone-size="1.0"
  ></go-board>
  <go-board-controls counter="false"></go-board-controls>
</go-board-container>
`

const gobanWebReactCode = String.raw`
<GoBoardContainer>
  <GoMetadataContainer />
  <GoBoard
    sgf={sgf}
    width={width}
    height={height}
    interactive={interactive}
  />
  <GoBoardControls />
</GoBoardContainer>
`
