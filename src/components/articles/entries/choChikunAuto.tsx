import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleImageWithLegend,
  ImageLegend,
} from "../articleContent"

export function ChoChikunAuto({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Some 3 years,{" "}
          <ArticleLink href="https://www.youtube.com/@TakumiGoAcademy">
            TakumiGo
          </ArticleLink>{" "}
          published a series of articles with translations
          of Cho Chikun 9p&apos;s autobiography, a treasure
          for the Go community. I was really impressed by
          the translation&apos;s quality and dully
          complimented him on his work. However, he
          clarified then that those were not his
          translations but AI&apos;s!
        </ArticleParagraph>
        <ArticleParagraph>
          That was when AI was starting to get scary-good at
          human languages. Nowadays, we&apos;re more used to
          it, but it was quite surprising for it to be that
          good at translating in one of the types of
          translations that&apos;s trickiest: Asian to
          Western.
        </ArticleParagraph>
        <ArticleParagraph>
          At the moment,{" "}
          <ArticleLink href="https://www.1200igosharing.blog/en/blog">
            TakumiGo&apos;s Blog
          </ArticleLink>{" "}
          seems to be down, which is a pity for all the good
          content he used to post. But there&apos;s still a
          way to access Cho Chikun 9p&apos;s autobiography:
          it was published as{" "}
          <ArticleLink href="https://www.nikkei.com/topics/24042600">
            a series of articles on a column
          </ArticleLink>{" "}
          for the Nihon Keizai Shimbun (Nikkei) newspaper.
          Then, all you need to do is translate it with your
          favorite AI.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/cho-chikun-auto/cho_chikun_auto_series.png"
          width={600}
        >
          <ImageLegend>
            The Cho Chikun 9p Autobiography article series
            on the Nikkei newspaper website.
          </ImageLegend>
        </ArticleImageWithLegend>
      </ArticleSection>
    </Article>
  )
}
