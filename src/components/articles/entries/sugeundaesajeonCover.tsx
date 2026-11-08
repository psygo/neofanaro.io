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
  ArticleYouTubeIframe,
  DiagramRef,
  ImageLegend,
} from "../articleContent"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerLegend,
} from "../../goViewer/exports"

export function SugeundaesajeonCover({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleSectionTitle>Context</ArticleSectionTitle>
        <ArticleParagraph>
          On a previous article, I shared{" "}
          <ArticleLink
            internal
            href="/articles/sugeundaesajeon"
          >
            my edition of the Tesuji Encyclopedia
          </ArticleLink>
          , for which I also created a different cover than
          the original, featuring 4 remarkable problems in
          that problem collection. Let&apos;s take a look at
          what makes those problems special.
        </ArticleParagraph>
        <ArticleBlockQuote>
          The Tesuji Encyclopedia is{" "}
          <ArticleLink href="https://www.101weiqi.com/book/3/">
            Book #3
          </ArticleLink>{" "}
          on 101weiqi.
        </ArticleBlockQuote>
        <ArticleImageWithLegend
          src="/articles/sugeundaesajeon-cover/sugeundaesajeon_my_cover.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            The cover for my edition of the Tesuji
            Encyclopedia. Imagine the problems isolated into
            quadrants.
          </ImageLegend>
        </ArticleImageWithLegend>
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
          <ArticleBlockQuote>
            In another Tesuji Encyclopedia article, I also
            went through{" "}
            <ArticleLink
              internal
              href="/articles/sugeundaesajeon-global"
            >
              its global problems
            </ArticleLink>
            .
          </ArticleBlockQuote>
        </ArticleImageWithLegend>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>Problems</ArticleSectionTitle>
        <ArticleParagraph>
          Imagine the problems on my cover as isolated in
          their respective quadrants. And in this
          encyclopedia, you need to figure out whose turn it
          is.
        </ArticleParagraph>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Top-Left
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            In a regular game, I doubt most people would
            have spotted there&apos;s something we can do
            here. But this wouldn&apos;t be featured in an
            encyclopedia if it didn&apos;t have anything
            special behind it.
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_left.sgf"
            width={350}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 11,
                minCol: 0,
                maxCol: 11,
              }}
            />
            <GoViewerLegend>
              The top-left problem on my cover. That&apos;s
              problem{" "}
              <ArticleLink href="https://www.101weiqi.com/q/501513/">
                Q-501,513
              </ArticleLink>{" "}
              on 101weiqi.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            As usual, we must assume the ladder works for
            Black, so escaping with the A stone in Dia.{" "}
            <DiagramRef label="top_left_1" />
            &nbsp;isn&apos;t really a possibility.
          </ArticleParagraph>
          <ArticleParagraph>
            Playing the typical atari is too simple for a
            tesuji problem. We&apos;re talking about
            brilliant moves here after all. That sort of
            thinking helps a ton when trying to solve
            tsumegos, by the way.
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_left_1.sgf"
            width={350}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 11,
                minCol: 0,
                maxCol: 11,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black&apos;s stone at 2 helps a lot with
              whatever white tries at the top.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            There&apos;s a chance Black would have captured
            at B instead of 2 in Dia.{" "}
            <DiagramRef label="top_left_1" />, especially
            since it eliminates the need for a working
            ladder. However, Black would then probably have
            to suffer the atari at White 2 instead.
            That&apos;s a huge hint:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_left_2.sgf"
            width={350}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 11,
                minCol: 0,
                maxCol: 11,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              With the cross-atari here, Black&apos;s shape
              collapses.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Black ends up in a lot of trouble. Connecting
            the ko is terrible shape, and White gets an
            extra stone at the top. But fighting that ko is
            an unthinkable flower ko.
          </ArticleParagraph>
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Top-Right
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            Next is a problem which tests out your side
            life-and-death and &quot;my opponent&apos;s best
            move is my best move &quot; thinking &mdash; the
            latter being what Inseong Hwang 8d EGF calls{" "}
            <ArticleLink href="https://eyd.yunguseng.com/videos/index.php?id=686">
              &quot;1-2-3 reading&quot;
            </ArticleLink>
            .
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerLegend>
              The top-right problem on my cover. That&apos;s
              problem{" "}
              <ArticleLink href="https://www.101weiqi.com/q/47377/">
                Q-47,377
              </ArticleLink>{" "}
              on 101weiqi.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Just sliding isn&apos;t enough to live. White
            will reduce Black&apos;s shape down to the
            famous 2-2-2, which is very often dead on the
            side, especially when the triangle-marked stones
            have no external liberties:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right_1.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Sliding isn&apos;t enough.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            White should be very careful here. Just blocking
            in Dia. <DiagramRef label="top_right_6" /> seems
            to work at first, but Black can create a ko:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right_6.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black can create a ko if White doesn&apos;t
              push first.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Black&apos;s peep, 1 on Dia.{" "}
            <DiagramRef label="top_right_2" />, is much
            better. The naïve solution would go like this:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right_2.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              The naïve solution from the peep.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            With 3 on <DiagramRef label="top_right_2" />,
            Black expands its internal shape a bit beyond
            the 2-2-2 shape, which guarantees life. However,
            there&apos;s no reason to be so kind, White will
            push first, as in Dia.{" "}
            <DiagramRef label="top_right_3" />. If you then
            block, before connecting directly, White will
            hit the vital point first, and we end up with
            the 2-2-2 once again.
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right_3.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              White pushes first. If Black accepts it, we go
              back to the 2-2-2 shape.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Note that Black can&apos;t cut through directly,
            otherwise White will connect underneath:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right_7.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black cuts through, but White connects
              underneath.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Now we finally get to the crux of the problem
            actually, the reason I chose this specific
            tsumego. Can you apply 1-2-3 reading here?
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right_4.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black 3, the key move.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            White has no choice but to connect, the corner
            is even bigger than the side kill after all. And
            then Black can finally reach the 2-2-3 shape and
            live.
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/top_right_5.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 7,
                minCol: 6,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              The correct solution to the top-right problem.
            </GoViewerLegend>
          </GoViewer>
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Bottom-Left
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            This problem&apos;s solution I couldn&apos;t see
            coming at all. But I&apos;ve tried it on some
            friends and the results were surprising. Are you
            able to find the brilliant move here?
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_left.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 9,
                maxRow: 18,
                minCol: 0,
                maxCol: 10,
              }}
            />
            <GoViewerLegend>
              The bottom-left problem. That&apos;s problem{" "}
              <ArticleLink href="https://www.101weiqi.com/q/47736/">
                Q-47,736
              </ArticleLink>{" "}
              on 101weiqi.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            The variation attempts for this problem are a
            very good way of improving your skills as well.
          </ArticleParagraph>
          <ArticleParagraph>
            For example, if you try the typical ko shape in
            the corner:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_left_1.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 9,
                maxRow: 18,
                minCol: 0,
                maxCol: 10,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Trying out a typical kosumi tesuji in the
              corner won&apos;t work for Black.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            It looks like it works, but, nope, it
            doesn&apos;t. White 8 in Dia.{" "}
            <DiagramRef label="bottom_left_1" />
            &nbsp;guarantees Black can&apos;t play at A.
          </ArticleParagraph>
          <ArticleParagraph>
            White needs to be careful about how to kill. If
            White tries a more direct liberty reduction
            instead, as in Dia.{" "}
            <DiagramRef label="bottom_left_2" />, we get a
            ko.
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_left_2.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 9,
                maxRow: 18,
                minCol: 0,
                maxCol: 10,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              A more direct liberty reduction allows Black
              to create a ko.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            The correct solution to this problem is
            extending the liberties with an empty triangle
            while allowing for life in the corner:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_left_3.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 9,
                maxRow: 18,
                minCol: 0,
                maxCol: 10,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black creates miai between A and B.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            If White plays A in Dia.{" "}
            <DiagramRef label="bottom_left_3" />, Black
            captures the C stones by cutting at B. And, if
            White connects at B, Black simply lives:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_left_4.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 9,
                maxRow: 18,
                minCol: 0,
                maxCol: 10,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Black lives in the corner.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            However, that&apos;s not actually the 100%
            correct solution. White still has an ace up its
            sleeve.
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_left_5.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 9,
                maxRow: 18,
                minCol: 0,
                maxCol: 10,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              White creates a desperate ko in the corner to
              capture everything. White could also have
              started the ko by first playing at 6.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            With the brilliant move of White 2, we reach a
            ko. But White should be careful, since failing
            here means a bigger loss overall, this is the
            type of ko you should only trigger if
            there&apos;s no other way of winning the game.
          </ArticleParagraph>
          <ArticleParagraph>
            That position might look a bit esoteric, but it
            could come up, for instance, from a common 3-3
            invasion against a &quot;4-4 + keima&quot;
            enclosure:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_left_6.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 0,
                maxRow: 10,
                minCol: 8,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              White uses the same tesuji to survive in a 3-3
              invasion against a &quot;4-4 + keima&quot;
              enclosure.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            This last situation was covered in at the end of
            an{" "}
            <ArticleLink href="https://youtu.be/bLn4UsbjdWA">
              outstanding invasion lecture by Inseong Hwang
              8d EGF
            </ArticleLink>
            .
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/bLn4UsbjdWA"
            title="Top 5 Biggest Blunders In Go!"
          />
        </ArticleSubSection>
        <ArticleSubSection>
          <ArticleSubSectionTitle>
            Bottom-Right
          </ArticleSubSectionTitle>
          <ArticleParagraph>
            I believe there are 3 possible answers for the
            first move in this tsumego, but 2 of them lose a
            bit at least.
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_right.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 7,
                maxRow: 18,
                minCol: 7,
                maxCol: 18,
              }}
            />
            <GoViewerLegend>
              The bottom-right problem. That&apos;s{" "}
              <ArticleLink href="https://www.101weiqi.com/q/45803/">
                Q-45,803
              </ArticleLink>{" "}
              on 101weiqi.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            The key here is to notice how short on liberties
            White&apos;s stones are. They are basically all
            linked by kosumis, which is usually a type of
            conditional connection which gets squeezed and
            turned into empty triangles very easily.
          </ArticleParagraph>
          <ArticleParagraph>
            In that sense, if White tries to resist the
            squeeze, it simply dies:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_right_1.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 7,
                maxRow: 18,
                minCol: 7,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Containing Black&apos;s exit is just not
              possible.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Despite Black 1 on Dia.{" "}
            <DiagramRef label="bottom_right_1" />
            &nbsp;being the book&apos;s solution,{" "}
            <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/29fa2461-a0af-41bc-bcf2-5aba607269bf">
              that&apos;s not what AI recommends
            </ArticleLink>
            . Playing the atari first is the optimal
            solution because otherwise White will prevent it
            in order to cut the 3 black stones on the side,
            as in Dia. <DiagramRef label="bottom_right_4" />
            .
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_right_4.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 7,
                maxRow: 18,
                minCol: 7,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              White accepts Black&apos;s escape, but
              switches to capturing the stones on the side.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            After the atari, if White keeps resisting, we
            will eventually reach Dia.{" "}
            <DiagramRef label="bottom_right_1" />. And, if
            White fixes the elephant in the room, Black can
            capture the corner:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_right_2.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 7,
                maxRow: 18,
                minCol: 7,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              Preventing Black&apos;s exit ends up with the
              corner being captured.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            White could try to create a totally unplayable
            ko with 2 in Dia.{" "}
            <DiagramRef label="bottom_right_3" />,
            nonetheless Black will still have the option of
            simply reverting to everything collapsing:
          </ArticleParagraph>
          <GoViewer
            sgf="/articles/sugeundaesajeon-cover/bottom_right_3.sgf"
            width={425}
          >
            <GoViewerBoard
              startAt="end"
              interactive={true}
              showMoveNumbers
              showCapturedStones
              region={{
                minRow: 7,
                maxRow: 18,
                minCol: 7,
                maxCol: 18,
              }}
            />
            <GoViewerControls />
            <GoViewerLegend>
              White tries to resist with an unplayable ko,
              but Black could revert things back if White
              keeps on resisting to the max.
            </GoViewerLegend>
          </GoViewer>
          <ArticleParagraph>
            Starting with a throw-in in order to create a
            shortage of liberties or ko is another possible
            solution in the sense that it works to escape.
            But White will be more than happy about it
            because, once again, it can fix the corner while
            also capturing Black&apos;s stones on the side:
          </ArticleParagraph>
        </ArticleSubSection>
        <GoViewer
          sgf="/articles/sugeundaesajeon-cover/bottom_right_5.sgf"
          width={425}
        >
          <GoViewerBoard
            startAt="end"
            interactive={true}
            showMoveNumbers
            showCapturedStones
            region={{
              minRow: 7,
              maxRow: 18,
              minCol: 7,
              maxCol: 18,
            }}
          />
          <GoViewerControls />
          <GoViewerLegend>
            White breaks out, but at a high cost.
          </GoViewerLegend>
        </GoViewer>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>Outro</ArticleSectionTitle>
        <ArticleParagraph>
          So, what do you think about this problem
          selection? Do you have others you find better?
          Leave them in the comments!
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
