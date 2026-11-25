import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
} from "../articleContent"
import { ArticleMath } from "../articleMath"
import {
  ArticleTable,
  ArticleTableBody,
  ArticleTableCell,
  ArticleTableHead,
  ArticleTableHeaderCell,
  ArticleTableRow,
} from "../articleTable"

export function HowManyGoPositions({
  article,
}: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          About a month ago, somebody in a Whatsapp Go group
          I participate in asked how many positions there
          would be for a 4-move opening with 3-3s, 4-4s and
          3-4s.
        </ArticleParagraph>
        <ArticleParagraph>
          It turns out the problem is way trickier than it
          seems...
        </ArticleParagraph>
        <ArticleParagraph>
          The first step is to use a bit of basic
          combinatorics. Since we have 2 possible ways of
          placing a 3-4 stone in a corner, and we have 4
          corners, we need to multiply it all to get a
          baseline:
        </ArticleParagraph>
        <ArticleMath display>
          {String.raw`
            4^4 = 256
          `}
        </ArticleMath>
        <ArticleParagraph>
          And we have 2 colors to chose from, but they
          alternate, so they can&apos;t be all white or all
          black. That&apos;s essentially taking 2 out of 4,
          which can be calculated through a binomial:
        </ArticleParagraph>
        <ArticleMath display>
          {String.raw`
            \binom{4}{2} = \frac{4!}{2!(4-2)!} = \frac{4!}{2!2!} = \frac{4 \cdot 3}{2 \cdot 1} = 6
          `}
        </ArticleMath>
        <ArticleParagraph>
          Multiplying it all:
        </ArticleParagraph>
        <ArticleMath display>
          {String.raw`
            4^4 \cdot \binom{4}{2} = 256 \cdot 6 = 1536
          `}
        </ArticleMath>
        <ArticleParagraph>
          But that&apos;s far from the answer. We&apos;re
          only getting started. We need to take symmetries
          into account.
        </ArticleParagraph>
        <ArticleParagraph>
          At first, I thought we could simply divide by the
          total number of symmetries, which are 4 rotations
          and 4 reflections. However, many symmetries could
          be achieved through applying a number of others.
          So the problem started getting too complicated for
          me.
        </ArticleParagraph>
        <ArticleParagraph>
          Since recently ChatGPT and other cutting-edge AIs
          started to get absurdly good at math, proving
          problems and conjectures which puzzled the best
          human minds for centuries,{" "}
          <ArticleLink href="https://chatgpt.com/share/6b05f5a6-7860-83e9-a01d-d0103d9336cd">
            I decided to throw this problem at one of them
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          Apparently, this type of symmetry problem is
          tackled by{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Group_theory">
            Group Theory
          </ArticleLink>
          , and ChatGPT recommends we apply{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Burnside%27s_lemma">
            Burnside&apos;s Lemma
          </ArticleLink>{" "}
          here.
        </ArticleParagraph>
        <ArticleTable>
          <ArticleTableHead>
            <ArticleTableHeaderCell>
              Symmetry
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Fixed Positions
            </ArticleTableHeaderCell>
            <ArticleTableHeaderCell>
              Explanation
            </ArticleTableHeaderCell>
          </ArticleTableHead>
          <ArticleTableBody>
            <ArticleTableRow>
              <ArticleTableCell>
                Identity (0°)
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>
                  {String.raw`\binom{4}{2} \cdot 4^4 = 1536`}
                </ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                Choose 2 Black corners out of 4, then
                independently choose 1 of 4 intersections in
                each corner.
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                90° rotation
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>{String.raw`0`}</ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                All four corners must have the same color,
                contradicting the two-Black, two-White
                requirement.
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                180° rotation
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>
                  {String.raw`2 \cdot 4^2 = 32`}
                </ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                Opposite corners must match. There are 2
                color assignments and 4 intersection choices
                for each of the 2 independent corners.
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                270° rotation
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>{String.raw`0`}</ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                Same reasoning as the 90° rotation.
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                Horizontal reflection
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>
                  {String.raw`2 \cdot 4^2 = 32`}
                </ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                Two pairs of corners are exchanged. Choose
                which pair is Black (2 choices), then choose
                an intersection for each pair (4 choices
                each).
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                Vertical reflection
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>
                  {String.raw`2 \cdot 4^2 = 32`}
                </ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                Same reasoning as the horizontal reflection,
                with a different pairing of corners.
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                Main diagonal reflection
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>
                  {String.raw`2 \cdot 4 \cdot 2^2 = 32`}
                </ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                Two corners exchange places and two remain
                fixed. Choose the exchanged pair&apos;s
                color (2), its intersection (4), and an
                invariant intersection for each fixed corner
                (2 each).
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell>
                Anti-diagonal reflection
              </ArticleTableCell>
              <ArticleTableCell>
                <ArticleMath>
                  {String.raw`2 \cdot 4 \cdot 2^2 = 32`}
                </ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell>
                Same reasoning as the main diagonal
                reflection.
              </ArticleTableCell>
            </ArticleTableRow>
            <ArticleTableRow>
              <ArticleTableCell className="px-3 py-4 font-bold">
                Total
              </ArticleTableCell>
              <ArticleTableCell className="px-3 py-4 font-bold">
                <ArticleMath>{String.raw`\textbf{1696}`}</ArticleMath>
              </ArticleTableCell>
              <ArticleTableCell className="px-3 py-4 font-bold">
                Sum of fixed positions across all eight
                symmetries.
              </ArticleTableCell>
            </ArticleTableRow>
          </ArticleTableBody>
        </ArticleTable>
        <ArticleParagraph>
          Applying Burnside&apos;s lemma:
        </ArticleParagraph>
        <ArticleMath display>
          {String.raw`
            \begin{aligned}
                N &= \frac{1}{|G|} \sum_{g \in G} |\operatorname{Fix}(g)| \\[6pt]
                  &= \frac{1}{8} \left(
                     1536 + 0 + 32 + 0 + 32 + 32 + 32 + 32
                     \right) \\[6pt]
                  &= \frac{1536 + 32 + 4 \cdot 32}{8} \\[6pt]
                  &= \frac{1696}{8} \\[6pt]
                  &= 212
                \end{aligned}
          `}
        </ArticleMath>
        <ArticleParagraph>In more detail:</ArticleParagraph>
        <ArticleMath display>
          {String.raw`
            \begin{aligned}
                N &= \frac{1}{8} \Bigg[
                    \underbrace{\binom{4}{2} \cdot 4^4}_{\text{Identity}}
                    + \underbrace{0}_{90^\circ}
                    + \underbrace{2 \cdot 4^2}_{180^\circ}
                    + \underbrace{0}_{270^\circ} \\[6pt]
                  &\qquad
                    + \underbrace{2 \cdot (2 \cdot 4^2)}_{\text{Horizontal and vertical reflections}}
                    + \underbrace{2 \cdot (2 \cdot 4 \cdot 2^2)}_{\text{Diagonal reflections}}
                    \Bigg] \\[6pt]
                  &= 212
            \end{aligned}
          `}
        </ArticleMath>
        <ArticleParagraph>
          If you would like to know more about how that gets
          calculated, check{" "}
          <ArticleLink href="https://chatgpt.com/s/t_6b05f81397d08191b6a4e604e55a9ad6">
            this link
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleParagraph>
          When I first heard the problem, I tried to reduce
          the corners into a looped string in order to see
          if that could help tackling the symmetry
          complexity. According to ChatGPT, that&apos;s also
          a valid way of solving it, but it&apos;s more
          complicated, it involves the{" "}
          <ArticleLink href="https://en.wikipedia.org/wiki/Necklace_(combinatorics)">
            Theory of Necklaces and Bracelets
          </ArticleLink>
          .{" "}
          <ArticleLink href="https://chatgpt.com/s/t_6b05faf1a6f8819186aa09c29e40fe92">
            Here
          </ArticleLink>
          &apos;s ChatGPT&apos;s solution using it.
        </ArticleParagraph>
        <ArticleParagraph>
          Lastly, I did ask for ChatGPT to{" "}
          <ArticleLink href="https://chatgpt.com/s/t_6b05fb567aac8191a59925228392f2b9">
            generate a Python script
          </ArticleLink>{" "}
          with all the positions solving the problem. That
          would have been my preferred path to solve this
          problem before AI. I wouldn&apos;t have trusted my
          analytical solution at all.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
