/**
 * `<goban-wrapper>` — a non-visual theming scope for `<go-board>`'s
 * peripheral components (`<go-metadata-container>`, `<go-board-controls>`,
 * ...). They read their colors through a shared `--goban-*` custom
 * property layer (see "Theming" in Docs.md) that, left alone, follows the
 * visitor's OS-level `prefers-color-scheme`. Wrapping them in
 * `<goban-wrapper color-scheme="dark">` (or `"light"`) pins that choice
 * instead — useful for an in-page theme toggle, which JS can't otherwise
 * override since `prefers-color-scheme` itself isn't something a page can
 * set.
 *
 * Attributes:
 *   - `color-scheme` — `"dark"` | `"light"` | unset (default: follow
 *     `prefers-color-scheme`, i.e. no override at all).
 *
 * Carries no layout of its own (`display: contents`) — nest it around
 * whatever structure you already have, e.g.
 * `<goban-wrapper color-scheme="dark"><go-board-container>...</go-board-container></goban-wrapper>`.
 * Also sets the standard CSS `color-scheme` property to match, so native
 * browser UI (scrollbars, form controls) follows the same override.
 */
export declare class GobanWrapperElement extends HTMLElement {
    constructor();
}
