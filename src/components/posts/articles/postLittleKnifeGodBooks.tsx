import Image from "next/image"

import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
} from "@components/posts/post"
import { GoDiagram } from "@components/posts/goDiagram"

export function PostLittleKnifeGodBooks({
  post,
}: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          This year, a dear friend of mine, Frédéric Vieira
          4d EGF, introduced me to a little-known &mdash; in
          the West &mdash; Taiwanese Go books author,{" "}
          <PostLink href="https://www.facebook.com/profile.php?id=100063804315640">
            小刀神 or Little Knife God
          </PostLink>
          , who&apos;s very active on Facebook.
        </PostParagraph>
        <PostParagraph>
          Most of his books are based on key moments in
          professional games, which makes it very likely
          even readers of the highest ranks will be able to
          enjoy them.
        </PostParagraph>
        <PostParagraph>
          Despite not knowing any Chinese, I find it quite
          ok to follow the diagrams, as what the author
          would like to convey feels more or less
          self-evident.
        </PostParagraph>
        <PostParagraph>
          So far, I only own his sabaki book. Here&apos;s an
          example from a professional game between{" "}
          <PostLink href="https://kifudepot.net/kifucontents.php?id=s%2FfzvBdQObbE93Xj6SuZYg%3D%3D">
            Kato Chie 3p (White) and Yoshihiro Koike 7p
            (Black)
          </PostLink>
          , where should Black play?
        </PostParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike.svg"
          size={100}
          diaNumber={1}
          legend="Kato Chie 3p (White) vs Yoshihiro Koike 7p (Black). Black to play."
        />
        <PostParagraph>
          Going for a keima is lukewarm, White&apos;s shape
          will get fixed on the outside, and the cut at 4
          will likely be triggered:
        </PostParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p1.svg"
          size={100}
          diaNumber={2}
          legend="Lukewarm. And White gets to exploit a cut."
        />
        <PostParagraph>
          As a hint, the correct move is very similar to the
          solution to{" "}
          <PostLink href="https://www.101weiqi.com/q/128242/">
            this problem on 101weiqi (Q-128242)
          </PostLink>
          :
        </PostParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/101_weiqi_p1.svg"
          size={50}
          diaNumber={3}
          legend="Problem 128242 from 101weiqi."
        />
        <PostParagraph>
          Here&apos;s that problem&apos;s solution:
        </PostParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/101_weiqi_p3.svg"
          size={50}
          diaNumber={4}
          legend="Black's marked stones have more liberties than it seems. And, with 1, we can contain White while shortening the group's liberties."
        />
        <PostParagraph>
          The correct move in the game was to apply pressure
          based on Black&apos;s cutting stone in the center.
          By doing so, we can create cutting many cutting
          points on White&apos;s shape:
        </PostParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p2.svg"
          size={100}
          diaNumber={5}
          legend="Applying pressure and creating cutting points on White's shape."
        />
        <PostParagraph>
          If White goes for a capturing race, Black is the
          one ahead actually.
        </PostParagraph>
        <GoDiagram
          src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p3.svg"
          size={100}
          diaNumber={6}
          legend="Black wins most semeais."
        />
        <PostParagraph>
          The book shows plenty more diagrams, but I&apos;ll
          leave a link to{" "}
          <PostLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/Umm4U2uTsfxEkcRboCle">
            that game&apos;s AI Sensei&apos;s analysis{" "}
          </PostLink>{" "}
          on its Dan plan, with 2,500 playouts, if you would
          like to check everything in detail.
        </PostParagraph>
        <PostParagraph>
          Little Knife God&apos;s books are mostly available
          on Taobao, but I suggest contacting him through
          Facebook for more details, since he seems friendly
          and active on social media.
        </PostParagraph>
        <PostParagraph>
          He also seems to have an amusing taste for
          creating covers with AI. Personally, I find those
          quite funny and playful, especially for children,
          which are one of his main targets, since most of
          his in-person students seem to be of that age.
        </PostParagraph>
        <Image
          src="/articles/little-knife-god-books/little_knife_god_cover_1.png"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-full w-50"
          alt="Cover 1"
        />
        <Image
          src="/articles/little-knife-god-books/little_knife_god_cover_2.png"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-full w-50"
          alt="Cover 1"
        />
      </PostSection>
    </Post>
  )
}
