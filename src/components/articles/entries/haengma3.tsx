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
  ImageLegend,
} from "../articleContent"
import { ArticlePDFViewer } from "@components/articles/articlePDFViewer"
import { GoDiagram, GoDiagramLegend } from "../goDiagram"

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
          was the book with the most impact on me during{" "}
          <ArticleLink
            internal
            href="/articles/one-year-in-asia"
          >
            my one-year stay in Asia between 2025 and 2026
          </ArticleLink>
          , the Haengma series is definitely a close second.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/haengma3/haengma_3_book_cover.png"
          height={100}
          width={225}
          className="rounded-lg"
        >
          <ImageLegend>
            Haengma 행마 3, from{" "}
            <ArticleLink href="https://joyschooledu.com/shop/item.php?it_id=1751265282">
              Joy School
            </ArticleLink>
            .
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Haengma 행마 is the Korean equivalent to{" "}
          <em>suji</em>&nbsp;筋 in Japanese, and is usually
          translated as &quot;flow&quot;. The precise
          definition behind that cryptic term is condemned
          to be an eternal debate, with even experienced
          Korean pros and teachers who wrote books on the
          topic not agreeing on what it means.
        </ArticleParagraph>
        <ArticleParagraph>
          A dear friend of mine from Romania, Petru Oancea
          4d EGF, centered his masters thesis &mdash; for
          the Department of Baduk Studies at Myongji
          University &mdash; around the idea that haengma
          might be analogous to Nicholas Nassim Taleb&apos;s
          concept of{" "}
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
          And indeed, correct haengma or flow does have a
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
          first exercise in the Haengma 3 book:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/1.svg"
          width={375}
          height={375}
          diaNumber={1}
          className="-mt-3"
        >
          <GoDiagramLegend>
            Should you connect at A?
          </GoDiagramLegend>
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
          className="-mt-3"
        >
          <GoDiagramLegend>
            A joseki originating the same position.
          </GoDiagramLegend>
        </GoDiagram>
        <ArticleParagraph>
          White only tries to cut because of the
          tiger&apos;s mouth. Otherwise, Black can simply
          capture the cutting stone, instead of seemingly
          playing at A in dia. 3.
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/2.1.svg"
          width={375}
          height={375}
          diaNumber={3}
          className="-mt-3"
        >
          <GoDiagramLegend>
            How the tiger&apos;s mouth changes things.
          </GoDiagramLegend>
        </GoDiagram>
        <ArticleParagraph>
          Counter-ataring here is the correct solution.
          Black&apos;s shape might look too fragile, but it
          is actually much more resilient than it seems. The
          key move to remember is Black 3 in dia. 4.
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/3.svg"
          width={375}
          height={375}
          diaNumber={4}
          className="-mt-3"
        >
          <GoDiagramLegend>
            Black 3 locks White in.
          </GoDiagramLegend>
        </GoDiagram>
        <ArticleParagraph>
          If White tries to cut Black, the end result is a
          clean Black wall on the outside, and damage to the
          outside stone at A:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/4.svg"
          width={375}
          height={375}
          diaNumber={5}
          className="-mt-3"
        >
          <GoDiagramLegend>
            White fails to cut, while weakening the A stone.
          </GoDiagramLegend>
        </GoDiagram>
        <ArticleParagraph>
          From dia. 5, White doesn&apos;t accomplish much,
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
          diaNumber={6}
          className="-mt-3"
        >
          <GoDiagramLegend>
            AI prefers the empty triangle.
          </GoDiagramLegend>
        </GoDiagram>
        <ArticleParagraph>
          In Korea, the Haengma series is not only an
          exercise book. It&apos;s used as a way to inspect
          and develop the student&apos;s techniques. At{" "}
          <ArticleLink internal href="dowon-pairgo">
            Flower Baduk
          </ArticleLink>
          , for example, students debate answers with their
          pro teachers.
        </ArticleParagraph>
        <ArticleParagraph>
          AI doesn&apos;t evaluate this specific technique
          to be worth it for this joseki context though, but
          it&apos;s still a useful haengma. If Black tried
          the counter-atari, AI would be satisfied with the
          dumpling in dia. 7, considering the whole sequence
          a 2-point loss for Black, probably because the A
          stone is then hanging.
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/6.svg"
          width={375}
          height={375}
          diaNumber={7}
          className="-mt-3"
        >
          <GoDiagramLegend>
            AI is satisfied with poking a little bit,
            despite the dumpling shape.
          </GoDiagramLegend>
        </GoDiagram>
        <ArticleParagraph>
          If Black tries something more ambitious, it leaves
          White with no choice but to escalate the fight:
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/6.1.svg"
          width={375}
          height={375}
          diaNumber={8}
          className="-mt-3"
        >
          <GoDiagramLegend>
            White escalates the fight.
          </GoDiagramLegend>
        </GoDiagram>
        <ArticleParagraph>
          Much like other workbook series, the Haengma books
          don&apos;t come with answers. You could buy the
          answer book separately, but the idea is to have
          the student think past just the answer, discussing
          the many possibilities and implications of
          different moves. And, as we&apos;ve seen with
          AI&apos;s sequence for the first problem, new,
          updated answers to these problems are popping up
          everyday.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionTitle>
          Haengma 3 in PDF
        </ArticleSectionTitle>
        <ArticleParagraph>
          <ArticleLink href="https://joyschooledu.com/shop/item.php?it_id=1751265282">
            Joy School&apos;s Haengma 3
          </ArticleLink>{" "}
          might be the best volume in the series, with most
          students experiencing a sharp increase in their Go
          skills after finishing it. I will eventually
          transcribe Haengma 4 and the other volumes &mdash;
          I wish there were more than 4 volumes! Haengma 4
          goes up to Fox 7d only, skill-wise &mdash;, but
          here&apos;s Haengma 3 in PDF, with vector
          diagrams. The open source code used to generate
          this book can be inspected here:{" "}
          <ArticleLink href="https://github.com/psygo/tsumego_workbooks">
            @psygo/tsumego_workbooks
          </ArticleLink>
          .
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
