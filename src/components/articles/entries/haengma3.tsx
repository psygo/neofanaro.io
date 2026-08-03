import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleSectionTitle,
  ArticleYouTubeIframe,
} from "../articleContent"
import { ArticlePDFViewer } from "@components/articles/articlePDFViewer"
import { GoDiagram } from "../goDiagram"

export function Haengma3({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Even though I typically say the Nihon Kiin&apos;s{" "}
          <ArticleLink
            internal
            href="/articles/sugeundaesajeon"
          >
            Tesuji Encyclopedia
          </ArticleLink>{" "}
          was the book with the most impact on me during my
          one-year stay in Asia between 2025 and 2026, the
          Haengma series is definitely a close second.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/haengma3/haengma_3_book_cover.png"
          height={100}
          width={225}
          className="rounded-lg"
        >
          <ArticleParagraph>
            Haengma 행마 3, from{" "}
            <ArticleLink href="https://joyschooledu.com/shop/item.php?it_id=1751265282">
              Joy School
            </ArticleLink>
            .
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Haengma 행마 is the Korean equivalent to{" "}
          <em>suji</em>&nbsp;筋 in Japanese, and is usually
          translated as &quot;flow&quot;. The precise
          definition behind that cryptic term is condemned
          to be an eternal debate, with even experience
          Korean pros and teachers who wrote books on the
          topic not agreeing on what it means.
        </ArticleParagraph>
        <ArticleParagraph>
          A friend of mine from Romania, Petru Oancea 4d
          EGF, centered his masters thesis &mdash; for the
          Department of Baduk Studies at Myongji University
          &mdash; around the idea that haengma might be
          analogous to Nicholas Nassim Taleb&apos;s concept
          of{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Antifragility">
            antifragility
          </ArticleLink>
          , which describes things that gain or learn from
          adversity, improving from challenges.
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/q_uCoJTmRGk"
          title="O Tesuji-Mor"
        />
        <ArticleParagraph>
          Indeed, correct haengma or flow does have a
          &quot;counter&quot; feeling. When attacked by the
          opponent, with proper haengma, our group becomes
          more resilient, and the opposing poke is rendered
          as a loss. On the other hand, when we attack with
          proper haengma, our opponent&apos;s shape, if not
          defended correctly, feels as if it collapses by
          itself.
        </ArticleParagraph>
        <ArticleParagraph>
          One of the best examples of that dynamic is the
          first exercise in the book:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/1.svg"
          width={375}
          height={375}
          diaNumber={1}
        >
          <ArticleParagraph>
            Should you connect at A?
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Typically, we should strive for something better
          than simply connecting at A and accepting the
          ensuing empty triangle.
        </ArticleParagraph>
        <ArticleParagraph>
          That position could be a result of a joseki, and
          most positions in the Haengma series come from
          realistic scenarios:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/2.svg"
          width={375}
          height={375}
          diaNumber={2}
        >
          <ArticleParagraph>
            A joseki originating the same position.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          Counter-ataring here is the correct solution.
          Black&apos;s shape might look too fragile, but it
          is actually much more resilient than it seems. The
          key move to remember is Black 3 in dia. 3.
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/3.svg"
          width={375}
          height={375}
          diaNumber={3}
        >
          <ArticleParagraph>
            Black 3 locks White in.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          If White tries to cut Black, the end result is a
          clean Black wall on the outside, and damage to the
          outside stone:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/4.svg"
          width={375}
          height={375}
          diaNumber={4}
        >
          <ArticleParagraph>
            White fails to cut, while weakening the A stone.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          From dia. 4, White doesn&apos;t accomplish much,
          and Black can choose how to reinforce the outside,
          from B to E &mdash; D is best in this case.
        </ArticleParagraph>
        <ArticleParagraph>
          Interestingly, though, at the beginning of the
          game especially, AI isn&apos;t in favor of that
          stylish a sequence, preferring the empty triangle
          connection:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/5.svg"
          width={375}
          height={375}
          diaNumber={5}
        >
          <ArticleParagraph>
            AI prefers the empty triangle.
          </ArticleParagraph>
        </GoDiagram>
        <ArticleParagraph>
          In Korea, the Haengma series is not only an
          exercise book. It&apos;s used as a way to inspect
          and develop the student&apos;s techniques. At{" "}
          <ArticleLink internal href="dowon-pairgo">
            Flower Baduk
          </ArticleLink>
          , for example, students debate answers with their
          pro teachers. AI doesn&apos;t evaluate this
          specific technique to be worth it for this joseki
          context, but it&apos;s still a useful haengma.
        </ArticleParagraph>
        <ArticleParagraph>
          AI would be satisfied with the dumpling in dia. 6,
          considering the whole sequence a 2-point loss for
          Black, probably because the A stone is then
          hanging.
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/6.svg"
          width={375}
          height={375}
          diaNumber={6}
        >
          <ArticleParagraph>
            AI is satisfied with poking a little bit,
            despite the dumpling shape.
          </ArticleParagraph>
        </GoDiagram>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionTitle>
          Haengma 3 in PDF
        </ArticleSectionTitle>
        <ArticleParagraph>
          <ArticleLink href="https://joyschooledu.com/shop/item.php?it_id=1751265282">
            Joyschool&apos;s Haengma 3
          </ArticleLink>{" "}
          might be the best volume in the series, with most
          students experiencing a sharp increase in their Go
          skills after finishing it. I will eventually
          transcribe Haengma 4 and the other volumes &mdash;
          I wish there were more than 4 volumes! Haengma 4
          goes up to Fox 7d only, skill-wise &mdash;, but
          here&apos;s Haengma 3 in PDF, with vector
          diagrams.
        </ArticleParagraph>
        <ArticleBlockQuote>
          <ArticleParagraph>
            If you like workbooks, I suggest the{" "}
            <ArticleLink href="https://101books.github.io/">
              101books
            </ArticleLink>{" "}
            project, which extracted problems from the{" "}
            <ArticleLink href="https://www.101weiqi.com/">
              101weiqi
            </ArticleLink>{" "}
            website, and programmatically turned them into
            books.
          </ArticleParagraph>
        </ArticleBlockQuote>
        <ArticlePDFViewer src="/articles/haengma3/haengma_3.pdf" />
      </ArticleSection>
    </Article>
  )
}
