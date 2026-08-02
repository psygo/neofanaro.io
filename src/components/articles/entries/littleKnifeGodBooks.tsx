import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  NoWrap,
  ArticleImageWithLegend,
} from "@components/articles/article"
import { GoDiagram } from "@components/articles/goDiagram"

export function LittleKnifeGodBooks({
  article: post,
}: ArticleProps) {
  return (
    <Article article={post}>
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
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike.svg"
          diaNumber={1}
        >
          <ArticleParagraph>
            Kato Chie 3p (White) vs Yoshihiro Koike 7p
            (Black). Black to play.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Going for a keima is lukewarm, White&apos;s shape
          will get fixed on the outside, and the cut at 4
          will likely be triggered:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p1.svg"
          diaNumber={2}
        >
          <ArticleParagraph>
            Lukewarm. And White gets to exploit a cut.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          As a hint, the correct move is very similar to the
          solution to{" "}
          <ArticleLink href="https://www.101weiqi.com/q/128242/">
            this problem on 101weiqi (Q-128242)
          </ArticleLink>
          :
        </ArticleParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/101_weiqi_p1.svg"
          height={240}
          width={240}
          diaNumber={3}
        >
          <ArticleParagraph>
            Problem 128242 from 101weiqi.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Here&apos;s that problem&apos;s solution:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/101_weiqi_p3.svg"
          height={240}
          width={240}
          diaNumber={4}
        >
          <ArticleParagraph>
            Black&apos;s marked stones have more liberties
            than it seems. And, with 1, we can contain White
            while shortening the group&apos;s liberties.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          The correct move in the game was to apply pressure
          based on Black&apos;s cutting stone in the center.
          By doing so, we can create cutting many cutting
          points on White&apos;s shape:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p2.svg"
          diaNumber={5}
        >
          <ArticleParagraph>
            Applying pressure and creating cutting points on
            White&apos;s shape.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          If White goes for a capturing race, Black is the
          one ahead actually.
        </ArticleParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p3.svg"
          diaNumber={6}
        >
          <ArticleParagraph>
            Black wins most semeais.
          </ArticleParagraph>
        </GoDiagram>
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
