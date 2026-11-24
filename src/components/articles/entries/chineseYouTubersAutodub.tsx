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

export function ChineseYouTubersAutodub({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Recently, with the outstanding advances in AI,
          YouTube&apos;s autodubbing has become impressively
          good. Now, we&apos;re starting to get access to
          high quality content created directly for CJK
          audiences, but in English, or perhaps even other
          languages, if the channel&apos;s owner makes it
          available.
        </ArticleParagraph>
        <ArticleParagraph>
          Most creators can enable autodubbing in their
          settings, if YouTube hasn&apos;t enabled it
          automatically already. For older videos,{" "}
          <ArticleLink href="https://support.google.com/youtube/answer/15569972?hl=en">
            some requirements might need to be filled
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          Most video content creators are probably locked to
          Youku or Bilibili, but we do find some who manage
          to repost content to YouTube, and some who are
          natives from Taiwan, which do have access to
          YouTube.
        </ArticleParagraph>
        <ArticleParagraph>
          These past few days I was quite surprised at how
          few Go creators I knew in Chinese, namely{" "}
          <ArticleLink href="https://www.youtube.com/@teacherliugo">
            @teacherliugo
          </ArticleLink>{" "}
          &mdash; a pro from Taiwan &mdash; and{" "}
          <ArticleLink href="https://www.youtube.com/@jianjian888">
            @jianjian888
          </ArticleLink>{" "}
          &mdash; an archive channel. So{" "}
          <ArticleLink href="https://www.reddit.com/r/baduk/comments/1y1exkg/which_are_the_best_go_chinese_channels_with/">
            I asked on Reddit
          </ArticleLink>{" "}
          if they knew of some more. Here are the results:
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
          <ArticleTableBody>
            <ArticleTableRow>
              <ArticleTableCell>
                職業棋士劉建昌
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@teacherliugo">
                  @teacherliugo
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>Pro</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                Jian Jian Good Go Game World
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@jianjian888/">
                  @jianjian888
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell>✗</ArticleTableCell>
              <ArticleTableCell>
                Commentary Archive
              </ArticleTableCell>
              <ArticleTableCell>9p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>海峰棋院</ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@haifongigo">
                  @haifongigo
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>9p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                下围棋的小林
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@wqxiaolin">
                  @wqxiaolin
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell>✗</ArticleTableCell>
              <ArticleTableCell>Joseki</ArticleTableCell>
              <ArticleTableCell>Fox 9d</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                棋士陈林涛
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@chenlintaoweiqi">
                  @chenlintaoweiqi
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Playthrough
              </ArticleTableCell>
              <ArticleTableCell>7p</ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                Ming Yue talks about chess
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@MingYueTanQi">
                  @MingYueTanQi
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell className="font-bold">
                ✓
              </ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>
                Chinese 5d
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>围棋教室</ArticleTableCell>
              <ArticleTableCell>
                <ArticleLink href="https://www.youtube.com/@%E5%9B%B4%E6%A3%8B%E6%95%99%E5%AE%A4">
                  @围棋教室
                </ArticleLink>
              </ArticleTableCell>
              <ArticleTableCell>✗</ArticleTableCell>
              <ArticleTableCell>
                Commentary
              </ArticleTableCell>
              <ArticleTableCell>Unknown</ArticleTableCell>
            </ArticleTableRow>
          </ArticleTableBody>
        </ArticleTable>
        <ArticleParagraph>
          On Bilibili, I only know of{" "}
          <ArticleLink href="https://space.bilibili.com/en/271671622">
            棋手唐天源 (Tang Tianyuan)
          </ArticleLink>
          , thanks to Alexandre Amaro 8d Fox. And, in
          Korean, with autodubbing, I mostly only watch{" "}
          <ArticleLink href="https://www.youtube.com/@leehyunwooktv">
            이현욱바둑TV[프로바둑9단] (Lee Hyunwook 9p)
          </ArticleLink>
          &apos;s,{" "}
          <ArticleLink href="https://www.youtube.com/@BadukTV_official">
            Baduk TV
          </ArticleLink>
          &apos;s or{" "}
          <ArticleLink href="https://www.youtube.com/@kbaduktv">
            KBaduk
          </ArticleLink>
          &apos;s YouTube channels. In Japanese, there are
          quite a few channels available, the most important
          one being the{" "}
          <ArticleLink href="https://www.youtube.com/@nihonkiin_ch">
            日本棋院囲碁チャンネル【公式】 (Nihon Kiin)
          </ArticleLink>
          &apos;s &mdash; and the Nihon Kiin also has the
          now inactive{" "}
          <ArticleLink href="https://www.youtube.com/@nihonkiingochannelforovers8076">
            Nihon Kiin Go Channel for overseas
          </ArticleLink>{" "}
          channel.
        </ArticleParagraph>
        <ArticleParagraph>
          I&apos;ll see if I can research more on the rest
          of the CJK channels! Leave other channels in the
          comments!
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
