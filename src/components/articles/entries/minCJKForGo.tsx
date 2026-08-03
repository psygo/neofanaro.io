import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
} from "../articleContent"
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
          in the main Asian languages for the Go, which are
          Chinese, Japanese and Korean.
        </ArticleParagraph>
        <ArticleParagraph>
          With just &quot;black&quot;, &quot;white&quot;,
          &quot;correct&quot; and &quot;incorrect&quot;, and
          you&apos;re able to read most problem books, which
          is already a ton of modern Go literature.
        </ArticleParagraph>
        <ArticleTable>
          <ArticleTableHead>
            <ArticleTableHeaderCell>
              Word
            </ArticleTableHeaderCell>
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
              <ArticleTableCell>黑</ArticleTableCell>
              <ArticleTableCell>黒</ArticleTableCell>
              <ArticleTableCell>흑</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>White</ArticleTableCell>
              <ArticleTableCell>白</ArticleTableCell>
              <ArticleTableCell>白</ArticleTableCell>
              <ArticleTableCell>백</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>Correct</ArticleTableCell>
              <ArticleTableCell>正</ArticleTableCell>
              <ArticleTableCell>正</ArticleTableCell>
              <ArticleTableCell>정수</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>Incorrect</ArticleTableCell>
              <ArticleTableCell>失</ArticleTableCell>
              <ArticleTableCell>失</ArticleTableCell>
              <ArticleTableCell>실패</ArticleTableCell>
            </ArticleTableRow>
          </ArticleTableBody>
        </ArticleTable>
        <ArticleParagraph>
          As per any language, there are nuances to
          different contexts, for example, the terms for
          &quot;incorrect&quot; that I listed above are
          closer to &quot;failure&quot; usually. It&apos;s
          not always that the different terms above will be
          the correct ones. Nonetheless, those are the ones
          which will cover more than 90% of all usage.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/min-cjk-for-go/psygo_corner_1.jpeg"
          height={350}
          width={350}
          className="rounded-lg"
        >
          <ArticleParagraph>
            My article on this topic for Go Magic.
          </ArticleParagraph>
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
          , I recommended Richard Hunter&apos;s books on an
          intro to that language, all from the point of view
          of a Go player. He is the author of two series:{" "}
          <em>Just Enough Japanese</em> and{" "}
          <em>The Road to Understanding Japanese</em>. I
          highly recommended all Go players to try out the
          first volume of JEJ, as it opens the door to a new
          language in a very short amount of time.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/min-cjk-for-go/just_enough_japanese_cover.jpg"
          height={100}
          width={225}
          className="rounded-lg"
        >
          <ArticleParagraph>
            Richard Hunter&apos;s introductory book on
            Japanese for Go players.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Some linguists and polyglots highly recommend
          learning multiple languages in parallel and
          comparing them to each other. That might veer
          towards their inherent interest in languages as a
          whole, but overall, I find that method to be much
          more engaging than learning only one language. Of
          course, you&apos;re perhaps stretching yourself
          too thin, but we&apos;re not robots, we need to
          feel motivated, if it works for you, then it might
          just be the <em>correct</em> approach after all.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
