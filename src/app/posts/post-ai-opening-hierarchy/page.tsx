import { Main } from "@components/common/main"
import {
  PostParagraph,
  Post,
  PostDate,
  PostSection,
  PostTitle,
  PostTitleSection,
  PostLink,
  PostTags,
  PostOrderedList,
  PostUnorderedList,
} from "@components/posts/post"
import { postCardDb } from "@components/posts/postsDb"
import {
  GobanLegend,
  WrappedGoban,
} from "@components/posts/goban"

// import sgf from "@sabaki/sgf"

export default function PostAiOpeningHierarchy() {
  // const chineseFuseki =
  //   "(;GM[1]FF[4]CA[UTF-8]AP[Sabaki:0.52.2]KM[0.5]SZ[19]DT[2026-06-22];B[pd];W[dd];B[pq];W[dp];B[qk])"
  // const rootNodes = sgf.parse(chineseFuseki)
  // rootNodes.console.log(rootNodes)

  return (
    <Main>
      <Post>
        <PostTitleSection>
          <PostTitle>{postCardDb[0].title}</PostTitle>
          <PostDate>{postCardDb[0].date}</PostDate>
          <PostTags tags={postCardDb[0].tags} />
        </PostTitleSection>
        <PostSection>
          <PostParagraph>
            Before AI, we used to think side moves early in
            the opening had way closer value to corner moves
            than they actually do. Or at least way closer
            value than what AI tells us.
          </PostParagraph>
          <PostParagraph>
            That&apos;s one of the reasons we arrived at
            openings such as the{" "}
            <PostLink href="https://senseis.xmp.net/?SanRenSei">
              sanrensei
            </PostLink>
            , or the{" "}
            <PostLink href="https://senseis.xmp.net/?ChineseFuseki">
              Chinese
            </PostLink>{" "}
            and its variants.
          </PostParagraph>
          <SanrenseiFuseki />
          <ChineseFuseki />
          <PostParagraph>
            Now, with AI, things have become much clearer.
            The opening hierarchy goes like this:
          </PostParagraph>
          <PostOrderedList>
            <li>Corner</li>
            <li>
              Largely interchangeable among these:
              <PostUnorderedList>
                <li>Corner Enclosure</li>
                <li>Corner Approach</li>
                <li>3-3 Invasion Against the 4-4</li>
              </PostUnorderedList>
            </li>
            <li>Side</li>
            <li>Center</li>
          </PostOrderedList>
        </PostSection>
      </Post>
    </Main>
  )
}

function SanrenseiFuseki() {
  return (
    <WrappedGoban
      size={17}
      signMap={[
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
      ]}
    >
      <GobanLegend
        diaNumber={1}
        legend="The Sanrensei Fuseki"
      />
    </WrappedGoban>
  )
}

function ChineseFuseki() {
  return (
    <WrappedGoban
      size={17}
      signMap={[
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ],
      ]}
    >
      <GobanLegend
        diaNumber={2}
        legend="The Chinese Fuseki"
      />
    </WrappedGoban>
  )
}
