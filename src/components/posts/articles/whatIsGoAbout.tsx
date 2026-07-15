import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostUnorderedList,
  PostYouTubeIframe,
  PostDivider,
  NoWrap,
  PostImageWithLegend,
} from "@components/posts/post"

export function WhatIsGoAbout({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Last year, as a way of practicing Korean, I asked
          a professional player, namely{" "}
          <PostLink href="https://kbcl.baduk.or.kr/record/player_view.asp?gisa_code=10001333">
            Lee Uju <NoWrap>이우주</NoWrap> 1p
          </PostLink>
          , what she thought Go was about:
        </PostParagraph>
        <PostUnorderedList>
          <li>Territory</li>
          <li>Fighting</li>
          <li>Efficiency</li>
        </PostUnorderedList>
        <PostParagraph>
          At that point in my Go life, I had heard many
          different opinions on this topic from many
          different pros already. And, again, it was all
          just for language practice, as she also wanted to
          practice English.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/what-is-go-about/lee_uju.jpeg"
          height={325}
          width={325}
          className="rounded-xl"
        >
          <p>
            Lee Uju <NoWrap>이우주</NoWrap> 1p
          </p>
        </PostImageWithLegend>
        <PostParagraph>
          Her answer was <em>efficiency</em>. However, the
          intensity behind it surprised me quite a bit. The
          awkwardness of the language barrier compounded by
          her demeanor prevented me from trying to ask for
          her to elaborate on her point of view.
        </PostParagraph>
        <PostParagraph>
          Nevertheless, it got me thinking afterwards. Maybe
          this topic goes beyond a matter of opinion.
        </PostParagraph>
        <PostParagraph>And I think it does.</PostParagraph>
        <PostParagraph>
          If winning in Go is defined by the player with{" "}
          <em>more</em> territory, then Go cannot actually
          be about territory in absolute but relative terms.
          And, especially since we have finite resources on
          the board, the winner is the one who can score
          more points per stone, which is the definition of
          efficiency.
        </PostParagraph>
        <PostParagraph>
          Many other players will mention fighting as the
          heart of Go, but, if questioned why, besides
          pride, they would likely say it is a way of
          extracting more territory, which circles back to
          efficiency in the end.
        </PostParagraph>
        <PostParagraph>
          Personally, if Go were about territory, I would
          have lost interest a long time ago. Very early on
          in my Go life, fighting became a matter beyond
          mere entertainment. But, when{" "}
          <PostLink href="https://senseis.xmp.net/?Tewari">
            tewari
          </PostLink>{" "}
          analysis entered the picture, unbeknownst to me, I
          gradually converged to Lee Uju&apos;s point of
          view.
        </PostParagraph>

        <PostDivider />
        <PostParagraph>
          I ended up talking about this short story on my
          &quot;Opening from Zero&quot; course, though
          it&apos;s in Portuguese:
        </PostParagraph>
        <PostYouTubeIframe
          src="https://www.youtube.com/embed/7zpef07ei5U?list=PLLWr-AWriURE"
          title="Abertura do Zero | Volume 1"
        />
      </PostSection>
    </Post>
  )
}
