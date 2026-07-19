import type { CSSProperties, ReactNode } from "react";
import type { GoBoardContainerElement } from "goban-web";
import "goban-web";
export interface GoBoardContainerProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
/**
 * React wrapper for `<go-board-container>` — a pure layout wrapper for a
 * `<GoBoard>` and its peripheral components (`<GoMetadataContainer>`,
 * `<GoBoardControls>`, ...). Carries no attributes of its own.
 */
export declare const GoBoardContainer: import("react").ForwardRefExoticComponent<GoBoardContainerProps & import("react").RefAttributes<GoBoardContainerElement>>;
