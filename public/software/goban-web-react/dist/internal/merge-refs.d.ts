import type { Ref } from "react";
/** Combines several refs (forwarded + internal) into one callback ref so a single DOM node can feed all of them. */
export declare function mergeRefs<T>(...refs: Array<Ref<T> | undefined | null>): (node: T | null) => void;
