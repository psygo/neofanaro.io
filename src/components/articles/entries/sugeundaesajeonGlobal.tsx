import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleBlockQuote,
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleSectionTitle,
  ArticleSubSection,
  ArticleSubSectionTitle,
  ArticleTableOfContents,
  DiagramRef,
  ImageLegend,
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
} from "../../goViewer/exports"

export function SugeundaesajeonGlobal({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleSectionTitle>Context</ArticleSectionTitle>
        <ArticleParagraph>
          On a previous post,{" "}
          <ArticleLink
            internal
            href="/articles/sugeundaesajeon"
          >
            I shared the workbook for the Nihon Kiin&apos;s{" "}
            <em>Tesuji Encyclopedia</em>
          </ArticleLink>
          . However, still, most people are probably unaware
          that problem collection features two parts: a
          first for the expected, local tesuji problems; but
          also a second, for global problems.
        </ArticleParagraph>
        <ArticleParagraph>
          At a first glance, those might seem like just some
          extra problems to contextualize what the reader
          has learned through the first, core section.
          That&apos;s not the case. The problems in that
          latter section grow on me every time I take a look
          at them, and I believe solving them is perhaps an
          even truer mark of expert skill than solving the
          more standard problems.
        </ArticleParagraph>
        <ArticleParagraph>
          That&apos;s not to say they don&apos;t have issues
          though. Many of those problems are outdated with
          respect to AI, of course, and some even show wrong
          ideas for solutions. Nonetheless, going through
          those challenges and identifying imperfections
          within the problems are great training
          experiences.
        </ArticleParagraph>
        <ArticleBlockQuote>
          The Tesuji Encyclopedia is{" "}
          <ArticleLink href="https://www.101weiqi.com/book/3/">
            Book #3
          </ArticleLink>{" "}
          on 101weiqi.
        </ArticleBlockQuote>
        <ArticleImageWithLegend
          src="/articles/sugeundaesajeon-global/sugeundaesajeon_downscaled.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            The cover for the{" "}
            <ArticleLink href="https://drive.google.com/file/d/1GE-ejbqXoILEsUC9vSdguuty-tZy72RH/view?usp=drive_link">
              Chinese edition of the Nihon Kiin&apos;s{" "}
              <em>Tesuji Encyclopedia</em>
            </ArticleLink>
            .
          </ImageLegend>
        </ArticleImageWithLegend>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionTitle>Problems</ArticleSectionTitle>

        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2479
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            This first problem is a brilliant illustration
            of flow and interaction effects.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2479.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2479, White to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            We have to link the forcing moves on both sides
            in order to have them collide:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2479_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black needs to save one side, saving both
              isn&apos;t possible.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            If Black tries to save it all...
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2479_2.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black fails in a ladder.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>

        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2478
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Some problems in the book, though, are
            definitely quite... problematic. Not for their
            setup, but for their solution.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2478, White to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            As a not-so-strong player, I cannot approve the
            proposed solution here, and{" "}
            <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/57100eca-ce7a-4264-a70a-5cc112a4c448">
              neither can AI
            </ArticleLink>
            , which estimates the loss from move 1 on Dia.{" "}
            <DiagramRef label="2478_1" /> to be around 2.3
            points.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
            />
            <GoViewerControls />
            <GoViewerLegend>
              The book&apos;s solution to problem 2478.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            If there&apos;s a vital point on the top,
            it&apos;s 1 on Dia.{" "}
            <DiagramRef label="2478_2" />, not 1 on Dia.{" "}
            <DiagramRef label="2478_1" />.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478_2.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
            />
            <GoViewerControls />
            <GoViewerLegend>
              White strikes at the vital point to stay
              minimally safe, before taking the crucial
              point of 11.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Black could try to resist, and might even kill
            White, but at what cost:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478_4.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black should have even bailed out from this
              fight with 3 at White 4. Crawling on the
              second line is so short on liberties it&apos;s
              still difficult to kill White.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            According to AI, the top is still very hard to
            kill, so, surprisingly, it would choose to play
            11 on Dia. <DiagramRef label="2478_2" />
            &nbsp;first. If Black, tries to kill the top,
            only then does the book&apos;s tesuji shine:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2478_3.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
            />
            <GoViewerControls />
            <GoViewerLegend>
              The book&apos;s tesuji shines even brighter
              when we tenuki first. Of course, this demands
              outworldly skill on White&apos;s part.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>

        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2482
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Black has a potentially troublesome capture on
            the right side. How can White use it?
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2482.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2482, White to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            White uses a forcing move on the right with 1 to
            then drive the A stones, on Dia.{" "}
            <DiagramRef label="2482_1" />. Due to the
            shortage of liberties, disconnecting
            White&apos;s group in the B direction isn&apos;t
            possible. And Black 8 is necessary, given the C
            weakness.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2482_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              White pierces through the right side.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>

        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2534
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Here&apos;s another problem with great
            techniques from both sides, especially when
            considering the AI refutations.
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2534.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2534, Black to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            The book recommends trying to squeeze White from
            below, reinforcing the A group:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2534_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              White is squeezed, while Black reinforces the
              A group.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/4ec5a4cb-f1ea-4231-95c1-5ca00101eae5">
              AI thinks White shouldn&apos;t follow
              Black&apos;s plans
            </ArticleLink>
            . If you&apos;re gonna get squeezed at the
            beginning of the game, and all you have to show
            for it is second line territory, things did not
            go so well.
          </ArticleParagraph>
          <ArticleParagraph>
            Also, on another topic, AI dislikes the joseki
            on the top-left quite a bit; among many other
            reasons, Black should at least turn at B instead
            of 19.
          </ArticleParagraph>
          <ArticleParagraph>
            AI recommends resisting with an interesting
            technique which pops up in this joseki &mdash;
            and which appeared in my game against Uyama
            Hissao during my{" "}
            <ArticleLink
              internal
              href="second-brazil-open-2026"
            >
              2nd place run in the 2026 Brazilian Go
              Congress
            </ArticleLink>{" "}
            &mdash;, with White 19:
          </ArticleParagraph>
          <GoViewer
            label="fatal-joseki"
            sgf="/articles/sugeundaesajeon-global/joseki_uyama.sgf"
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers={true}
              region={{
                minRow: 9,
                maxRow: 18,
                minCol: 9,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              A joseki illustrating the key move to resist,
              White 19.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Translating that technique to problem 2534, we
            end up with this sequence, according to AI:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2534_2.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              White&apos;s AI resistance, after Black 1.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            However, that&apos;s not the optimal sequence
            for both sides. This is what AI recommends as
            one of the optimal solutions:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2534_3.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              AI&apos;s optimal solution for problem 2534.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            If Black insists on trying to kill, White has a
            tesuji up its sleeve, which hinges largely on
            counting the ko threats:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2534_4.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              White creates a ko with 8 as a sacrifice.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Problem 2516
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            This one is more direct than most of the other
            global problems:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2516.sgf">
            <GoViewerBoard interactive={true} />
            <GoViewerLegend>
              Problem 2516, Black to play.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Through a clever sacrifice, Black manages to
            find a way out, potentially killing White&apos;s
            A group:
          </ArticleParagraph>
          <GoViewer sgf="/articles/sugeundaesajeon-global/2516_1.sgf">
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
            />
            <GoViewerControls />
            <GoViewerLegend>
              As Black escapes, White&apos;s A group is
              going to suffer tremendously, if it
              doesn&apos;t outright just die.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>
        <ArticleSection>
          <ArticleSectionTitle>Outro</ArticleSectionTitle>
          <ArticleParagraph>
            What do you think about this sample of the
            global problems? Leave the ones you found best
            in the comments, perhaps in the future I might
            add them to this article.
          </ArticleParagraph>
        </ArticleSection>
      </ArticleSection>
    </Article>
  )
}
