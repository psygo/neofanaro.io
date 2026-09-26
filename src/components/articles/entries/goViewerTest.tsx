import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleSection,
  ArticleParagraph,
} from "../articleContent"
import { GoDiagram, GoDiagramLegend } from "../goDiagram"
import {
  GoViewer,
  GoViewerBoard,
  GoViewerControls,
  GoViewerInfo,
  GoViewerKey,
  GoViewerLegend,
  goViewerBookishTheme,
  goViewerLatexFont,
  goViewerMonoFont,
  goViewerSansFont,
  goViewerSerifFont,
  readSgfFile,
} from "@components/goViewer/exports"

export function GoViewerTest({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          A draft, work-in-progress playground for the new{" "}
          <code>GoViewer</code> component — a full,
          rules-aware interactive Go board (captures,
          suicide, simple ko), as opposed to the static{" "}
          <code>GoDiagram</code> images used elsewhere.
          Click on the board to play.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          9x9 board, default stones and colors:
        </ArticleParagraph>
        <GoViewer boardSize={9}>
          <GoViewerBoard />
          <GoViewerControls />
          <GoViewerInfo />
          <GoViewerKey />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          Same rules engine, a cropped view of just the
          top-left corner of a 19x19 board — the
          &quot;partial board&quot; option, useful for
          life-and-death style problems that don&apos;t need
          the whole grid. The right and bottom edges are cut
          mid-board rather than being the board&apos;s real
          edge, so their lines run a bit past the last
          intersection before stopping, landing the crop
          between two intersections instead of exactly on
          one:
        </ArticleParagraph>
        <GoViewer boardSize={19}>
          <GoViewerBoard
            region={{
              minRow: 0,
              maxRow: 8,
              minCol: 0,
              maxCol: 8,
            }}
          />
          <GoViewerControls />
          <GoViewerInfo />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          A region entirely in the middle of the board — cut
          on all four sides:
        </ArticleParagraph>
        <GoViewer boardSize={19}>
          <GoViewerBoard
            region={{
              minRow: 5,
              maxRow: 13,
              minCol: 5,
              maxCol: 13,
            }}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          <code>interactive=&#123;false&#125;</code>{" "}
          disables play entirely — useful for a plain,
          non-clickable position display. Hover over the
          interactive 9x9 board below it, though, and
          you&apos;ll see a faint preview of the stone about
          to be placed:
        </ArticleParagraph>
        <GoViewer boardSize={9}>
          <GoViewerBoard interactive={false} />
        </GoViewer>
        <GoViewer boardSize={9}>
          <GoViewerBoard />
          <GoViewerInfo />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          Custom board background and grid color, controls
          placed before the board instead of after — the
          point being that every piece (board, controls,
          info, legend) is detachable and only needs a
          shared <code>&lt;GoViewer&gt;</code> ancestor.
          Both stones get a grey border here so they read
          clearly against the dark board — black&apos;s
          border is a lighter, whiter grey than
          white&apos;s, since black needs more contrast to
          stand out on a dark background:
        </ArticleParagraph>
        <GoViewer sgf={sampleSgf}>
          <GoViewerControls />
          <GoViewerBoard
            backgroundColor="#2c2c2c"
            gridColor="#9c9c9c"
            blackStoneBorderColor="#8a8a8a"
            whiteStoneBorderColor="#5a5a5a"
          />
          <GoViewerInfo />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          Loaded from an SGF string, using <code>AB</code>/
          <code>AW</code> (&quot;edited stones&quot;) for
          the starting position plus a short move sequence —
          use the arrow controls to step through it:
        </ArticleParagraph>
        <GoViewer sgf={sampleSgf}>
          <GoViewerBoard />
          <GoViewerControls />
          <GoViewerInfo />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          <code>
            fontFamily=&#123;goViewerLatexFont&#125;
          </code>{" "}
          swaps move numbers and labels to the site&apos;s
          LaTeX stack (Latin Modern Roman, a serif face)
          instead of the default sans-serif. Same position,
          same <code>showMoveNumbers</code>, default font on
          the left and <code>goViewerLatexFont</code> on the
          right — the numerals should visibly read as serif
          on the right:
        </ArticleParagraph>
        <GoViewer sgf={sampleSgf} startAt="end">
          <GoViewerBoard
            showMoveNumbers
            interactive={false}
          />
        </GoViewer>
        <GoViewer sgf={sampleSgf} startAt="end">
          <GoViewerBoard
            showMoveNumbers
            interactive={false}
            fontFamily={goViewerLatexFont}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          A &quot;bookish&quot; theme matching the static{" "}
          <code>GoDiagram</code> SVGs generated by
          Philippe&apos;s own LaTeX package elsewhere on the
          site (see e.g. the diagrams in{" "}
          <code>dowon-pairgo</code> or <code>haengma3</code>
          ). Those SVGs turned out to have no board
          background of their own — inspecting their raw
          paths shows pure black (<code>rgb(0%,0%,0%)</code>
          ) fills for black stones and grid lines, and white
          (<code>rgb(100%,100%,100%)</code>) fills with a
          thicker black outline for white stones — it&apos;s
          the white <code>GoDiagram</code> card background
          showing through that gives them their &quot;on
          paper&quot; look. Reproduced here via the exported{" "}
          <code>goViewerBookishTheme</code> preset (plain
          white background, black grid, black stones with no
          border, white stones with a black border, and{" "}
          <code>goViewerLatexFont</code>):
        </ArticleParagraph>
        <GoViewer sgf={sampleSgf} startAt="end">
          <GoViewerBoard
            {...goViewerBookishTheme}
            showMoveNumbers
            interactive={false}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          Other <code>fontFamily</code> presets, for
          reference — <code>goViewerSansFont</code> (the
          site&apos;s UI sans-serif),{" "}
          <code>goViewerMonoFont</code>, and{" "}
          <code>goViewerSerifFont</code> (a generic serif
          fallback that doesn&apos;t pull in the LaTeX
          webfont):
        </ArticleParagraph>
        <GoViewer sgf={sampleSgf} startAt="end">
          <GoViewerBoard
            showMoveNumbers
            interactive={false}
            fontFamily={goViewerSansFont}
          />
        </GoViewer>
        <GoViewer sgf={sampleSgf} startAt="end">
          <GoViewerBoard
            showMoveNumbers
            interactive={false}
            fontFamily={goViewerMonoFont}
          />
        </GoViewer>
        <GoViewer sgf={sampleSgf} startAt="end">
          <GoViewerBoard
            showMoveNumbers
            interactive={false}
            fontFamily={goViewerSerifFont}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          <code>showCapturedStones</code> keeps a captured
          stone drawn on the board (in its last color, with
          its move number) instead of removing it — the way
          a book diagram sometimes leaves a doomed stone in
          place to emphasize the capture rather than jumping
          straight to the post-capture position. White 2
          here gets captured by Black 3; compare the two
          boards below:
        </ArticleParagraph>
        <GoViewer sgf={captureEmphasisSgf} startAt="end">
          <GoViewerBoard
            showMoveNumbers
            interactive={false}
          />
        </GoViewer>
        <GoViewer sgf={captureEmphasisSgf} startAt="end">
          <GoViewerBoard
            showMoveNumbers
            interactive={false}
            showCapturedStones
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          Transcribed real diagrams, for comparison against
          the book/article originals. First, the pair Go
          position from <code>dowon-pairgo</code>: my
          partner&apos;s mistaken cut, already available as
          a hand-made SGF elsewhere on the site (
          <code>dowon_pairgo_1.sgf</code>). My first,
          immediate answer was turning at A, capturing
          White&apos;s cutting stone on the side:
        </ArticleParagraph>
        <GoViewer sgf={dowonPairGo1Sgf}>
          <GoViewerBoard
            cellSize={14}
            interactive={false}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          If Black tries to capture White&apos;s group
          outright, White gets a ton of squeezing power from
          the outside — three directions to be squeezed
          from, A to C, with no way to protect them all:
        </ArticleParagraph>
        <GoViewer sgf={dowonPairGo3Sgf}>
          <GoViewerBoard
            cellSize={14}
            interactive={false}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          AI&apos;s recommended sequence instead, played out
          move by move from that same starting position —
          Black gets sente to play 19, but White ends up
          thick on the left and the bottom-right. Two stones
          visible in the original diagram (a white stone at
          the point marked <NoteA /> and a black stone right
          below it) aren&apos;t reproduced here, since
          they&apos;re also absent from the authoritative
          hand-made SGF this position is built on top of —
          use the controls to step back through moves 1-19:
        </ArticleParagraph>
        <GoViewer sgf={dowonPairGo2Sgf} startAt="end">
          <GoViewerBoard cellSize={14} showMoveNumbers />
          <GoViewerControls />
          <GoViewerInfo />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          The full set of diagrams from the{" "}
          <code>haengma3</code> article, each paired with
          its static <code>GoDiagram</code> original —
          copied here from that article&apos;s own working
          state (kept out of the published article itself,
          which stays static-only):
        </ArticleParagraph>
        <GoDiagram
          src="/articles/haengma3/1.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            Should you connect at A?
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/1.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
            interactive={false}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <GoDiagram
          src="/articles/haengma3/2.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            A joseki originating the same position.
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/2.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
          />
          <GoViewerControls />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <GoDiagram
          src="/articles/haengma3/2.1.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            How the tiger&apos;s mouth changes things.
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/2.1.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
          />
          <GoViewerControls />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <GoDiagram
          src="/articles/haengma3/3.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            Black 3 locks White in.
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/3.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
          />
          <GoViewerControls />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <GoDiagram
          src="/articles/haengma3/4.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            White fails to cut, while weakening the A stone.
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/4.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
            showCapturedStones
          />
          <GoViewerControls />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <GoDiagram
          src="/articles/haengma3/5.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            AI prefers the empty triangle.
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/5.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
          />
          <GoViewerControls />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <GoDiagram
          src="/articles/haengma3/6.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            AI is satisfied with poking a little bit,
            despite the dumpling shape.
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/6.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
            showCapturedStones
          />
          <GoViewerControls />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <GoDiagram
          src="/articles/haengma3/6.1.svg"
          width={375}
          height={315}
        >
          <GoDiagramLegend>
            White escalates the fight.
          </GoDiagramLegend>
        </GoDiagram>
        <GoViewer
          sgf={readSgfFile("/articles/haengma3/6.1.sgf")}
          startAt="end"
        >
          <GoViewerBoard
            {...goViewerBookishTheme}
            region={{
              minRow: 0,
              maxRow: 10,
              minCol: 0,
              maxCol: 12,
            }}
            cellSize={20}
            size={375}
            showMoveNumbers
          />
          <GoViewerControls />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          <code>size</code> (or <code>width</code>/
          <code>height</code> individually) rescales the
          rendered output without touching the board&apos;s
          own geometry — same 9x9 board at{" "}
          <code>size=&#123;120&#125;</code> and{" "}
          <code>size=&#123;260&#125;</code>:
        </ArticleParagraph>
        <div className="flex flex-wrap items-end justify-center gap-4">
          <GoViewer boardSize={9}>
            <GoViewerBoard interactive={false} size={300} />
          </GoViewer>
          <GoViewer boardSize={9}>
            <GoViewerBoard interactive={false} size={260} />
          </GoViewer>
        </div>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          <code>size</code> on a non-square region (here an
          11x9 crop) sets whichever dimension is naturally
          larger and scales the other proportionally, rather
          than forcing a square render and letterboxing the
          rest — no empty space:
        </ArticleParagraph>
        <GoViewer boardSize={19}>
          <GoViewerBoard
            interactive={false}
            region={{
              minRow: 0,
              maxRow: 8,
              minCol: 0,
              maxCol: 10,
            }}
            size={260}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          <code>showCoordinates</code> adds standard Go
          lettering/numbering (columns A-T skipping I, rows
          counted from the bottom), with{" "}
          <code>padding</code> and{" "}
          <code>coordinatePadding</code> controlling the
          outer margin and the gap between the grid and the
          coordinate labels respectively:
        </ArticleParagraph>
        <GoViewer boardSize={9}>
          <GoViewerBoard
            interactive={false}
            showCoordinates
            padding={12}
            coordinatePadding={20}
          />
        </GoViewer>
      </ArticleSection>

      <ArticleSection>
        <ArticleParagraph textAlign="left">
          <code>GoViewerLegend</code> mirrors{" "}
          <code>GoDiagramLegend</code>&apos;s own dynamics —
          an auto-incrementing &quot;Dia. N.&quot; caption
          sharing the same counter as the article&apos;s{" "}
          <code>GoDiagram</code>s (via the{" "}
          <code>.go-diagram-scope</code>/
          <code>.go-diagram</code> CSS counter), so the two
          can be numbered together. Drop it in as a{" "}
          <code>&lt;GoViewer&gt;</code> child, right after
          the board:
        </ArticleParagraph>
        <GoViewer sgf={sampleSgf} startAt="end">
          <GoViewerBoard
            {...goViewerBookishTheme}
            interactive={false}
          />
          <GoViewerLegend>
            An auto-numbered caption, just like a{" "}
            <code>GoDiagram</code>&apos;s.
          </GoViewerLegend>
        </GoViewer>
      </ArticleSection>
    </Article>
  )
}

