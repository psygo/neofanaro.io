import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostImageWithLegend,
  PostBlockQuote,
  PostUnorderedList,
  PostSectionTitle,
  PostYouTubeIframe,
} from "@components/posts/post"

export function Lang101({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostBlockQuote>
          <p>
            For now, the app version of Lang101 is in{" "}
            <em>alpha</em> testing, do message me if you
            would like to join:{" "}
            <PostLink href="mailto:philippefanaro@gmail.com">
              philippefanaro@gmail.com
            </PostLink>
            !
          </p>
          <p>
            But, in the meantime, Lang101 is also available
            through a{" "}
            <PostLink href="https://lang101.expo.app/">
              web interface
            </PostLink>
            .
          </p>
        </PostBlockQuote>
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
        <div className="mt-8"></div>
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
        <PostParagraph>
          One future leap for the app would be having AI
          monitor the student&apos;s progress and then
          create exercises on the go based on his or her
          difficulties. That might become a paid
          subscription service though, as AI services are
          currently not free.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/lang101/Furigana.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <p>
            For languages such as Chinese and Japanese, even
            for native speakers, it&apos;s very common for
            text to have a top row guiding the pronunciation
            of a symbol. That feature is already present in
            Lang101.
          </p>
        </PostImageWithLegend>
        <PostParagraph>
          Anki (暗記) means &quot;learning by heart&quot; or
          &quot;rote memorization&quot; in Japanese, and its
          respective software was created by an Australian
          programmer, Damien Elmes, to learn, you guessed
          it, Japanese. The flashcard approach is very
          helpful for East Asian language-learning, as so
          much of their languages is based on and compacted
          into many different symbols, as opposed to
          deconstructed with an alphabet. However, I think
          we could also deconstruct many, more complex
          concepts and topics into bite-sized exercises too,
          and that&apos;s my bet with this app. Let&apos;s
          see if it pans out!
        </PostParagraph>
        <PostBlockQuote>
          Should I rename the app as &quot;Lanki&quot; at
          this point?
        </PostBlockQuote>
        <PostImageWithLegend
          src="/articles/lang101/Feedback.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <p>
            The profile page features a &quot;Send
            feedback&quot; button. Do share your thoughts
            and suggestions with me!
          </p>
        </PostImageWithLegend>
      </PostSection>

      <PostSection>
        <PostSectionTitle>
          On Developing Lang101 (with AI)
        </PostSectionTitle>
        <PostParagraph>
          Lang101 was almost entirely develped with{" "}
          <PostLink href="https://claude.com/product/claude-code">
            Claude Code
          </PostLink>
          . It is quite shocking how good the baseline paid
          model, Sonnet, is.
        </PostParagraph>
        <PostParagraph>
          I did have to use my software know-how in order to
          get the app to where it is, but Claude Code is
          incredibly skilled at programming, and DevOps as
          well. If I had to program this app myself, I could
          easily see the whole process stretching on to 3+
          months. Instead, the bulk of it took me only a
          couple of weeks.
        </PostParagraph>
        <PostParagraph>
          Claude Code, however, does not do well when it
          comes to UI design. Even after installing specific{" "}
          <PostLink href="https://support.claude.com/en/articles/12512176-what-are-skills">
            AI Skills
          </PostLink>{" "}
          , the results were disappointing. For handling the
          visual aspect of an app, I suggest using{" "}
          <PostLink href="https://claude.com/product/design">
            Claude Design
          </PostLink>
          . After refining the UI there, you&apos;re gonna
          be able to ask Claude to export resulting design
          as a document, such that Claude Code can implement
          it more or less precisely.
        </PostParagraph>
        <PostParagraph>
          Coming from a more than year-long hiatus, I feel
          quite frightened for the software development as a
          profession. Overall, I would much rather spend
          most of my time doing top-level work rather than
          in the muck of lower level code, either writing or
          debugging things. But how many openings for
          product managers will there be in the future if
          all programmers need to move into that
          market?{" "}
        </PostParagraph>
        <PostParagraph>
          In the meantime, at least, even our{" "}
          <s>billionaire</s> trillionaire overlord(<s>s</s>){" "}
          might be starting to become aware we need to get
          past the wage economy:
        </PostParagraph>
        <PostYouTubeIframe
          src="https://www.youtube.com/embed/8YEdm-ZTgT4"
          title="Elon Musk getting aware of how the economy might need to change in the post-AI era"
        />
      </PostSection>
    </Post>
  )
}
