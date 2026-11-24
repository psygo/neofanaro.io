import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleBlockQuote,
  ArticleSectionTitle,
  ArticleImageWithLegend,
  NoWrap,
  ImageLegend,
  ArticleYouTubeIframe,
  ArticleInstagramIframe,
} from "../articleContent"
// import { GoDiagram, GoDiagramLegend } from "../goDiagram"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
  GoViewerPlayers,
} from "@components/goViewer/exports"

export function ChristmasTsumegos2026({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          It&apos;s that time of the year again already!
          Here we go with an extra Christmas problem!
        </ArticleParagraph>
        <ArticleParagraph>
          I say extra because, about 2 years ago, before I
          went on a more-than-a-year journey in Asia, I
          published a video on some Christmas problems I had
          found:
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/Y_VZTutB7Yc"
          title="Go with Fanaro - Christmas Tsumegos"
        />
        <ArticleParagraph>
          The tsumegos in that video, as I found out a
          little bit before creating the content,{" "}
          <ArticleLink href="https://senseis.xmp.net/?HermanHiddema%2FChristmasProblems">
            had been created by the Dutch player Herman
            Hiddema 4d EGF
          </ArticleLink>
          , at least as far back as 2010. There was a
          problem with one of the tsumegos and I fixed it
          while working on the video, which Herman Hiddema
          himself acknowledged on the respective{" "}
          <ArticleLink href="https://www.reddit.com/r/baduk/s/h8aoahDGYu">
            Reddit post
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          Fast-forward to 2026, and now I have an extra
          &quot;tree&quot; problem to share, one I
          accidentally found while skimming through a
          pro-level tsumego book at Flower Baduk, a Go
          school for adults in the middle of Seoul, where I
          spent most of my time in Korea during 2025 with{" "}
          <ArticleLink href="https://www.bibabaduk.online/">
            BIBA
          </ArticleLink>{" "}
          &mdash; check out my{" "}
          <ArticleLink
            internal
            href="/articles/dowon-pairgo"
          >
            Moon Dowon 3p
          </ArticleLink>{" "}
          and{" "}
          <ArticleLink
            internal
            href="/articles/one-year-in-asia"
          >
            One Year in Asia Studying Go
          </ArticleLink>{" "}
          articles.
        </ArticleParagraph>
        {/* <ArticleImageWithLegend
          src="/articles/christmas-tsumegos-2026/pro_tsumego_book.webp"
          width={500}
        >
          <ImageLegend>
            The pro-level tsumego book, created by the
            Korean Ministry of Culture, Sports and Tourism,
            and KSPO (Korean Sports Promotion Organization).
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/christmas-tsumegos-2026/christmas_tsumego_2026.webp"
          width={500}
        >
          <ImageLegend>
            The 2026 Christmas Problem, in the bottom-left
            of page 12.
          </ImageLegend>
        </ArticleImageWithLegend> */}
        <ArticleInstagramIframe
          src="https://www.instagram.com/p/DYYUIFMDwIV/?img_index=1"
          title="fanaro009 - Christmas Tsumego 2026 Instagram post"
        >
          <ImageLegend>
            The pro-level tsumego book, created by the
            Korean Ministry of Culture, Sports and Tourism,
            and KSPO (Korean Sports Promotion Organization).
            The 2026 Christmas Problem, in the bottom-left
            of page 12.
          </ImageLegend>
        </ArticleInstagramIframe>
        <ArticleParagraph>
          Unfortunately, I couldn&apos;t scan the whole
          book, because Moon Dowon 3p gifted it away to
          another pro a little bit before I had the idea of
          doing so.
        </ArticleParagraph>
        <GoViewer sgf="/articles/christmas-tsumegos-2026/christmas_tsumego_2026.sgf">
          <GoViewerBoard
            width={400}
            startAt="end"
            interactive={false}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 9,
              maxCol: 18,
            }}
          />
          <GoViewerLegend>
            The 2026 Christmas Tsumego, Black to play.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          But, anyways, all the problems in that book are
          more difficult than any of us will likely ever
          solve. The one that&apos;s the today&apos;s topic
          is classed as a 5 dan tsumego on 101weiqi (
          <ArticleLink href="https://www.101weiqi.com/q/159738/">
            Q-159,738
          </ArticleLink>
          ), apparently created by Tomoyuki Onishi &mdash;
          the statistics would actually class it as 6 dan at
          least.
        </ArticleParagraph>
        <GoViewer sgf="/articles/christmas-tsumegos-2026/christmas_tsumego_2026_solution.sgf">
          <GoViewerBoard
            width={400}
            startAt="end"
            interactive={false}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 9,
              maxCol: 18,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            The solution to this year&apos;s Christmas
            problem.
          </GoViewerLegend>
        </GoViewer>
      </ArticleSection>
    </Article>
  )
}
