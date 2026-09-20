import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleUnorderedList,
  ImageLegend,
} from "../articleContent"
import { ArticleRuby } from "../articleRuby"
import {
  ArticleTable,
  ArticleTableBody,
  ArticleTableCell,
  ArticleTableHead,
  ArticleTableHeaderCell,
  ArticleTableRow,
} from "../articleTable"

export function MinCJKForGo({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          It&apos;s surprising how knowing just a few words
          can give us so much access to what&apos;s shared
          in the main Asian languages for Go, i.e., Chinese,
          Japanese and Korean.
        </ArticleParagraph>
        <ArticleParagraph>
          With just &quot;black&quot;, &quot;white&quot;,
          &quot;correct&quot; and &quot;incorrect&quot;,
          you&apos;re already able to read most problem
          books, which is perhaps most of Go literature.
        </ArticleParagraph>
        <ArticleTable>
          <ArticleTableHead>
            <ArticleTableHeaderCell>
              English
            </ArticleTableHeaderCell>
            {/* <ArticleTableHeaderCell>
              Portuguese
            </ArticleTableHeaderCell> */}
            <ArticleTableHeaderCell>
              Chinese
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Japanese
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Korean
            </ArticleTableHeaderCell>
          </ArticleTableHead>
          <ArticleTableBody>
            <ArticleTableRow>
              <ArticleTableCell>Black</ArticleTableCell>
              {/* <ArticleTableCell>Preto</ArticleTableCell> */}
              <ArticleTableCell>
                <ArticleRuby
                  base="黑"
                  pronunciation="hēi"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="黒"
                  pronunciation="くろ or kuro"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="흑"
                  pronunciation="heuk"
                />
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>White</ArticleTableCell>
              {/* <ArticleTableCell>Branco</ArticleTableCell> */}
              <ArticleTableCell>
                <ArticleRuby
                  base="白"
                  pronunciation="bái"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="白"
                  pronunciation="しろ or shiro"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="백"
                  pronunciation="baek"
                />
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>Correct</ArticleTableCell>
              {/* <ArticleTableCell>Correto</ArticleTableCell> */}
              <ArticleTableCell>
                <ArticleRuby
                  base="正"
                  pronunciation="zhèng"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="正"
                  pronunciation="せい or sei"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="정"
                  pronunciation="jeong"
                />
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>Incorrect</ArticleTableCell>
              {/* <ArticleTableCell>Incorreto</ArticleTableCell> */}
              <ArticleTableCell>
                <ArticleRuby
                  base="失"
                  pronunciation="shī"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="失"
                  pronunciation="しつ or shitsu"
                />
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleRuby
                  base="실패"
                  pronunciation="silpae"
                />
              </ArticleTableCell>
            </ArticleTableRow>
          </ArticleTableBody>
        </ArticleTable>
        <ArticleBlockQuote>
          If you have any addition suggestions to this
          table, let me know!
        </ArticleBlockQuote>
        <ArticleParagraph>
          As per any language, there are nuances to
          different contexts, for example, the terms for
          &quot;incorrect&quot; that I listed above are
          closer to &quot;failure&quot; usually. And
          it&apos;s not always that the different terms
          listed above will be the correct ones.
          Nonetheless, those likely cover more than 90% of
          all usage.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/min-cjk-for-go/psygo_corner_1.jpeg"
          height={350}
          width={350}
          className="rounded-lg"
        >
          <ImageLegend>
            My article on this topic for Go Magic.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          If you&apos;re interested in learning Japanese
          specifically, in a{" "}
          <ArticleLink href="https://www.instagram.com/p/DIEE2Rds5i3/?img_index=1">
            post
          </ArticleLink>{" "}
          on my now inactive &quot;psygo&apos;s Corner&quot;
          for{" "}
          <ArticleLink href="https://gomagic.org/">
            Go Magic
          </ArticleLink>
          , I recommended Richard Hunter&apos;s books as an
          intro to that language. His two main series are:{" "}
          <em>Just Enough Japanese</em> and{" "}
          <em>The Road to Understanding Japanese</em>, both
          available on{" "}
          <ArticleLink href="https://gobooks.com/">
            Go Books
          </ArticleLink>
          . I highly recommend all Go players to try out the
          first volume of JEJ, as it opens the door to a new
          language &mdash; and a new way of thinking!
          &mdash; in a very short amount of time.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/min-cjk-for-go/just_enough_japanese_cover.jpg"
          height={100}
          width={225}
          className="rounded-lg"
        >
          <ImageLegend>
            Richard Hunter&apos;s introductory book on
            Japanese for Go players.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          My knowledge of Japanese and Korean doesn&apos;t
          go that far unfortunately, and my Chinese is
          infinitesimal. However, two of the best resources
          I know for Japanese and Korean are:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>
            <ArticleLink href="https://jisho.org/">
              Jisho
            </ArticleLink>
            , which actually means dictionary (辞典) in
            Japanese.
          </li>
          <li>
            <ArticleLink href="https://korean.dict.naver.com/">
              Naver&apos;s Korean-English Dictionary
            </ArticleLink>
            , which also shows the Chinese characters
            originating many of the Korean words or
            compounds.
          </li>
        </ArticleUnorderedList>
        <ArticleParagraph>
          Some linguists and polyglots highly recommend
          learning multiple languages in parallel and
          comparing them to each other. That might veer
          towards their inherent interest in languages as a
          whole, but, overall, I find that method to be much
          more engaging than learning only one language at a
          time. Of course, you&apos;re perhaps stretching
          yourself too thin, but we&apos;re not robots, we
          need to feel motivated, if it works for you, then
          it might just be the <em>correct</em> approach
          after all.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
