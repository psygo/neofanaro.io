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

export function JapaneseYouTubersAutodub({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Following the previous articles on{" "}
          <ArticleLink
            internal
            href="/articles/chinese-youtubers-autodub"
          >
            Chinese Go YouTubers
          </ArticleLink>{" "}
          and{" "}
          <ArticleLink
            internal
            href="/articles/korean-youtubers-autodub"
          >
            Korean Go YouTubers
          </ArticleLink>
          , now we&apos;re gonna list some of the best
          Japanese Go YouTubers with autodubbing.
        </ArticleParagraph>
        <ArticleParagraph>
          Alongside{" "}
          <ArticleLink href="https://www.youtube.com/@BadukTV_official">
            Baduk TV
          </ArticleLink>
          ,{" "}
          <ArticleLink href="https://www.youtube.com/@nihonkiin_ch">
            Nihon Kiin 日本棋
          </ArticleLink>
          &apos;s channel is also a Go world treasure.
        </ArticleParagraph>
        <ArticleParagraph>
          Two other notable channels are{" "}
          <ArticleLink href="https://www.youtube.com/@gochannel7707">
            Ryu Shikun 9p
          </ArticleLink>
          &apos;s, and{" "}
          <ArticleLink href="https://www.youtube.com/@%E3%81%A4%E3%82%8B%E3%82%8A%E3%82%93%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB">
            Tsururin
          </ArticleLink>
          &apos;s. The first is famous for its series of
          blitz live games, and the latter, for the duo
          Tsuruyama Atsushi 8p and Rin Kanketsu 8p.
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
                みむ囲碁ちゃんねる
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@mimuigo">
                  @mimuigo
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
              <ArticleTableCell>
                つるりんチャンネル
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@%E3%81%A4%E3%82%8B%E3%82%8A%E3%82%93%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB">
                  @つるりんチャンネル
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center">
                ✗
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>8p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                囲碁棋士 柳 時熏のGo Channel
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@gochannel7707">
                  @gochannel7707
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="text-center">
                ✗
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>9p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                日本棋院囲碁チャンネル【公式】
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@nihonkiin_ch">
                  @nihonkiin_ch
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
            <ArticleTableRow>
              <ArticleTableCell>
                igo shogi LIVE TV
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@igoshogitv">
                  @igoshogitv
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
      </ArticleSection>
    </Article>
  )
}
