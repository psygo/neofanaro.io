import { Main } from "@components/common/main"
import {
  Post,
  PostDate,
  PostLink,
  PostParagraph,
  PostSection,
  PostTags,
  PostTitle,
  PostTitleSection,
} from "@components/posts/post"
import { postCardDb } from "@components/posts/postsDb"

export default function SampleSizeAndCommonSense() {
  return (
    <Main>
      <Post>
        <PostTitleSection>
          <PostTitle>{postCardDb[1].title}</PostTitle>
          <PostDate>{postCardDb[1].date}</PostDate>
          <PostTags tags={postCardDb[1].tags} />
        </PostTitleSection>
        <PostSection>
          <PostParagraph>
            If you start digging at psychology research,
            you&apos;re very likely gonna be extremely
            disappointed at how low the sample sizes are.
          </PostParagraph>
          <PostParagraph>
            For example,{" "}
            <PostLink href="https://youtu.be/wVU_XbcDc4s">
              this video on the differences between reading
              through books or audio content
            </PostLink>{" "}
            cites articles with sample sizes which average
            30 people.
          </PostParagraph>
          <PostParagraph>
            Regardless of the researchers&apos; reasons,
            coming up with overarching conclusions about our
            behavior based on poking at so few people is
            borderline{" "}
            <PostLink href="https://en.meming.world/wiki/Putting_on_Clown_Makeup">
              clownish
            </PostLink>{" "}
            behavior, being replicated for decades in that
            specific field as well as others.
          </PostParagraph>
          <PostParagraph>
            Of course, those researchers are
            budget-constrained. And, statistically, through
            variance analysis, their sample sizes are valid.
            But that won&apos;t trump common sense. Nobody
            should change their point of view on any aspect
            of life based on research with people numbering
            on the dozens or even hundreds, however
            insignificant the topic might be.
          </PostParagraph>
          <PostParagraph>
            Some years ago, in the{" "}
            <PostLink href="https://en.wikipedia.org/wiki/Francesca_Gino">
              Harvard data scandal with professor Francesca
              Gino
            </PostLink>
            , the most baffling aspect of the whole drama
            was to me how small the samples were for a
            researcher from Harvard, in the range of low
            hundreds. It felt as if she had made quiz for
            her students and then turned it into a priming
            behavioral law she could use for her TED talks.
          </PostParagraph>
          <PostParagraph>
            And that&apos;s not to mention how psychology
            research in the West is extremely biased by
            college students. Are college students exemplary
            of anything? Are they known for representing the
            population as a whole? Are they particularly
            wise or special? No, they are just the human
            equivalent of a lab rat in the US, though much
            cheaper actually, they even pay to be there.
          </PostParagraph>
          <PostParagraph>
            Anyways, academic research is not supposed to be
            overarching when it comes to individual
            scientific articles, at least not usually. Those
            articles build on each other; over time, through
            replication and growing sample sizes, hypotheses
            become stronger, and reliable conclusions might
            be drawn out eventually. But that&apos;s not how
            research is often presented on media, be it for
            the researchers&apos; or the media outlet&apos;s
            benefit.
          </PostParagraph>
          <PostParagraph>
            Unfortunately, we haven&apos;t yet been educated
            to investigate research methods. But I have
            faith that might change soon, given how open and
            accessible information has become, with the
            internet, and especially YouTube. It might only
            take one viral video on the topic to open the
            flood gates to a revolution of awareness on this
            topic.
          </PostParagraph>
        </PostSection>
      </Post>
    </Main>
  )
}
