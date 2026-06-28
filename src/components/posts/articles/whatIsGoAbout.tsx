import { BlogPostProps } from "../../../types/post"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostUnorderedList,
} from "@components/posts/post"
import Image from "next/image"

export function WhatIsGoAbout({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          Last year, as a way of practicing Korean, I asked
          a professional player, namely{" "}
          <PostLink href="https://kbcl.baduk.or.kr/record/player_view.asp?gisa_code=10001333">
            Lee Uju 이우주 1p
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
        <div className="-mt-3 flex flex-col items-center">
          <Image
            loading="eager"
            src="/articles/what-is-go-about/lee_uju.jpeg"
            width={0}
            height={0}
            sizes="100vw"
            className="mx-7 mb-0 h-full w-80 rounded-xl"
            alt="Lee Uju 이우주 1p"
          />
          <p className="mt-2 mb-2 px-10 text-center text-sm">
            Lee Uju 이우주 1p
          </p>
        </div>
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
          And, since we have finite resources on the board,
          the winner is the one who can score more points
          per stone, which is the definition of efficiency.
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
          have lost interest a long time ago. Fighting
          became a matter of not only entertainment very
          early on in my Go life. But, when{" "}
          <PostLink href="https://senseis.xmp.net/?Tewari">
            tewari
          </PostLink>{" "}
          analysis entered the picture, unbeknownst to me, I
          gradually converged to Lee Uju&apos;s point of
          view.
        </PostParagraph>

        <hr className="mt-30 mb-6 border border-gray-300" />
        <PostParagraph>
          I ended up talking about this short story on my
          &quot;Opening from Zero&quot; course, though
          it&apos;s in Portuguese:
        </PostParagraph>
        <div className="mx-6 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/7zpef07ei5U?list=PLLWr-AWriURE"
            title="Abertura do Zero | Volume 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </PostSection>
    </Post>
  )
}
