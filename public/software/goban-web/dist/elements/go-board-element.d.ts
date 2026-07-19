import { Board } from "../core/board";
import { Color } from "../core/types";
import type { SGFGameTree } from "../core/sgf";
import type { Vertex } from "../core/types";
export type CoordinateSide = "top" | "bottom" | "left" | "right";
export interface MoveEventDetail {
    x: number;
    y: number;
    color: Color;
    captured: Vertex[];
}
export interface IllegalMoveEventDetail {
    x: number;
    y: number;
    reason: string;
}
export interface SGFLoadedEventDetail {
    tree: SGFGameTree;
}
export interface SGFErrorEventDetail {
    error: unknown;
}
export interface NavigateEventDetail {
    moveIndex: number;
    moveCount: number;
}
export type GoBoardKeyAction = "next" | "previous";
export type GoBoardKeyBindings = Partial<Record<GoBoardKeyAction, string | string[]>>;
/**
 * `<go-board>` — an interactive Go board Web Component with an SVG,
 * Sabaki-inspired rendering and a self-contained rules engine.
 *
 * Attributes:
 *   - `size` (9 | 13 | 19 | any positive integer, default 19)
 *   - `coordinates` — which sides get labels: unset/`"true"` (all four,
 *     default), `"false"` (none), or a space/comma-separated list of
 *     `top`/`bottom`/`left`/`right`, e.g. `coordinates="top left"`
 *   - `coordinates-font` — CSS font-family for the labels
 *     (default `"system-ui, sans-serif"`)
 *   - `coordinates-font-size` — real CSS length for the labels (bare
 *     numbers are px, e.g. `"10"` or `"10pt"`; default matches the board's
 *     own scale, about `0.32` of a grid cell). Converted internally to the
 *     board's SVG unit space using the host's current rendered size, kept
 *     in sync via a `ResizeObserver` as the board resizes.
 *   - `coordinates-gap` — real CSS length for label distance from the grid
 *     edge, converted the same way (default centers labels in the fixed
 *     1-unit margin reserved for them)
 *   - `padding` — real CSS length for the blank margin between the host's
 *     outer edge and the grid/coordinates (coordinate labels get their own
 *     reserved space automatically when shown, so this is purely extra
 *     breathing room outside of them, always in addition to it — never a
 *     substitute). Converted the same way as the two attributes above.
 *   - `x-start` / `x-end` / `y-start` / `y-end` — crop the rendered board to
 *     a sub-rectangle of vertices (inclusive, 0-indexed, same coordinate
 *     space as `move`'s `detail.x`/`detail.y`). Defaults to the full board.
 *     Cut edges (where the crop doesn't reach the true board edge) render
 *     grid lines with a short overhang, signaling the board continues past
 *     what's shown, and only show coordinate labels for the visible range.
 *     The rules engine is unaffected — this only changes what's drawn and
 *     clickable.
 *   - `interactive` (boolean, default present)
 *   - `sgf` (URL to fetch and parse; drives the board via the navigation API)
 *   - `black-stone` / `white-stone` (image URL to render stones with,
 *     instead of the default gradient circles)
 *   - `width` / `height` (CSS length; bare numbers are treated as px.
 *     Defaults to 100% width with a 1:1 aspect ratio when unset)
 *   - `background-image` (image URL to render behind the grid, instead of
 *     the default wood gradient)
 *   - `keyboard-shortcuts` (boolean, default present) — set to `"false"` to
 *     disable arrow-key SGF navigation entirely
 *   - `stone-size` — stone radius relative to the board's own scale, as a
 *     bare multiplier (`"0.9"`) or percentage (`"90%"`) of the default
 *     size (default `1`)
 *   - `corner-radius` — real CSS length for the board's rounded corners
 *     (and, if set, `background-image`'s). `"0"` gives sharp corners.
 *     Unset auto-computes a radius proportional to `padding`, capped so it
 *     never eats into the grid or coordinate labels.
 *   - `label-font` / `label-font-size` — CSS font-family / real CSS length
 *     for `LB` markup label text, independent of `coordinates-font`/
 *     `coordinates-font-size` (defaults `"system-ui, sans-serif"` /
 *     matching the board's scale, about `0.55` of a grid cell). Any
 *     font-family the page itself has loaded works here, including one
 *     it's registered via `@font-face { src: local(...) }` against a
 *     locally-installed font — e.g. LaTeX's Latin Modern Roman, if
 *     present on the system (see "Fonts" in Docs.md).
 *   - `label-offset-x` / `label-offset-y` — real CSS length nudging `LB`
 *     label text off the exact point center (default `0`, i.e. centered).
 *     Purely cosmetic — doesn't move the underlying point being labeled.
 *   - `theme` — a built-in color/appearance preset: `"wood"` (default —
 *     wood grain board, gradient-shaded stones), `"bookish"` (flat
 *     black-ink-on-paper look modeled on printed Go book diagrams, no
 *     gradients), `"gomagic"` (brighter gold board, raised stones with a
 *     soft drop shadow — modeled on Go Magic's Sabaki-inspired board), or
 *     five themes ported from Sabaki's theme directory —
 *     `"photorealistic"`, `"happy-stones"`, `"hikaru"`, `"baduktv"`, and
 *     `"battsgo"` — or `"wgojs"` (WGo.js's default look — photographed
 *     stones on a saturated orange-brown board) — all six of which use
 *     real image assets under `public/assets/themes/` (see "Themes" in
 *     Docs.md for what each looks like and what hosting them elsewhere
 *     requires).
 *     `black-stone`/`white-stone`/`background-image` still override the
 *     theme's stone/board appearance when set, same as before themes
 *     existed. An unrecognized value falls back to `"wood"`.
 *   - `move-numbers` (boolean, default *off* — unlike most boolean
 *     attributes here, presence turns it *on*: `move-numbers` or
 *     `move-numbers="true"`) — draws each stone's move number on top of
 *     it. Numbers come from however the stone got there: `play()` calls
 *     count up from 1, and stepping through a loaded `sgf` numbers stones
 *     by their position in the main line (`nextMove()`/`goToMove()`/...).
 *     Setup stones (SGF `AB`/`AW`) are never numbered. A captured stone's
 *     number is discarded with it — if another stone is later played on
 *     the same point, only the newer number shows, same as any kifu.
 *
 * Keyboard navigation: with an `sgf` loaded, ArrowRight/ArrowLeft step
 * `nextMove()`/`previousMove()` whenever focus is anywhere inside the
 * nearest `go-board-container` ancestor (or inside this element itself, if
 * there is none). Remap via the `keyBindings` property.
 *
 * Events:
 *   - `move` — fired after a legal move, `detail: MoveEventDetail`
 *   - `illegal-move` — fired when a click targets an illegal point
 *   - `pass` — fired after `pass()` is called
 *   - `sgf-loaded` — fired after a `sgf` URL is fetched and parsed
 *   - `sgf-error` — fired when fetching/parsing a `sgf` URL fails
 *   - `navigate` — fired after `nextMove()`/`previousMove()`/`goToMove()`
 *     change the current position, `detail: NavigateEventDetail`
 */
