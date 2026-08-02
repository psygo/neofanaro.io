import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleUnorderedList,
  ArticleYouTubeIframe,
  ArticleDivider,
  NoWrap,
  ArticleImageWithLegend,
} from "@components/articles/article"

export function WhatIsGoAbout({
  article: post,
}: ArticleProps) {
  return (
    <Article article={post}>
      <ArticleSection>
        <ArticleParagraph>
          Last year, as a way of practicing Korean, I asked
          a professional player, namely{" "}
          <ArticleLink href="https://kbcl.baduk.or.kr/record/player_view.asp?gisa_code=10001333">
            Lee Woojoo <NoWrap>이우주</NoWrap> 1p
          </ArticleLink>
          , what she thought Go was about:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>Territory</li>
          <li>Fighting</li>
          <li>Efficiency</li>
        </ArticleUnorderedList>
        <ArticleParagraph>
          At that point in my Go life, I had heard many
          different opinions on this topic from many
          different pros already. And, again, it was all
          just for language practice, as she also wanted to
          practice English.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/what-is-go-about/lee_uju.jpeg"
          height={325}
          width={325}
          className="rounded-xl"
        >
          <ArticleParagraph>
            Lee Woojoo <NoWrap>이우주</NoWrap> 1p
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Her answer was <em>efficiency</em>. However, the
          intensity behind it surprised me quite a bit. The
          awkwardness of the language barrier compounded by
          her demeanor prevented me from trying to ask for
          her to elaborate on her point of view.
        </ArticleParagraph>
        <ArticleParagraph>
          Nevertheless, it got me thinking afterwards. Maybe
          this topic goes beyond a matter of opinion.
        </ArticleParagraph>
        <ArticleParagraph>
          And I think it does.
        </ArticleParagraph>
        <ArticleParagraph>
          If winning in Go is defined by the player with{" "}
          <em>more</em> territory, then Go cannot actually
          be about territory in absolute but relative terms.
          And, especially since we have finite resources on
          the board, the winner is the one who can score
          more points per stone, which is the definition of
          efficiency.
        </ArticleParagraph>
        <ArticleParagraph>
          Many other players will mention fighting as the
          heart of Go, but, if questioned why, besides
          pride, they would likely say it is a way of
          extracting more territory, which circles back to
          efficiency in the end.
        </ArticleParagraph>
        <ArticleParagraph>
          Personally, if Go were about territory, I would
          have lost interest a long time ago. Very early on
          in my Go life, fighting became a matter beyond
          mere entertainment. But, when{" "}
          <ArticleLink href="https://senseis.xmp.net/?Tewari">
            tewari
          </ArticleLink>{" "}
          analysis entered the picture, unbeknownst to me, I
          gradually converged to Lee Woojoo&apos;s point of
          view.
        </ArticleParagraph>

        <ArticleDivider />
        <ArticleParagraph>
          I ended up talking about this short story on my
          &quot;Opening from Zero&quot; course, though
          it&apos;s in Portuguese:
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/7zpef07ei5U?list=PLLWr-AWriURE"
          title="Abertura do Zero | Volume 1"
        />
      </ArticleSection>
    </Article>
  )
}
