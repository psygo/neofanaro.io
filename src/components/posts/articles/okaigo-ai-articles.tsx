import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostImageWithLegend,
  PostBlockQuote,
  PostSectionTitle,
  PostUnorderedList,
} from "@components/posts/post"
import { GoDiagram } from "../goDiagram"

export function OkaigoAiArticles({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Last year, thanks again to my friend, Frédéric
          Vieira 4d EGF &mdash; see{" "}
          <PostLink
            internal
            href="https://neofanaroio.vercel.app/posts/little-knife-god-go-books"
          >
            this post about Little Knife God&apos;s Go Books
          </PostLink>
          , I got to know an excellent Go online resource,
          especially for higher dan players:{" "}
          <PostLink href="https://note.com/okaoigo">
            okaigo
          </PostLink>
          . Its creator frequently posts on{" "}
          <PostLink href="https://note.com/okaoigo">
            note.com
          </PostLink>
          , which is a Japanese blogging platform, similar
          to Medium or Substack.{" "}
          <PostLink href="https://www.youtube.com/@okao941">
            Okaigo is also present on YouTube
          </PostLink>
          , currently with frequent live streams.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/okaigo-ai-articles/okaigo_on_note.png"
          legend="Okaigo's Articles on note.com"
          className="mx-7 mb-0 h-full w-115 rounded-xl"
        />
        <PostParagraph>
          To me, the biggest differentiator for this creator
          is his series about AI brilliances. He seems to
          collect most, if not all, of them from
          FineArt&apos;s &mdash; 绝艺 (jué yì) in Chinese or
          絶芸 (zetsu gei) in Japanese &mdash; games on the
          Fox server, played either against pros or
          extremely strong amateurs. Those games are a
          treasure trove of incredible technique.
        </PostParagraph>

        <PostBlockQuote>
          FineArt&apos;s games on Fox are public, by the
          way, you can easily access them through its
          profile.
        </PostBlockQuote>
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          Masterful Technique #079
        </PostSectionTitle>
        <PostParagraph>
          Here&apos;s a first example of a majestic sequence
          from AI, from his{" "}
          <PostLink href="https://note.com/okaoigo/n/n1a6d658919d2">
            Masterful Technique #079
          </PostLink>{" "}
          post:
        </PostParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_1.1.svg"
          size={100}
          diaNumber={1}
          legend="How would should you deal with Black's cut?"
        />
        <PostBlockQuote>
          You can use Google Translate, or any other
          translator tool, to have access to the original,
          Japanese text.
        </PostBlockQuote>
        <PostParagraph>
          FineArt refutes the cut with a beautiful driving
          technique. If Black A, White B threatens the left
          Black group&apos;s capture while also being an
          atari on the original cutting stone:
        </PostParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_1.2.svg"
          size={100}
          diaNumber={2}
          legend="This requires reading, but it's mostly technique at its core."
        />
        <PostParagraph>
          Black will need to then accept terrible shape and
          overconcentration in the bottom-left corner, while
          White reaps all the benefits on the outside:
        </PostParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_1.3.svg"
          size={100}
          diaNumber={3}
          legend="White even gets to capture the original cutting stone, A."
        />
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          Masterful Technique #081
        </PostSectionTitle>
        <PostParagraph>
          And here&apos;s another exquisite example of
          AI&apos;s next level skills:
        </PostParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_3.1.svg"
          size={100}
          diaNumber={4}
          legend="How can White survive or escape?"
        />
        <PostParagraph>
          Black doesn&apos;t the best shape, but, still, it
          looks difficult to get out. What can White do?
        </PostParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_3.2.svg"
          size={100}
          diaNumber={5}
          legend="Through a sacrifice and a tesuji, White exposes Black's shortage of liberties on the left, and the cutting point at C, all at the same time."
        />
        <PostParagraph>
          If Black plays at A, White B is sente for
          rescueing White&apos;s 3 stone. If Black then
          fixes, the C cut gets activated.
        </PostParagraph>
        <PostParagraph>
          What if Black blocks from D instead? Check it out
          in the{" "}
          <PostLink href="https://note.com/okaoigo/n/nef7a8a915dd0">
            original article
          </PostLink>
          !
        </PostParagraph>
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          Other Highlights
        </PostSectionTitle>
        <PostParagraph>
          Here&apos;s a selection of a few other great posts
          from that same series:
        </PostParagraph>
        <PostUnorderedList>
          <li>
            <PostLink href="https://note.com/okaoigo/n/n1a6d658919d2">
              Masterful Technique #079
            </PostLink>
          </li>
          <li>
            <PostLink href="https://note.com/okaoigo/n/nde4bc1bc0982">
              Masterful Technique #080
            </PostLink>
          </li>
          <li>
            <PostLink href="https://note.com/okaoigo/n/nef7a8a915dd0">
              Masterful Technique #081
            </PostLink>
          </li>
          <li>
            <PostLink href="https://note.com/okaoigo/n/n7257c9712a5d">
              Masterful Technique #086
            </PostLink>
          </li>
          <li>
            <PostLink href="https://note.com/okaoigo/n/nead89a818772">
              Masterful Technique #088
            </PostLink>
          </li>
          <li>
            <PostLink href="https://note.com/okaoigo/n/nb8e0ab25da71">
              Masterful Technique #092
            </PostLink>
          </li>
          <li>
            <PostLink href="https://note.com/okaoigo/n/nae94774f7863">
              Masterful Technique #117
            </PostLink>
          </li>
          <li>
            <PostLink href="https://note.com/okaoigo/n/n42a984a05daf">
              Masterful Technique #119
            </PostLink>
          </li>
        </PostUnorderedList>
      </PostSection>
    </Post>
  )
}
