import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostImageWithLegend,
  PostBlockQuote,
  PostUnorderedList,
} from "@components/posts/post"

export function Lang101({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostParagraph>
          I&apos;m happy to announce the release of my first
          mobile app in a long while, an idea I had been
          brewing for a long time, out of my frustrations
          with language learning apps and ecosystem .
        </PostParagraph>
        <PostBlockQuote>
          Lang101 also features a{" "}
          <PostLink href="https://lang101.expo.app/">
            web interface.
          </PostLink>
        </PostBlockQuote>
        <PostParagraph>
          <PostLink href="https://expo.dev/accounts/psygo/projects/lang101/builds/7e036e2f-8647-42b7-8062-0313b29aba27">
            Lang101
          </PostLink>{" "}
          is the fusion of{" "}
          <PostLink href="https://en.wikipedia.org/wiki/Anki">
            Anki
          </PostLink>
          , a statistical rating system &mdash; in this
          case,{" "}
          <PostLink href="https://en.wikipedia.org/wiki/Elo_rating_system">
            Elo
          </PostLink>{" "}
          &mdash; and social features, all in the context of
          language learning. I&apos;ve also taken quite a
          bit of inspiration from{" "}
          <PostLink href="https://101weiqi.com">
            101weiqi
          </PostLink>
          , a popular website for practicing Go (board game)
          problems.
        </PostParagraph>
        <PostUnorderedList>
          <li>Anki</li>
          <li>A Statistical Rating Sytem</li>
          <li>Social features</li>
        </PostUnorderedList>
        <PostImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 1.png"
          height={300}
          width={250}
          className="rounded-lg border border-gray-200"
        >
          <p>
            Lang101&apos;s landing page. For now, I&apos;m
            using this website&apos;s logo as a placeholder.
          </p>
        </PostImageWithLegend>
        <PostParagraph>
          The Elo system is a way for us to not depend on
          human rating anymore, which is a very common
          problem in language learning. And that problem is
          manifold, as it is a burden on the instructors
          while also creating a less engaging experience for
          the learners. A more accurate difficulty rating
          system also reflects the real world much better,
          so the student&apos;s learning experience can only
          improve.
        </PostParagraph>
        <PostParagraph>
          Anki does feature a rating system, typically based
          on the user&apos;s difficulty in recalling an
          answer. However, I find that quite lacking in
          terms of granularity, very subjective, and quite
          tiring, as not only will you have to practice the
          cards but also worry about how to classify your
          answers.
        </PostParagraph>
        <PostParagraph>
          Lang101&apos;s rating system is based on numbers,
          starting from around 1000, going up or down
          according to the user&apos;s answers. If the user
          happens to solve a difficult exercise with respect
          to his or her rating, the points reward will be
          bigger than if the exercise were easier. In that
          way, the whole system is self-adjusting, across
          all users and exercises.
        </PostParagraph>
        <PostParagraph>
          Besides the key feature of a rating syste, Lang101
          also offers:
        </PostParagraph>
        <PostUnorderedList>
          <li>Per-language question filtering</li>
          <li>Leaderboards</li>
          <li>History of solved exercises</li>
          <li>Comments on exercises</li>
          <li>Ratings on exercises</li>
          <li>Rating graphs</li>
          <li>Exercise list creation</li>
          <li>User following and messaging</li>
        </PostUnorderedList>
        <PostImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 2.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <p>The &quot;Exercises&quot; page on the app.</p>
        </PostImageWithLegend>
        <PostImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 4.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <p>
            The &quot;History&quot; page on Lang101, on dark
            mode.
          </p>
        </PostImageWithLegend>
      </PostSection>
    </Post>
  )
}
