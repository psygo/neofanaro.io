import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleBlockQuote,
  ArticleSectionTitle,
  ArticleUnorderedList,
  ArticleImageWithLegend,
  NoWrap,
} from "../articleContent"
import { GoDiagram } from "../goDiagram"

export function OkaoigoAiArticles({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Last year, thanks again to my friend, Frédéric
          Vieira 4d EGF &mdash; see{" "}
          <ArticleLink
            internal
            href="https://neofanaroio.vercel.app/articles/little-knife-god-go-books"
          >
            this post about Little Knife God&apos;s Go Books
          </ArticleLink>{" "}
          &mdash;, I got to know another excellent Go online
          resource, especially for higher dan players:{" "}
          <ArticleLink href="https://note.com/okaoigo">
            okaoigo
          </ArticleLink>
          . Its creator frequently posts on{" "}
          <ArticleLink href="https://note.com/okaoigo">
            note.com
          </ArticleLink>
          , which is a Japanese blogging platform, similar
          to Medium or Substack &mdash;{" "}
          <ArticleLink href="https://www.youtube.com/@okao941">
            okaoigo is also present on YouTube
          </ArticleLink>
          , currently with frequent live streams.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/okaigo-ai-articles/okaigo_on_note.png"
          height={425}
          width={425}
          className="rounded-xl"
        >
          <ArticleParagraph>
            okaoigo&apos;s Articles on note.com
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          To me, this teacher&apos;s biggest differentiator
          is his series on AI brilliances. He seems to
          collect most of them, if not all, from{" "}
          <ArticleLink href="https://senseis.xmp.net/?FineArt">
            FineArt
          </ArticleLink>
          &apos;s &mdash; <NoWrap>绝艺</NoWrap> (jué yì) in
          Chinese or <NoWrap>絶芸</NoWrap> (zetsu gei) in
          Japanese &mdash; games on the Fox server, played
          either against pros or extremely strong amateurs.
          Those games are a treasure trove of incredible
          technique.
        </ArticleParagraph>

        <ArticleBlockQuote>
          <ArticleParagraph>
            FineArt&apos;s games on Fox are public, by the
            way, you can easily access them through its
            profile.
          </ArticleParagraph>
        </ArticleBlockQuote>

        <ArticleParagraph>
          Let&apos;s take a look at some examples of
          AI&apos;s superhuman abilities.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Masterful Technique #079
        </ArticleSectionTitle>
        <ArticleParagraph>
          Here&apos;s a first problem with a majestic
          sequence from AI, from his{" "}
          <ArticleLink href="https://note.com/okaoigo/n/n1a6d658919d2">
            Masterful Technique #079
          </ArticleLink>{" "}
          post:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_1.1.svg"
          diaNumber={1}
        >
          <ArticleParagraph>
            How should you deal with Black&apos;s cut?
          </ArticleParagraph>
        </GoDiagram>
        <ArticleBlockQuote>
          <ArticleParagraph>
            You can use Google Translate, or any other
            translator tool, to have access to the original,
            Japanese text in his articles.
          </ArticleParagraph>
        </ArticleBlockQuote>
        <ArticleParagraph>
          FineArt refutes the cut with a beautiful driving
          technique:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_1.2.svg"
          diaNumber={2}
        >
          <ArticleParagraph>
            This requires reading, but it&apos;s mostly
            technique at its core.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          If Black A, White B threatens the left Black
          group&apos;s capture while also being an atari on
          the original cutting stone.
        </ArticleParagraph>
        <ArticleParagraph>
          Black will need to then accept terrible shape and
          overconcentration in the bottom-left corner, while
          White reaps all the benefits on the outside:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_1.3.svg"
          diaNumber={3}
        >
          <ArticleParagraph>
            White even gets to capture the original cutting
            stone, A.
          </ArticleParagraph>
        </GoDiagram>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Masterful Technique #081
        </ArticleSectionTitle>
        <ArticleParagraph>
          And here&apos;s another exquisite example of
          AI&apos;s next-level skills:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_3.1.svg"
          diaNumber={4}
        >
          <ArticleParagraph>
            How can White survive or escape?
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Black doesn&apos;t have the best shape, but,
          still, it looks difficult to live inside that
          area, or to get out. What can White do?
        </ArticleParagraph>
        <GoDiagram
          src="/articles/okaigo-ai-articles/okaigo_3.2.svg"
          diaNumber={5}
        >
          <ArticleParagraph>
            Through a sacrifice and a tesuji, White exposes
            Black&apos;s shortage of liberties on the left,
            and the cutting point at C, all at the same
            time.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          If Black plays at A, White B is sente for rescuing
          White&apos;s 3 stone. If Black then fixes, the C
          cut gets activated.
        </ArticleParagraph>
        <ArticleParagraph>
          What if Black blocks from D instead after White 3?
          Check it out in the{" "}
          <ArticleLink href="https://note.com/okaoigo/n/nef7a8a915dd0">
            original article
          </ArticleLink>
          !
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Other Highlights
        </ArticleSectionTitle>
        <ArticleParagraph>
          Here&apos;s a selection of a few other great posts
          from that same series:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/n1a6d658919d2">
              Masterful Technique #079
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/nde4bc1bc0982">
              Masterful Technique #080
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/nef7a8a915dd0">
              Masterful Technique #081
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/n7257c9712a5d">
              Masterful Technique #086
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/nead89a818772">
              Masterful Technique #088
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/nb8e0ab25da71">
              Masterful Technique #092
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/nae94774f7863">
              Masterful Technique #117
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://note.com/okaoigo/n/n42a984a05daf">
              Masterful Technique #119
            </ArticleLink>
          </li>
        </ArticleUnorderedList>
        <ArticleParagraph>
          His other posts and series all seem interesting as
          well. Do check them out! I&apos;m even considering
          signing up for his paid series!
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
