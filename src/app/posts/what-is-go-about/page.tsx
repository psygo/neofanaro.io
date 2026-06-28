import type { Metadata } from "next"

import { generatePostMetadataHelper } from "@/src/server/utils/generatePostMetadataHelper"
import { get_post } from "@server/actions/posts/get_posts"

import { Main } from "@components/common/main"
import {
  PostParagraph,
  Post,
  PostSection,
  PostUnorderedList,
} from "@components/posts/post"
import { CpiSuspense } from "@components/common/cpiSuspense"
import Image from "next/image"

const postPath = "what-is-go-about"

export async function generateMetadata(): Promise<Metadata> {
  return generatePostMetadataHelper(postPath)
}

export default async function PostLittleKnifeGodBooks() {
  const post = await get_post(postPath)

  return (
    <Main>
      <CpiSuspense>
        {post ? (
          <Post data={post}>
            <PostSection>
              <PostParagraph>
                Last year, as a way of practicing Korean, I
                asked a professional player, namely Lee Uju
                이우주 1p, what she thought Go was about:
              </PostParagraph>
              <Image
                src="/articles/what-is-go-about/lee_uju.jpeg"
                width={0}
                height={0}
                sizes="100vw"
                className="mx-auto h-full w-80 rounded-lg"
                alt="Lee Uju 이우주 1p"
              />
              <PostUnorderedList>
                <li>Territory</li>
                <li>Fighting</li>
                <li>Efficiency</li>
              </PostUnorderedList>
              <PostParagraph>
                At that point in my Go life, I had heard
                many different opinions on this topic from
                many different pros already. And, again, it
                was all just for language practice, as she
                also wanted to practice English.
              </PostParagraph>
              <PostParagraph>
                Her answer was <em>efficiency</em>. However,
                the intensity behind it surprised me quite a
                bit. The awkwardness of the language barrier
                compounded by her demeanor prevented me from
                trying to ask for her to elaborate on her
                point of view.
              </PostParagraph>
              <PostParagraph>
                Nevertheless, it got me thinking afterwards.
                Maybe this topic goes beyond a matter of
                opinion.
              </PostParagraph>
              <PostParagraph>
                And I think it does.
              </PostParagraph>
              <PostParagraph>
                If winning in Go is defined by the player
                with <em>more</em> territory, then Go
                actually cannot be about territory in
                absolute but relative terms. And, since we
                have finite resources on the board, the
                winner is the one who can score more points
                per stone, which is the definition of
                efficiency.
              </PostParagraph>
              <PostParagraph>
                Many other players will mention fighting as
                the heart of Go, but, if questioned why,
                besides pride they would likely say it is a
                way of extracting more territory, which
                circles back to efficiency in the end.
              </PostParagraph>
              {/* <PostParagraph>
                Personally, if Go were about territory, I
                would have lost interest a long time ago.
                After all, Go would seemingly be reduced to
                accounting.
              </PostParagraph> */}
            </PostSection>
          </Post>
        ) : (
          <></>
        )}
      </CpiSuspense>
    </Main>
  )
}
