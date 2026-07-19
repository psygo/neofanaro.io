/**
 * `<go-board-controls>` — wires Previous / Next / Play-all / Restart
 * behavior to its associated `<go-board>`. Ships a default button UI (its
 * colors adapt to `prefers-color-scheme: light` automatically — no
 * attribute needed), but is meant to be overridden: place your own markup
 * inside it (native `<slot>` fallback-content semantics mean any light-DOM
 * children you add replace the default UI entirely), tagged so this
 * element knows what they're for:
 *
 *   - `data-go-action="first" | "back-10" | "previous" | "next" |
 *     "forward-10" | "last" | "play-all" | "restart"` on any clickable
 *     element wires a click on it (or a descendant) to that action.
 *     `back-10`/`forward-10` jump 10 moves via `goToMove`; `first`/`last`
 *     jump to the start/end. Any action other than `play-all` stops
 *     auto-play if it's running.
 *   - `data-go-counter` on any element fills its text with the move
 *     position, e.g. "Move 3 / 221". Give the attribute a value with
 *     `{index}`/`{count}` placeholders for a custom format, e.g.
 *     `data-go-counter="{index} of {count}"`.
 *
 * Tagged action elements get `data-go-disabled` toggled when their action
 * is currently unavailable — style/hide via that attribute selector, since
 * arbitrary elements (not just `<button>`) may be tagged. The `play-all`
 * element additionally gets `data-go-playing` toggled while auto-play is
 * running, so custom markup can react to it (CSS or a MutationObserver).
 *
 * Attributes:
 *   - `board` (optional element id of the `<go-board>` to control;
 *     otherwise the nearest one is located automatically)
 *   - `counter` — set to `"false"` to omit the move counter from the
 *     *default* UI (no effect once you've replaced it with your own
 *     markup — just don't tag anything `data-go-counter` there)
 */
export declare class GoBoardControlsElement extends HTMLElement {
    private board;
    private playTimer;
    private slotEl;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly handleUpdate;
    private readonly handleClick;
    private performAction;
    private jumpBy;
    private togglePlayAll;
    private stopPlayAll;
    private setPlaying;
    private updateUI;
    /**
     * Finds elements matching `selector` among what the slot is actually
     * rendering right now: the developer's assigned light-DOM children if
     * any were provided, otherwise the slot's own default fallback content.
     */
    private queryTagged;
}
