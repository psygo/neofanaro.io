import type { RefObject } from "react";
type AttributeValue = string | number | boolean | undefined;
/**
 * Imperatively syncs `attrs` (attribute name -> value) onto `ref`'s element.
 * `undefined`/`false` removes the attribute, `true` sets it present with an
 * empty value, anything else is stringified — mirroring how goban-web's own
 * boolean-ish attributes (`interactive`, `details`, ...) are read via
 * `hasAttribute`/`getAttribute`, see Docs.md.
 *
 * Every write is diffed against the element's current value first: this
 * runs on every render (no dependency array), and `setAttribute` fires
 * `attributeChangedCallback` even when the value is unchanged — for
 * `<go-board>`, re-setting `size` to its already-current value resets the
 * whole board, so a redundant write here isn't just wasted work, it's a
 * visible bug (a click that triggers a re-render would wipe the board out
 * from under itself).
 */
export declare function useAttributes(ref: RefObject<Element | null>, attrs: Record<string, AttributeValue>): void;
export {};
