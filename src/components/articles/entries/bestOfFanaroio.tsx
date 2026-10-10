import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleUnorderedList,
  ImageLegend,
} from "../articleContent"

export function BestOfFanaroio({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          This website you&apos;re using right now is
          actually my third corner on the web. For a brief
          while I had a WordPress blog, but a little bit
          later, I decided to move to a place where I had
          total control over, without any third-party
          software.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/best-of-fanaroio/fanaroio_github_1.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            The fanaro.io Github repository.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Slowly, I programmed everything from scratch, with
          only HTML, CSS, JS, and{" "}
          <ArticleLink href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components">
            Web Components
          </ArticleLink>
          . The results were the bare-bones website you see
          on{" "}
          <ArticleLink
            internal
            href="https://psygo.github.io/fanaro.io"
          >
            psygo.github.io/fanaro.io
          </ArticleLink>
          . It used to be on fanaro.io, but I stopped paying
          for that domain, and someone bought it to funnel
          the traffic elsewhere.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/best-of-fanaroio/fanaroio_1.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            My previous blog, fanaro.io.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          As a software developer and writer, I do feel a
          lot of cringe about that project. Even though
          I&apos;m nostalgic about 1990s web design, I
          believe the more modern UX you&apos;re using right
          here is much better &mdash; and I have plans of
          turning this website into a 3D experience!{" "}
        </ArticleParagraph>
        <ArticleParagraph>
          Back then, I also thought having no frameworks
          would make my website more long-lasting. However,
          especially in the post-AI era, code is really a
          commodity, just a means, we can rewrite it with
          little cost at any point.
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, with 140+ articles &mdash; in Portuguese,
          English and French &mdash;, some of the content I
          wrote on that blog is still quite useful and/or
          enjoyable, and I might copy it here someday. But,
          for now, I&apos;ll just list some of the best:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <FanaroioBadukArticles />
          <FanaroioSoftwareArticles />
          <FanaroioOthersArticles />
        </ArticleUnorderedList>
      </ArticleSection>
    </Article>
  )
}

function FanaroioBadukArticles() {
  return (
    <li>
      Go | Baduk | Weiqi:
      <ArticleUnorderedList>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tewari/tewari.html">
            Fundamentos de Tewari
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/copa_samsung_2017/copa_samsung_2017.html">
            Copa Samsung 2017
          </ArticleLink>
        </li>
      </ArticleUnorderedList>
    </li>
  )
}

function FanaroioSoftwareArticles() {
  return (
    <li>
      Software
      <ArticleUnorderedList>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tewari/tewari.html">
            Fundamentos de Tewari
          </ArticleLink>
        </li>
      </ArticleUnorderedList>
    </li>
  )
}

function FanaroioOthersArticles() {
  return (
    <li>
      Software
      <ArticleUnorderedList>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tewari/tewari.html">
            Fundamentos de Tewari
          </ArticleLink>
        </li>
      </ArticleUnorderedList>
    </li>
  )
}
