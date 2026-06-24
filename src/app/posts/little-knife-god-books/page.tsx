import Image from "next/image"

import { Main } from "@components/common/main"
import {
  PostParagraph,
  Post,
  PostDate,
  PostSection,
  PostTitle,
  PostTitleSection,
  PostTags,
  PostLink,
} from "@components/posts/post"
import { postCardDb } from "@components/posts/postsDb"
import { GoDiagram } from "@components/posts/goDiagram"

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
          <PostParagraph>
            This year, a dear friend of mine, Frédéric
            Vieira 4d EGF, introduced me to a little-known
            &mdash; in the West &mdash; Taiwanese Go books
            author,{" "}
            <PostLink href="https://www.facebook.com/profile.php?id=100063804315640">
              小刀神 or Little Knife God
            </PostLink>
            , who&apos;s very active on Facebook.
          </PostParagraph>
          <PostParagraph>
            Most of his books are based on key moments in
            professional games, which makes it very likely
            even readers of the highest ranks will be able
            to enjoy them.
          </PostParagraph>
          <PostParagraph>
            Despite not knowing any Chinese, I find it quite
            ok to follow the diagrams, as what the author
            would like to convey feels more or less
            self-evident.
          </PostParagraph>
          <PostParagraph>
            So far, I only own his sabaki book. Here&apos;s
            an example from a professional game between Kato
            Chie 3p (White) and Yoshihiro Koike 7p (Black),
            where should Black play?
          </PostParagraph>
          <GoDiagram
            src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike.svg"
            alt="Kato Chie 3p (White) vs Yoshihiro Koike 7p"
            size={100}
            diaNumber={1}
            legend="Kato Chie 3p (White) vs Yoshihiro Koike 7p (Black). Black to play."
          />
          <PostParagraph>
            Going for a keima is lukewarm, White&apos;s
            shape will get fixed on the outside, and the cut
            at 4 will likely be triggered:
          </PostParagraph>
          <GoDiagram
            src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p1.svg"
            alt="Lukewarm"
            size={100}
            diaNumber={2}
            legend="Lukewarm. And White gets to exploit a cut."
          />
          <PostParagraph>
            The correct move is to apply pressure based on
            Black&apos;s cutting stone in the center. By
            doing so, we can create cutting many cutting
            points on White&apos;s shape:
          </PostParagraph>
          <GoDiagram
            src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p2.svg"
            alt="Applying pressure and creating cutting points on White's shape."
            size={100}
            diaNumber={2}
            legend="Applying pressure and creating cutting points on White's shape."
          />
          <PostParagraph>
            If White goes for a capturing race, Black is the
            one ahead actually.
          </PostParagraph>
          <GoDiagram
            src="/articles/little-knife-god-books/kato_chie_vs_yoshihiro_koike_p3.svg"
            alt="Black wins most fights."
            size={100}
            diaNumber={2}
            legend="Black wins most semeais."
          />
          <PostParagraph>
            The book shows plenty more diagrams, but
            I&apos;ll leave a link to{" "}
            <PostLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/Umm4U2uTsfxEkcRboCle">
              that game&apos;s AI Sensei&apos;s
              analysis{" "}
            </PostLink>{" "}
            on its Dan plan, with 2,500 playouts, if you
            would like to check everything in detail.
          </PostParagraph>
          <PostParagraph>
            Little Knife God&apos;s books are mostly
            available on Taobao, but I suggest contacting
            him through Facebook for more details, since he
            seems friendly and active on social media.
          </PostParagraph>
          <PostParagraph>
            He also seems to have an amusing taste for
            creating covers with AI. Personally, I find
            those quite funny and playful, especially for
            children, which are one of his main targets,
            since most of his in-person students seem to be
            of that age.
          </PostParagraph>
          <Image
            src="/articles/little-knife-god-books/little_knife_god_cover_1.png"
            width={200}
            height={200}
            className="mx-auto"
            alt="Cover 1"
          />
          <Image
            src="/articles/little-knife-god-books/little_knife_god_cover_2.png"
            width={200}
            height={200}
            className="mx-auto"
            alt="Cover 1"
          />
        </PostSection>
      </Post>
    </Main>
  )
}
