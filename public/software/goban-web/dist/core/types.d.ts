export declare enum Color {
    Empty = 0,
    Black = 1,
    White = 2
}
export interface Vertex {
    x: number;
    y: number;
}
export declare function oppositeColor(color: Color): Color;
export interface PlayResult {
    legal: true;
    vertex: Vertex;
    color: Color;
    captured: Vertex[];
}
export type IllegalReason = "occupied" | "suicide" | "ko" | "out-of-bounds" | "game-over";
export interface IllegalResult {
    legal: false;
    reason: IllegalReason;
}
export type MoveResult = PlayResult | IllegalResult;
