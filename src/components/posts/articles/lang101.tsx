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
          with language learning apps and overall ecosystem.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 3.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <p>The &quot;Exercises&quot; page on Lang101.</p>
        </PostImageWithLegend>
        <PostBlockQuote>
          Lang101 also features a{" "}
          <PostLink href="https://lang101.expo.app/">
            web interface
          </PostLink>
          .
        </PostBlockQuote>
        <PostParagraph>
          <PostLink href="https://expo.dev/accounts/psygo/projects/lang101/builds/7e036e2f-8647-42b7-8062-0313b29aba27">
            Lang101
          </PostLink>{" "}
          is the fusion of :
        </PostParagraph>
        <PostUnorderedList>
          <li>
            <PostLink href="https://en.wikipedia.org/wiki/Anki">
              Anki
            </PostLink>
          </li>
          <li>
            A Statistical Rating Sytem &mdash; more
            specifically,{" "}
            <PostLink href="https://en.wikipedia.org/wiki/Elo_rating_system">
              Elo
            </PostLink>
          </li>
          <li>Social Features</li>
        </PostUnorderedList>

        <PostParagraph>
          I&apos;ve also taken quite a bit of inspiration
          from{" "}
          <PostLink href="https://101weiqi.com">
            101weiqi
          </PostLink>
          , a popular website for practicing Go (board game)
          problems.
        </PostParagraph>
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
          A statistical rating system is self-adjusting,
          while in practice mode, both the student&apos;s
          and the exercise&apos;s ratings get readjusted
          proportionally to relative difficulty. If the
          exercise is supposedly too easy for the student,
          if the student fails it, the rating penalty is big
          while the exercise also gets a large boost to its
          rating. On the other hand, if the student solves
          it correctly, only a few points will be earned.
        </PostParagraph>
        <PostParagraph>
          By avoiding a dependence on instructors to level
          problem difficulty, not only do we relieve
          ourselves from a clunky burden, but create a more
          engaging experience, as we get challenges which
          reflect the real world much more closely.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 9.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <p>
            The student loses 19 points for solving a
            problem incorrectly. The 19 points are based on
            his Elo rating prior to the question, if that
            rating had been higher, an even bigger penalty
            would be applied.
          </p>
        </PostImageWithLegend>
        <PostParagraph>
          Anki does feature a rating system, typically based
          on the user&apos;s difficulty in recalling an
          answer. However, I find that quite lacking in
          terms of granularity, very subjective, and quite
          tiring, as not only will you have to practice the
          cards but also worry about how to classify your
          results.
        </PostParagraph>
        <PostParagraph>
          Besides the key feature of a rating system,
          Lang101 also offers:
        </PostParagraph>
        <PostUnorderedList>
          <li>Per-language question filtering</li>
          <li>Per-language question prompt filtering</li>
          <li>Leaderboards</li>
          <li>History of solved exercises</li>
          <li>Comments on exercises</li>
          <li>Ratings on exercises</li>
          <li>Rating graphs</li>
          <li>Exercise list creation</li>
          <li>User following</li>
          <li>User messaging</li>
        </PostUnorderedList>
        <PostImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 4.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <p>
            Lang101&apos;s &quot;History&quot; page, on dark
            mode.
          </p>
        </PostImageWithLegend>
        <PostParagraph>
          The current version of the app also offer exercise
          variety, which will only increase over time:
        </PostParagraph>
        <PostUnorderedList>
          <li>Multiple choice</li>
          <li>Type the answer</li>
          <li>Listening to a (YouTube) video</li>
        </PostUnorderedList>
        <PostParagraph>
          I have plenty more features in line for the near
          future, such as a multiplayer mode and better
          integration with Anki decks.
        </PostParagraph>
        <PostParagraph>
          At the moment, as a first seed, a lot of the
          questions have been either created by AI, or
          batch-transcribed by it, based on open-source Anki
          decks. But, as the community gets bigger, the
          human-created percentage will hopefully increase.
        </PostParagraph>
      </PostSection>
    </Post>
  )
}
