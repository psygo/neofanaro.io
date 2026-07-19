export { Board } from "./core/board";
export { Color, oppositeColor } from "./core/types";
export type { IllegalReason, IllegalResult, MoveResult, PlayResult, Vertex, } from "./core/types";
export { SGFParseError, isSGFPass, parseSGF, parseSGFLabel, sgfPointToVertex, sgfPointsForProperty, } from "./core/sgf";
export type { SGFGameTree, SGFNode, SGFProperties } from "./core/sgf";
export { GoBoardElement } from "./elements/go-board-element";
export type { CoordinateSide, GoBoardKeyAction, GoBoardKeyBindings, IllegalMoveEventDetail, MoveEventDetail, NavigateEventDetail, SGFErrorEventDetail, SGFLoadedEventDetail, } from "./elements/go-board-element";
export { GoBoardContainerElement } from "./elements/go-board-container-element";
export { GoMetadataContainerElement } from "./elements/go-metadata-container-element";
export type { GoGameInfo, GoPlayerInfo } from "./elements/go-metadata-container-element";
export { GoBoardControlsElement } from "./elements/go-board-controls-element";
export { GobanWrapperElement } from "./elements/goban-wrapper-element";
declare global {
    interface HTMLElementTagNameMap {
        "go-board": import("./elements/go-board-element").GoBoardElement;
        "go-board-container": import("./elements/go-board-container-element").GoBoardContainerElement;
        "go-metadata-container": import("./elements/go-metadata-container-element").GoMetadataContainerElement;
        "go-board-controls": import("./elements/go-board-controls-element").GoBoardControlsElement;
        "goban-wrapper": import("./elements/goban-wrapper-element").GobanWrapperElement;
    }
}
