import type { CSSProperties } from "react";
import type { CoordinateSide, GoBoardElement, IllegalMoveEventDetail, MoveEventDetail, NavigateEventDetail, SGFErrorEventDetail, SGFLoadedEventDetail } from "goban-web";
import "goban-web";
export interface GoBoardProps {
    size?: number | string;
    /** Space-separated subset of "top"/"bottom"/"left"/"right", or omit for all four. */
    coordinates?: CoordinateSide[] | string;
    interactive?: boolean;
    keyboardShortcuts?: boolean;
    sgf?: string;
    blackStone?: string;
    whiteStone?: string;
    width?: number | string;
    height?: number | string;
    backgroundImage?: string;
    coordinatesFont?: string;
    coordinatesFontSize?: string;
    coordinatesGap?: string;
    padding?: string;
    xStart?: string;
    xEnd?: string;
    yStart?: string;
    yEnd?: string;
    stoneSize?: string;
    labelOffsetX?: string;
    labelOffsetY?: string;
    labelFont?: string;
    labelFontSize?: string;
    cornerRadius?: string;
    theme?: string;
    /** Draws each stone's move number on top of it. Default off (unlike most boolean props here, `false`/omitted means off). */
    moveNumbers?: boolean;
    id?: string;
    className?: string;
    style?: CSSProperties;
    onMove?: (detail: MoveEventDetail) => void;
    onIllegalMove?: (detail: IllegalMoveEventDetail) => void;
    onPass?: () => void;
    onSgfLoaded?: (detail: SGFLoadedEventDetail) => void;
    onSgfError?: (detail: SGFErrorEventDetail) => void;
    onNavigate?: (detail: NavigateEventDetail) => void;
}
/**
 * React wrapper for `<go-board>`. Attributes are documented in Docs.md
 * (goban-web) under "Attributes" — this component accepts them as
 * camelCase props and applies them to the underlying custom element.
 * `ref` gives you the real `GoBoardElement`, so imperative calls
 * (`play()`, `pass()`, `reset()`, `nextMove()`, ...) work directly off it.
 */
export declare const GoBoard: import("react").ForwardRefExoticComponent<GoBoardProps & import("react").RefAttributes<GoBoardElement>>;
