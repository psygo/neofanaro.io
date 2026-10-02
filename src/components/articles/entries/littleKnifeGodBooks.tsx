import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  NoWrap,
  ArticleImageWithLegend,
} from "../articleContent"
// import {
//   GoDiagram,
//   GoDiagramLegend,
// } from "@components/articles/goDiagram"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
} from "@components/goViewer/exports"

export function LittleKnifeGodBooks({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          This year, a dear friend of mine, Frédéric Vieira
          4d EGF, introduced me to a little-known &mdash; in
          the West &mdash; Taiwanese Go books author,{" "}
          <ArticleLink href="https://www.facebook.com/profile.php?id=100063804315640">
            <NoWrap>小刀神</NoWrap> or Little Knife God
          </ArticleLink>
          , who&apos;s very active on Facebook.
        </ArticleParagraph>
        <ArticleParagraph>
          Most of his books are based on key moments in
          professional games, which makes it very likely
          even readers of the highest ranks will be able to
          enjoy them.
        </ArticleParagraph>
        <ArticleParagraph>
          Despite not knowing any Chinese, I find it quite
          ok to follow the diagrams, as what the author
          would like to convey feels more or less
          self-evident.
        </ArticleParagraph>
        <ArticleParagraph>
          So far, I only own his sabaki book. Here&apos;s an
          example from a professional game between{" "}
          <ArticleLink href="https://kifudepot.net/kifucontents.php?id=s%2FfzvBdQObbE93Xj6SuZYg%3D%3D">
            Kato Chie 3p (White) and Yoshihiro Koike 7p
            (Black)
          </ArticleLink>
          , where should Black play?
        </ArticleParagraph>
        {/* <GoDiagram src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike.svg">
          <GoDiagramLegend>
            Kato Chie 3p (White) vs Yoshihiro Koike 7p
            (Black). Black to play.
          </GoDiagramLegend>
        </GoDiagram> */}
        <GoViewer
          sgf="/articles/little-knife-god-books/1.sgf"
          startAt="end"
        >
          <GoViewerBoard interactive={false} />
          <GoViewerLegend>
            Kato Chie 3p (White) vs Yoshihiro Koike 7p
            (Black). Black to play.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Going for a keima is lukewarm, White&apos;s shape
          will get fixed on the outside, and the cut at 4
          will likely be triggered:
        </ArticleParagraph>
        {/* <GoDiagram src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p1.svg">
          <GoDiagramLegend>
            Lukewarm. And White gets to exploit a cut.
          </GoDiagramLegend>
        </GoDiagram> */}
        <GoViewer
          sgf="/articles/little-knife-god-books/2.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={false}
            showMoveNumbers
          />
          <GoViewerControls />
          <GoViewerLegend>
            Lukewarm. And White gets to exploit a cut.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          As a hint, the correct move is very similar to the
          solution to{" "}
          <ArticleLink href="https://www.101weiqi.com/q/128242/">
            this problem on 101weiqi (Q-128242)
          </ArticleLink>
          :
        </ArticleParagraph>
        {/* <GoDiagram
          src="/articles/little-knife-god-books/101_weiqi_p1.svg"
          height={285}
          width={240}
        >
          <GoDiagramLegend>
            Problem 128,242 from 101weiqi.
          </GoDiagramLegend>
        </GoDiagram> */}
        <GoViewer
          sgf="/articles/little-knife-god-books/3.sgf"
          startAt="end"
        >
          <GoViewerBoard
            region={{
              minRow: 0,
              maxRow: 9,
              minCol: 10,
              maxCol: 18,
            }}
            size={330}
            interactive={false}
          />
          <GoViewerLegend>
            Problem 128,242 from 101weiqi.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          Here&apos;s that problem&apos;s solution:
        </ArticleParagraph>
        {/* <GoDiagram
          src="/articles/little-knife-god-books/101_weiqi_p3.svg"
          height={285}
          width={240}
        >
          <GoDiagramLegend>
            Black&apos;s marked stones have more liberties
            than it seems. And, with 1, we can contain White
            while shortening the group&apos;s liberties.
          </GoDiagramLegend>
        </GoDiagram> */}
        <GoViewer
          sgf="/articles/little-knife-god-books/4.sgf"
          startAt="end"
        >
          <GoViewerBoard
            region={{
              minRow: 0,
              maxRow: 9,
              minCol: 10,
              maxCol: 18,
            }}
            size={330}
            interactive={false}
            showMoveNumbers
          />
          <GoViewerLegend>
            Black&apos;s marked stones have more liberties
            than it seems. And, with 1, we can contain White
            while shortening the group&apos;s liberties.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          The correct move in the game was to apply pressure
          based on Black&apos;s cutting stone in the center.
          By doing so, we can create many cutting points on
          White&apos;s shape:
        </ArticleParagraph>
        {/* <GoDiagram src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p2.svg">
          <GoDiagramLegend>
            Applying pressure and creating cutting points on
            White&apos;s shape.
          </GoDiagramLegend>
        </GoDiagram> */}
        <GoViewer
          sgf="/articles/little-knife-god-books/5.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={false}
            showMoveNumbers
          />
          <GoViewerControls />
          <GoViewerLegend>
            Applying pressure and creating cutting points on
            White&apos;s shape.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          If White goes for a capturing race, Black is the
          one ahead actually.
        </ArticleParagraph>
        {/* <GoDiagram src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p3.svg">
          <GoDiagramLegend>
            Black wins most semeais.
          </GoDiagramLegend>
        </GoDiagram> */}
        <GoViewer
          sgf="/articles/little-knife-god-books/6.sgf"
          startAt="end"
        >
          <GoViewerBoard
            interactive={false}
            showMoveNumbers
          />
          <GoViewerControls />
          <GoViewerLegend>
            Black wins most semeais.
          </GoViewerLegend>
        </GoViewer>
        <ArticleParagraph>
          The book shows plenty more diagrams, but I&apos;ll
          leave a link to{" "}
          <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/Umm4U2uTsfxEkcRboCle">
            that game&apos;s AI Sensei&apos;s analysis{" "}
          </ArticleLink>{" "}
          on its Dan plan, with 2,500 playouts, if you would
          like to check everything in detail.
        </ArticleParagraph>
        <ArticleParagraph>
          Little Knife God&apos;s books are mostly available
          on Taobao, but I suggest contacting him through
          Facebook for more details, since he seems friendly
          and active on social media.
        </ArticleParagraph>
        <ArticleParagraph>
          He also seems to have an amusing taste for
          creating covers with AI. Personally, I find those
          quite funny and playful, especially for children,
          which are one of his main targets, since most of
          his in-person students seem to be of that age.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/little-knife-god-books/little_knife_god_cover_1.png"
          height={225}
          width={225}
          className="rounded-sm"
          alt="Cover 1"
        >
          <p></p>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/little-knife-god-books/little_knife_god_cover_2.png"
          height={225}
          width={225}
          className="rounded-sm"
          alt="Cover 2"
        >
          <p></p>
        </ArticleImageWithLegend>
      </ArticleSection>
    </Article>
  )
}
