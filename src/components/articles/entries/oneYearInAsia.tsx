import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleUnorderedList,
  ArticleYouTubeIframe,
} from "../articleContent"

export function OneYearInAsia({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Here goes a summary of my one year experience in
          Asia.
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/apgV3qMGfmg?si=ZNtzgT7wVLZFo3GE"
          title="One Year in Asia | A Summary"
        />
        <ArticleParagraph>
          In general, I find it very hard to talk into the
          void, without anyone else for me to bounce things
          off. If you feel it&apos;s annoying to watch, I
          suggest increasing the video&apos;s speed.
        </ArticleParagraph>
        <ArticleParagraph>
          My favorite part of that video is for sure the
          outro, which represents a lot to me personally.
        </ArticleParagraph>
        <ArticleParagraph>
          The links mentioned in the video:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>
            <ArticleLink href="https://docs.google.com/presentation/d/1z8tXnScZzT9j17iUZSuiYhfgSR4JkmZHfNOUtb2GVuE/edit?usp=sharing">
              The presentation I used
            </ArticleLink>
          </li>
          <li>
            Schools:
            <ArticleUnorderedList>
              <li>
                <ArticleLink href="https://hondojo.com/">
                  Hon Dojo
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://www.bibabaduk.online/">
                  BIBA
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://mp.weixin.qq.com/s/fSfkiY4AGNiu-uwZZCdSUw">
                  Quzhou Ge Yuhong Go Academy
                </ArticleLink>
              </li>
            </ArticleUnorderedList>
          </li>
          <li>
            My Instagram Posts (
            <ArticleLink href="https://www.instagram.com/fanaro009/">
              @fanaro009
            </ArticleLink>
            ):
            <ArticleUnorderedList>
              <li>
                <ArticleLink href="https://www.instagram.com/fanaro009/saved/japan-feb-may-2025/17939789220023192/">
                  Japan 2025
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://www.instagram.com/fanaro009/saved/korea-2025/18083103910731651/">
                  Korea 2025
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://www.instagram.com/fanaro009/saved/korea-2026/18126693523473867/">
                  Japan 2026
                </ArticleLink>
              </li>
            </ArticleUnorderedList>
          </li>
          <li>
            101weiqi pages mentioned:
            <ArticleUnorderedList>
              <li>
                <ArticleLink href="https://www.101weiqi.com/search/">
                  Search
                </ArticleLink>
              </li>
              <li>
                <ArticleLink href="https://www.101weiqi.com/input/">
                  Creation
                </ArticleLink>
              </li>
            </ArticleUnorderedList>
          </li>
          <li>
            <ArticleLink href="https://youtu.be/U88jj6PSD7w">
              Slavoj Zizek on being happy vs interesting.
            </ArticleLink>
          </li>
        </ArticleUnorderedList>
      </ArticleSection>
    </Article>
  )
}
