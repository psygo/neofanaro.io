import type { RefObject } from "react";
/**
 * Wires `eventName` on `ref`'s element to `handler`. `handler` is kept
 * fresh via a ref rather than as an effect dependency, so passing a new
 * inline arrow function as a prop on every render doesn't tear down and
 * re-add the DOM listener each time.
 */
export declare function useCustomEvent<Detail>(ref: RefObject<Element | null>, eventName: string, handler: ((detail: Detail) => void) | undefined): void;
