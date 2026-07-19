import type { Vertex } from "./types";
export type SGFProperties = Record<string, string[]>;
export interface SGFNode {
    properties: SGFProperties;
}
export interface SGFGameTree {
    nodes: SGFNode[];
    children: SGFGameTree[];
}
export declare class SGFParseError extends Error {
    readonly position: number;
    constructor(message: string, position: number);
}
/** Parses an SGF collection (one or more game trees) into a tree structure. */
export declare function parseSGF(input: string): SGFGameTree[];
/**
 * Converts an SGF point/move value (e.g. "pd") to zero-indexed board
 * coordinates. Returns null for values that aren't a two-letter point,
 * such as a pass ("" in FF[4], or "tt" on boards up to 19x19 in FF[3]).
 */
export declare function sgfPointToVertex(value: string): Vertex | null;
/** True if an SGF move value represents a pass. */
export declare function isSGFPass(value: string, boardSize: number): boolean;
/**
 * Converts a node's list of point values for a given property (e.g. the
 * setup properties `AB`/`AW`/`AE`, or the point-list markup properties
 * `TR`/`SQ`/`CR`/`MA`) to vertices, silently skipping any value that
 * isn't a valid two-letter point. Missing property returns `[]`.
 */
export declare function sgfPointsForProperty(node: SGFNode, id: string): Vertex[];
/**
 * Splits a single `LB` value (`"xy:text"`) into its point and label text.
 * Returns `null` if `value` isn't a two-letter point followed by `:`.
 */
export declare function parseSGFLabel(value: string): {
    vertex: Vertex;
    text: string;
} | null;
