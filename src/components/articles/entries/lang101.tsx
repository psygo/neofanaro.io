import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleImageWithLegend,
  ArticleBlockQuote,
  ArticleUnorderedList,
  ArticleSectionTitle,
  ArticleYouTubeIframe,
} from "@components/articles/article"

export function Lang101({ article: post }: ArticleProps) {
  return (
    <Article article={post}>
      <ArticleSection>
        <ArticleBlockQuote>
          <ArticleParagraph>
            For now, the app version of Lang101 is in{" "}
            <em>alpha</em> testing, do message me if you
            would like to join!
            {/* :{" "}
            <ArticleLink href="mailto:philippefanaro@gmail.com">
              philippefanaro@gmail.com
            </ArticleLink>
            ! */}
          </ArticleParagraph>
          <ArticleParagraph>
            A first{" "}
            <ArticleLink href="https://expo.dev/accounts/psygo/projects/lang101/builds/7e036e2f-8647-42b7-8062-0313b29aba27">
              Android bundle
            </ArticleLink>{" "}
            is already openly available, while iOS has more
            security requirements for sharing builds with
            users. But, in the meantime, Lang101 is also
            available through a{" "}
            <ArticleLink href="https://lang101.expo.app/">
              web interface
            </ArticleLink>
            .
          </ArticleParagraph>
        </ArticleBlockQuote>
        <ArticleParagraph>
          I&apos;m happy to announce the release of my first
          mobile app in a long while, an idea I had been
          brewing for a long time, out of my frustrations
          with language learning apps and overall ecosystem.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 3.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <ArticleParagraph>
            The &quot;Exercises&quot; page on Lang101.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          <ArticleLink href="https://expo.dev/accounts/psygo/projects/lang101/builds/7e036e2f-8647-42b7-8062-0313b29aba27">
            Lang101
          </ArticleLink>{" "}
          is the fusion of :
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>
            <ArticleLink href="https://en.wikipedia.org/wiki/Anki">
              Anki
            </ArticleLink>{" "}
            &mdash; a flashcard app
          </li>
          <li>
            A Statistical Rating Sytem &mdash; more
            specifically,{" "}
            <ArticleLink href="https://en.wikipedia.org/wiki/Elo_rating_system">
              Elo
            </ArticleLink>
          </li>
          <li>Social Features</li>
        </ArticleUnorderedList>

        <ArticleParagraph>
          I&apos;ve also taken quite a bit of inspiration
          from{" "}
          <ArticleLink href="https://101weiqi.com">
            101weiqi
          </ArticleLink>
          , a popular website for practicing Go (board game)
          problems.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 1.png"
          height={300}
          width={250}
          className="rounded-lg border border-gray-200"
        >
          <ArticleParagraph>
            Lang101&apos;s landing page. For now, I&apos;m
            using this website&apos;s logo as a placeholder.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          A statistical rating system is self-adjusting,
          while in practice mode, both the student&apos;s
          and the exercise&apos;s ratings get readjusted
          proportionally to relative difficulty. If the
          exercise is supposedly too easy for the student,
          if the student fails it, the rating penalty is big
          while the exercise also gets a large boost to its
          rating. On the other hand, if the student solves
          it correctly, only a few points will be earned.
        </ArticleParagraph>
        <ArticleParagraph>
          By avoiding a dependence on instructors to level
          problem difficulty, not only do we relieve
          ourselves from a clunky burden, but create a more
          engaging experience, as we get challenges which
          reflect the real world much more closely.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 9.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <ArticleParagraph>
            The student loses 19 points for solving a
            problem incorrectly. The 19 points are based on
            his Elo rating prior to the question, if that
            rating had been higher, an even bigger penalty
            would be applied.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Anki does feature a rating system, typically based
          on the user&apos;s difficulty in recalling an
          answer. However, I find that quite lacking in
          terms of granularity, very subjective, and quite
          tiring, as not only will you have to practice the
          cards but also worry about how to classify your
          results.
        </ArticleParagraph>
        <ArticleParagraph>
          Besides the key feature of a rating system,
          Lang101 also offers:
        </ArticleParagraph>
        <ArticleUnorderedList>
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
        </ArticleUnorderedList>
        <div className="mt-8"></div>
        <ArticleImageWithLegend
          src="/articles/lang101/Screenshot Alpha 1.0 - 4.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <ArticleParagraph>
            Lang101&apos;s &quot;History&quot; page, on dark
            mode.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          The current version of the app also offer exercise
          variety, which will only increase over time:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>Multiple choice</li>
          <li>Type the answer</li>
          <li>Listening to a (YouTube) video</li>
        </ArticleUnorderedList>
        <ArticleParagraph>
          I have plenty more features in line for the near
          future, such as a multiplayer mode and better
          integration with Anki decks.
        </ArticleParagraph>
        <ArticleParagraph>
          At the moment, as a first seed, a lot of the
          questions have been either created by AI, or
          batch-transcribed by it, based on open-source Anki
          decks. But, as the community gets bigger, the
          human-created percentage will hopefully increase.
        </ArticleParagraph>
        <ArticleParagraph>
          One future leap for the app would be having AI
          monitor the student&apos;s progress and then
          create exercises on the go based on his or her
          difficulties. That might become a paid
          subscription service though, as AI services are
          currently not free.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/lang101/Furigana.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <ArticleParagraph>
            For languages such as Chinese and Japanese, even
            for native speakers, it&apos;s very common for
            text to have a top row guiding the pronunciation
            of a symbol. That feature is already present in
            Lang101.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
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
        </ArticleParagraph>
        <ArticleBlockQuote>
          Should I rename the app as &quot;Lanki&quot; at
          this point?
        </ArticleBlockQuote>
        <ArticleImageWithLegend
          src="/articles/lang101/Feedback.png"
          height={300}
          width={250}
          className="rounded-lg"
        >
          <ArticleParagraph>
            The profile page features a &quot;Send
            feedback&quot; button. Do share your thoughts
            and suggestions with me!
          </ArticleParagraph>
        </ArticleImageWithLegend>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionTitle>
          On Developing Lang101 (with AI)
        </ArticleSectionTitle>
        <ArticleParagraph>
          Lang101 was almost entirely develped with{" "}
          <ArticleLink href="https://claude.com/product/claude-code">
            Claude Code
          </ArticleLink>
          , using React Native. It is quite shocking how
          good the baseline paid model, Sonnet, is.
        </ArticleParagraph>
        <ArticleParagraph>
          I did have to use my software know-how in order to
          get the app to where it is, so it wasn&apos;t a
          pure &quot;vibe coding&quot; project. Claude is
          incredibly skilled at programming, and DevOps as
          well, if I had to program this app myself, I could
          easily see the whole process stretching on to 3+
          months. Instead, the bulk of it took me only a
          couple of weeks &mdash; plus a week or two to get
          through Apple&apos;s and Google&apos;s obnoxious
          verification processes for newly created developer
          accounts.
        </ArticleParagraph>
        <ArticleParagraph>
          Claude Code, however, does not do well when it
          comes to UI design. Even after installing specific{" "}
          <ArticleLink href="https://support.claude.com/en/articles/12512176-what-are-skills">
            AI Skills
          </ArticleLink>
          , the results were disappointing. For handling the
          visual aspect of an app, I suggest using{" "}
          <ArticleLink href="https://claude.com/product/design">
            Claude Design
          </ArticleLink>
          . After refining the UI there, you&apos;re gonna
          be able to ask Claude to export resulting design
          as a document, such that Claude Code can implement
          it more or less precisely.
        </ArticleParagraph>
        <ArticleParagraph>
          Coming from a more than year-long hiatus, I feel
          quite frightened for the software development as a
          profession. Overall, I would much rather spend
          most of my time doing top-level work rather than
          in the muck of lower level code, either writing or
          debugging things. But how many openings for
          product managers will there be in the future if
          all programmers need to move into that
          market?{" "}
        </ArticleParagraph>
        <ArticleParagraph>
          In the meantime, at least, even our{" "}
          <s>billionaire</s> trillionaire overlord(<s>s</s>){" "}
          might be starting to become aware we need to get
          past the wage economy:
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/8YEdm-ZTgT4"
          title="Elon Musk getting aware of how the economy might need to change in the post-AI era"
        />
      </ArticleSection>
    </Article>
  )
}
