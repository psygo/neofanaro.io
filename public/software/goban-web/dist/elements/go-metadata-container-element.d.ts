/** A single player's name and (optional) rank, as read from the SGF root node. */
export interface GoPlayerInfo {
    name: string;
    rank?: string;
}
/**
 * The parsed game info `<go-metadata-container>` displays, exposed via its
 * `gameInfo` property for a developer building a fully custom design (in
 * JS, a canvas, anywhere) rather than restyling the default markup.
 */
export interface GoGameInfo {
    black: GoPlayerInfo;
    white: GoPlayerInfo;
    komi?: string;
    date?: string;
    event?: string;
    result?: string;
    /** The current move's comment (SGF `C` property at `board.moveIndex`), if any. */
    comment?: string;
}
/**
 * `<go-metadata-container>` — displays the loaded SGF's game info,
 * decomposed into two stacked containers: a players row (a black-player
 * panel and a white-player panel — same background, told apart by their
 * stone-color indicator, no "vs" divider needed — with name and rank on
 * one line) and, right below it, its own separate card for the rest of the
 * data: komi/date/event each on their own line, the game result (hidden
 * behind a "Show result" toggle by default, since a spoiler-visible result
 * isn't always wanted alongside an SGF being replayed move by move), and
 * the *current* move's comment (SGF `C` property), which updates live as
 * the board navigates. Shows "No game loaded." until its `<go-board>`
 * fires `sgf-loaded`. Read-only — never calls back into the board.
 *
 * Like `<go-board-controls>`, it's a **wrapper**, not a fixed widget:
 * place your own markup inside it (native `<slot>` fallback-content
 * semantics mean any light-DOM children you add replace the default UI
 * entirely) and tag elements so this element knows what they're for:
 *
 *   - `data-go-field="black-name" | "black-rank" | "white-name" |
 *     "white-rank" | "komi" | "date" | "event" | "result" |
 *     "result-toggle-label" | "comment"` on any element fills its text
 *     with that piece of data, kept live as the board navigates or a new
 *     game loads. `result` stays empty text until revealed (see below);
 *     everything else is always filled in (empty string if absent).
 *   - `data-go-action="toggle-result"` on any clickable element toggles
 *     the result's reveal state; tagged elements get `data-go-revealed`
 *     toggled to reflect it, for custom styling.
 *
 * For a fully custom design (canvas, a different framework, anything
 * beyond restyling tagged elements), read the `gameInfo` property instead
 * — it's the same data these bindings use, and it's live-updated on the
 * same schedule (also fired as a `metadata-changed` event, `detail:
 * GoGameInfo | null`, for code that only holds a reference to this
 * element rather than the `<go-board>`).
 *
 * Colors adapt to `prefers-color-scheme: light` automatically — no
 * attribute needed.
 *
 * The result reveal state resets (hides again) whenever a new game loads,
 * but is left alone across move navigation.
 *
 * Listens to `sgf-loaded`, `sgf-error`, and `navigate` on its `<go-board>`
 * (the last one is what drives the live comment).
 *
 * Attributes:
 *   - `board` (optional element id of the `<go-board>` to read from;
 *     otherwise the nearest one is located automatically)
 *   - `details` — set to `"false"` to hide the second card (meta line,
 *     result, comment) entirely, showing just the players row. Only
 *     affects the *default* UI — for custom markup, simply don't include
 *     those `data-go-field` elements.
 */
export declare class GoMetadataContainerElement extends HTMLElement {
    static get observedAttributes(): string[];
    private board;
    private resultRevealed;
    private slotEl;
    private emptyEl;
    private cardEl;
    private detailsEl;
    private metaEl;
    private resultLineEl;
    private resultValueEl;
    private commentEl;
    /** Whether the info below the player panels (meta line/result/comment) is shown, per the `details` attribute. */
    private get showDetails();
    /**
     * The currently displayed game info, or `null` when no game is loaded.
     * Read this for a fully custom design instead of (or alongside)
     * `data-go-field` bindings; also fired as a `metadata-changed` event
     * whenever it changes.
     */
    get gameInfo(): GoGameInfo | null;
    attributeChangedCallback(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly handleGameLoaded;
    private readonly handleNavigate;
    private readonly handleClick;
    private render;
    /**
     * Finds elements matching `selector` among what the slot is actually
     * rendering right now: the developer's assigned light-DOM children if
     * any were provided, otherwise the slot's own default fallback content.
     */
    private queryTagged;
}
