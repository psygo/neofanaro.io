import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleImageWithLegend,
  ImageLegend,
  ArticleBlockQuote,
} from "../articleContent"
import { ArticleGitHubReadme } from "../githubReadme"

export function NewYtdKbdNav({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleImageWithLegend
          src="/articles/new-ytd-kbd-nav/thumbnail.png"
          height={100}
          width={600}
        >
          <ImageLegend>
            The Ytd Kbd Nav browser extension on Github.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleBlockQuote>
          You can download the browser extension on the
          Chrome Web Store{" "}
          <ArticleLink href="">here</ArticleLink>.
        </ArticleBlockQuote>
        <ArticleParagraph>
          After 5 years, I&apos;m finally updating my{" "}
          <ArticleLink href="https://github.com/FanaroEngineering/youtube_kbd_nav">
            YouTube Keyboard Navigation
          </ArticleLink>{" "}
          browser extension.
        </ArticleParagraph>
        <ArticleParagraph>
          These past 5 years feel more like 50 in the 20th
          century. Developing anything in this post-AI age
          makes anything we built before it seem
          glacial-paced.
        </ArticleParagraph>
        <ArticleParagraph>
          One afternoon, a couple of hours, and AI was able
          to fix a ton bugs and imperfections which
          accumulated up over the years. Most notably, it
          fixed the ever-changing tags and YouTube element
          organization. But I&apos;ve also updated its{" "}
          <ArticleLink href="https://developer.chrome.com/docs/extensions/develop/migrate">
            manifest from V2 to V3
          </ArticleLink>
          , one of the biggest changes on Chrome-based
          browsers.
        </ArticleParagraph>
        <ArticleBlockQuote>
          The{" "}
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/youtube_kbd_nav/youtube_kbd_nav.html">
            original post
          </ArticleLink>{" "}
          about that extension is on my old blog.
        </ArticleBlockQuote>
        <ArticleGitHubReadme href="https://github.com/FanaroEngineering/youtube_kbd_nav" />
      </ArticleSection>
    </Article>
  )
}