// Small inline helper so the "point marked A" reference above reads
// naturally without breaking out of the paragraph.
function NoteA() {
  return <code>A</code>
}

// A hand-written sample: a 9x9 position set up via AB/AW (edited
// stones, not moves — this is what a life-and-death problem's
// starting diagram looks like in SGF), followed by a short line of
// actual moves for the navigation controls to step through.
const sampleSgf = `(;GM[1]FF[4]SZ[9]PB[Black]PW[White]
AB[cg][dg][eg][cf][ef][df]
AW[ch][dh][eh][ci][di][ei]
;B[bg];W[bh];B[fg];W[fh])`

// The exact SGF for the "cut at 8" position in dowon-pairgo, already
// hand-made and used elsewhere on the site (see
// public/articles/goban-web/dowon_pairgo_1.sgf, read verbatim and
// inlined here) — inlined rather than fetched at runtime, plus one
// LB for point A ("turning at A, capturing White's stones on the
// side"), found by rasterizing the original SVG diagram and
// converting its own printed "A" label position back into board
// coordinates.
const dowonPairGo1Sgf = `(;GM[1]FF[4]CA[UTF-8]AP[Sabaki:0.52.2]KM[0.5]SZ[19]DT[2026-07-02]AB[qc][qd][rf][qg][ph][oh][nh][ic][ie][fc][dc][cd][dp][fq][hp][gp][iq][jq][hr][qo][qk]AW[pc][pd][pe][pg][og][mg][kd][ce][de][di][cn][hq][gq][gr][ir][pq][op][qm][om][fn]LB[jr:A])`