export declare class GoBoardElement extends HTMLElement {
    static get observedAttributes(): string[];
    private _board;
    private svg;
    private stonesGroup;
    private markupGroup;
    private gridMaskHoles;
    private ghostStone;
    private hovered;
    private _sgfTree;
    private _sgfMainLine;
    private _moveIndex;
    private sgfLoadToken;
    private moveNumbers;
    private moveCounter;
    private _keyBindings;
    private resizeObserver;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void;
    /** The underlying rules engine, for read-only inspection. */
    get board(): Board;
    /** The parsed SGF game tree loaded via the `sgf` attribute, if any. */
    get sgfTree(): SGFGameTree | null;
    /** Current position within the loaded SGF's main line (0 = game start). */
    get moveIndex(): number;
    /** Total number of moves in the loaded SGF's main line. */
    get moveCount(): number;
    get interactive(): boolean;
    get keyboardShortcutsEnabled(): boolean;
    /**
     * Whether move numbers are drawn on top of stones, per the
     * `move-numbers` attribute. Unlike `interactive`/`coordinates`/etc.,
     * this defaults to *off* — presence (not absence) of `"false"`
     * — since numbering every stone isn't the look most boards want.
     */
    get moveNumbersEnabled(): boolean;
    /** Current key-to-action bindings for arrow-key SGF navigation. */
    get keyBindings(): Readonly<Record<GoBoardKeyAction, string[]>>;
    /**
     * Remaps which keys trigger `nextMove()`/`previousMove()`. Only the
     * actions present in `bindings` are changed; others keep their current
     * binding. Pass a single key or an array of alternatives per action.
     */
    set keyBindings(bindings: GoBoardKeyBindings);
    private get sizeAttr();
    /** Discards move-number tracking and starts counting from 1 again — call whenever `_board` itself is replaced. */
    private resetMoveNumbers;
    private moveNumberIndex;
    /** Which sides currently get coordinate labels, per the `coordinates` attribute. */
    private get coordinateSides();
    /** Label distance from the grid edge, in board units (see `coordinates-gap`). */
    private get coordinatesGap();
    /** Coordinate label font size, in board units (see `coordinates-font-size`). */
    private get coordinatesFontSizeUnits();
    /**
     * The blank margin between the host's outer edge and the grid/coordinates,
     * in board units (see `padding`). Never negative — a "negative margin"
     * would push content past the host's own edge, clipping it.
     *
     * Resolved against `DEFAULT_PADDING` rather than itself when converting
     * CSS units — using the not-yet-resolved custom padding to compute the
     * very extent that padding determines would be circular. This makes the
     * conversion ratio a reasonable approximation (based on the default
     * margin) rather than exact when a custom padding is set, which is fine
     * in practice since padding is a coarse, rarely-tuned setting.
     */
    private get padding();
    /**
     * Stone radius scale relative to the default size (see `stone-size`) — a
     * bare multiplier (`"0.9"`) or percentage (`"90%"`) of the built-in
     * radius, not a CSS length, since it's a proportion of the board's own
     * scale rather than an absolute size.
     */
    private get stoneSizeScale();
    /** Horizontal nudge applied to `LB` label text, in board units (see `label-offset-x`). */
    private get labelOffsetX();
    /** Vertical nudge applied to `LB` label text, in board units (see `label-offset-y`). */
    private get labelOffsetY();
    /**
     * Explicit `corner-radius` override, in board units, or `null` to fall
     * back to the automatic proportional radius (see `buildSvg`). `"0"`
     * disables rounding entirely — a real, intentional value, distinct from
     * "unset".
     */
    private get cornerRadiusOverride();
    /** The active color/appearance preset (see `theme`). Unrecognized values fall back to `"wood"`. */
    private get theme();
    /** Inclusive vertex range shown along an axis, per `x-start`/`x-end`/`y-start`/`y-end`. */
    private cropRange;
    /**
     * Resolves board size, crop range, padding, and coordinate space into the
     * SVG geometry every rendering/hit-testing method needs. Coordinate labels
     * (when shown) get their own reserved space *outside* the grid but
     * *inside* `padding`'s margin — so `padding` is always, literally, the
     * distance from the host's outer edge to the outermost thing drawn
     * (labels if shown, the grid itself otherwise), never eaten into by them.
     */
    private computeLayout;
    /**
     * Reflects `coordinates-font`/`coordinates-font-size` onto CSS custom
     * properties on the host, consumed by the shadow stylesheet. Using
     * custom-property substitution (rather than interpolating the raw
     * attribute string into the `<style>` text) means an attacker-controlled
     * value can't break out into new CSS rules — the browser only ever
     * resolves it as a single property value.
     */
    private applyCoordinateStyle;
    /**
     * Reflects `label-font`/`label-font-size` onto CSS custom properties,
     * consumed by `.mark-label` — the same custom-property substitution
     * approach as `applyCoordinateStyle`, and for the same reason (an
     * attacker-controlled font-family string can't break out into new CSS
     * rules this way). Kept independent of `--go-coords-*` so coordinate
     * labels and SGF markup labels (`LB`) can be styled separately — they're
     * unrelated pieces of text that happen to both be text.
     */
    private applyLabelStyle;
    /**
     * Converts a real CSS length (as given to `coordinates-font-size` /
     * `coordinates-gap`) into the board's own SVG user-unit space, using the
     * host's current rendered size as the conversion ratio. Returns null if
     * the host hasn't been laid out yet (rect is zero-sized) — callers should
     * keep their previous/default value and rely on the ResizeObserver to
     * call back once real layout is available.
     */
    private cssLengthToBoardUnits;
    /**
     * Reflects the `width`/`height` attributes onto inline host styles. With
     * neither set, defaults to 100% width with the height derived from the
     * board's own aspect ratio (1:1 normally, but non-square once cropped via
     * `x-start`/`x-end`/`y-start`/`y-end`) — computed here rather than left to
     * the static `aspect-ratio: 1/1` stylesheet rule, both because it must
     * track cropping and because a slotted flex child stretches its
     * cross-axis ("auto" width) to fill the container regardless of
     * aspect-ratio. Setting just one of `width`/`height` derives the other to
     * match the board's own aspect ratio at that size.
     */
    private applyHostSize;
    /** Plays a move for the current player at the given board coordinates. */
    play(x: number, y: number): boolean;
    /** Passes the current player's turn. */
    pass(): void;
    /** Clears the board, optionally resizing it. Does not affect a loaded SGF. */
    reset(size?: number): void;
    /** Steps forward one move in the loaded SGF's main line. */
    nextMove(): boolean;
    /** Steps back one move in the loaded SGF's main line. */
    previousMove(): boolean;
    /** Jumps to an arbitrary position in the loaded SGF's main line. */
    goToMove(index: number): void;
    /**
     * Applies one SGF node's board-affecting properties: setup stones
     * (`AB`/`AW`/`AE`, placed directly via `Board.set` — no capture/suicide/
     * ko rules, per the SGF spec) followed by a move (`B`/`W`, played via
     * `Board.play`), if present. A node commonly has only one or the other,
     * but both are handled since the spec permits either independently.
     *
     * `moveNumber`, when given, is recorded for a played stone (never for
     * setup stones, which the SGF spec and move-numbering convention both
     * treat as pre-existing rather than "played") — omit it for the root
     * node, which isn't itself a numbered move in `_sgfMainLine`'s indexing.
     */
    private applySgfNode;
    private loadSgf;
    private readonly handleClick;
    private readonly handlePointerMove;
    private readonly handlePointerLeave;
    private readonly handleKeyDown;
    private readonly handleResize;
    private vertexFromEvent;
    private buildSvg;
    private buildCoordinateMarkup;
    private render;
    /**
     * Draws the *current* SGF node's markup — `TR`/`SQ`/`CR`/`MA` point
     * shapes and `LB` text labels — read fresh from `nodes[moveIndex]` each
     * call rather than accumulated across moves like setup stones, since
     * markup conventionally annotates one specific position, not the game
     * going forward.
     */
    private renderMarkup;
    /**
     * Punches a hole in the `.grid` layer's mask at an empty point that's
     * about to get a mark or label drawn on it — otherwise the grid line
     * crossing that intersection visually cuts through the markup. This
     * hides only the grid line itself; the wood/background-image layer
     * underneath (`.board-bg`, drawn below `.grid`) is untouched, so the
     * point still reads as part of the board rather than sitting on a
     * conspicuous patch. A no-op on a point that already has a stone, since
     * the opaque stone already covers the grid line there.
     *
     * `gridX`/`gridY` are the underlying board vertex (for the empty-point
     * check); `cx`/`cy` are where the hole is actually drawn, which for an
     * off-center label differ from the vertex's own grid position.
     */
    private clearGridAt;
    /** A light mark reads on a black stone, a dark one on a white stone or empty point/wood. */
    private markColorAt;
    private createMark;
    private createLine;
    private createLabel;
    /** Draws a move number centered on the stone already at `x`/`y` — see `move-numbers` in the class doc. */
    private createMoveNumber;
    /** `black-stone`/`white-stone` attribute, falling back to the active theme's own stone image if it has one. */
    private stoneImageUrl;
    private createStone;
    private updateGhostStone;
}
