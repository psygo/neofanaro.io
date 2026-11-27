import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
} from "../articleContent"
import {
  ArticleTable,
  ArticleTableBody,
  ArticleTableCell,
  ArticleTableHead,
  ArticleTableHeaderCell,
  ArticleTableRow,
} from "../articleTable"

export function KoreanYouTubersAutodub({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Following a{" "}
          <ArticleLink
            internal
            href="/articles/chinese-youtubers-autodub"
          >
            previous article on Chinese Go YouTubers
          </ArticleLink>
          , now we&apos;re gonna list some of the best
          Korean Go YouTubers with autodubbing.
        </ArticleParagraph>
        <ArticleParagraph>
          Korean YouTube is way more active, since
          that&apos;s their main platform for sharing video
          content on Go. So, with autodubbing, there
          won&apos;t be a shortage of resources from now on,
          I believe.
        </ArticleParagraph>
        <ArticleParagraph>
          <ArticleLink href="https://www.youtube.com/@BadukTV_official">
            Baduk TV
          </ArticleLink>{" "}
          is one of the treasures of the Go world, an
          unparalleled resource. I often check out what live
          streams they have scheduled in the future, as they
          do cover all of the world championships.
        </ArticleParagraph>
        <ArticleParagraph>
          Another highlight is definitely{" "}
          <ArticleLink href="https://www.youtube.com/@leehyunwooktv">
            Lee Hyunwook 9p
          </ArticleLink>
          &apos;s channel. A Korean 9p offering us free
          commentary is a real gift to be cherished.
        </ArticleParagraph>
        <ArticleTable>
          <ArticleTableHead>
            <ArticleTableHeaderCell>
              Channel&apos;s Name
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Channel&apos;s Handle
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Has Autodubbing?
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Main Type of Content
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Content&apos;s Rank
            </ArticleTableHeaderCell>
          </ArticleTableHead>
          <ArticleTableBody className="text-left">
            <ArticleTableRow>
              <ArticleTableCell>
                이현욱바둑TV[프로바둑9단]
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@leehyunwooktv">
                  @leehyunwooktv
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>9p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>프로연우</ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@proyeonwoo">
                  @proyeonwoo
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>1p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                김성룡 바둑랩
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@%EA%B9%80%EC%84%B1%EB%A3%A1%EB%B0%94%EB%91%91%EB%9E%A9">
                  @김성룡바둑랩
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>Fox 9d</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                몽사부의열혈바둑
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@%EB%AA%BD%EC%82%AC%EB%B6%80%EC%9D%98%EC%97%B4%ED%98%88%EB%B0%94%EB%91%91">
                  @몽사부의열혈바둑
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>Unkown</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                바둑TVㅣBADUK TV
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@BadukTV_official">
                  @BadukTV_official
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center">
                Very little
              </ArticleTableCell>
              <ArticleTableCell>
                Live Matches
              </ArticleTableCell>
              <ArticleTableCell>9p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>K바둑</ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@kbaduktv">
                  @kbaduktv
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center">
                Very little
              </ArticleTableCell>
              <ArticleTableCell>
                Live Matches
              </ArticleTableCell>
              <ArticleTableCell>9p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>타이젬 TV</ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@tygemtv">
                  @tygemtv
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center">
                ✗
              </ArticleTableCell>
              <ArticleTableCell>News</ArticleTableCell>
              <ArticleTableCell>&mdash;</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                바둑TV 클래식 BADUK TV Classic
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@baduk_tv_Classic">
                  @baduk_tv_Classic
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center">
                ✗
              </ArticleTableCell>
              <ArticleTableCell>
                Live Matches
              </ArticleTableCell>
              <ArticleTableCell>9p</ArticleTableCell>
            </ArticleTableRow>
          </ArticleTableBody>
        </ArticleTable>
        <ArticleParagraph>
          One channel which really puzzles me is{" "}
          <ArticleLink href="https://www.youtube.com/@%EA%B9%80%EC%84%B1%EB%A3%A1%EB%B0%94%EB%91%91%EB%9E%A9">
            Kim Seongryong
          </ArticleLink>
          &apos;s. I really don&apos;t know how he is able
          to pump out so much high quality content.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