// Transcribed by hand from public/articles/dowon-pairgo/dowon_pairgo_3.svg
// (rasterized and read stone-by-stone, cross-checked against the
// grid via the SVG's own transform matrix) — the position if Black
// tries to capture White's cutting stones outright. Labels A-C mark
// the three directions Black can be squeezed from, per the article.
const dowonPairGo3Sgf = `(;GM[1]FF[4]SZ[19]AB[dc][fc][ic][qc][cd][qd][ie][rf][qg][nh][oh][ph][qk][qo][dp][gp][hp][dq][fq][iq][jq][fr][jr]AW[pc][kd][pd][ce][de][pe][mg][og][pg][di][om][qm][cn][fn][do][ep][fp][op][gq][hq][pq][gr][ir][hs]LB[hn:A][mq:B][bp:C])`

// AI's recommended sequence: the same authoritative dowon_pairgo_1
// setup as above, continued with 19 real moves transcribed from
// public/articles/dowon-pairgo/dowon_pairgo_2.svg (each numbered
// stone's board position read off the rasterized SVG the same way).
// Replaying these 19 moves on top of the dowon_pairgo_1 setup
// reproduces 60 of the 62 stones visible in the original diagram —
// the other 2 (a white stone and a black stone, both already present
// in the *original* dowon_pairgo_1.svg's rendering but absent from
// its hand-made SGF) are a pre-existing gap in that authoritative
// SGF, not something introduced by this transcription.
const dowonPairGo2Sgf = `(;GM[1]FF[4]SZ[19]AB[qc][qd][rf][qg][ph][oh][nh][ic][ie][fc][dc][cd][dp][fq][hp][gp][iq][jq][hr][qo][qk]AW[pc][pd][pe][pg][og][mg][kd][ce][de][di][cn][hq][gq][gr][ir][pq][op][qm][om][fn];B[jr];W[ep];B[dq];W[do];B[hn];W[ip];B[eq];W[cp];B[cq];W[bp];B[io];W[lp];B[mq];W[lq];B[lr];W[mp];B[nq];W[np];B[ch])`

const captureEmphasisSgf = `(;GM[1]FF[4]SZ[9]AB[dc][cd][ed];W[dd];B[de])`
