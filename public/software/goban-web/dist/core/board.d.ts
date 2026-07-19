import { Color } from "./types";
import type { MoveResult, Vertex } from "./types";
/**
 * Pure game-state engine for Go: stone placement, captures, suicide
 * prevention and the simple ko rule. Holds no rendering/DOM concerns.
 */
export declare class Board {
    readonly size: number;
    private grid;
    private _currentColor;
    private _koPoint;
    private _passes;
    private _over;
    private _captures;
    constructor(size?: number);
    get currentColor(): Color;
    get isOver(): boolean;
    get captures(): Readonly<Record<Color.Black | Color.White, number>>;
    /** The vertex forbidden this turn by the simple ko rule, if any. */
    get koPoint(): Vertex | null;
    get(x: number, y: number): Color;
    /**
     * Directly sets a point's color, bypassing capture/suicide/ko rules and
     * turn order. For SGF setup properties (`AB`/`AW`/`AE`) or board-editing
     * tools — not gameplay, which should go through `play()` instead.
     */
    set(x: number, y: number, color: Color): void;
    clone(): Board;
    isLegalMove(x: number, y: number, color?: Color): boolean;
    /** Places a stone for the current player, applying capture/suicide/ko rules. */
    play(x: number, y: number): MoveResult;
    /** Passes the current player's turn. Two consecutive passes end the game. */
    pass(): void;
    private toIndex;
    private toVertex;
    private inBounds;
    private neighborsOf;
    /** Flood-fills the group containing `index` and computes its liberties. */
    private groupAt;
    private tryPlay;
    private illegal;
}
