import type { GoBoardElement } from "./go-board-element";
/**
 * Locates the `<go-board>` associated with a peripheral element (controls,
 * metadata, ...). An explicit `board="<id>"` attribute takes precedence;
 * otherwise the nearest `go-board` within the closest `go-board-container`
 * ancestor is used, falling back to the first `go-board` in the document.
 */
export declare function resolveBoard(host: Element): GoBoardElement | null;
