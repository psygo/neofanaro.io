import type { CSSProperties } from "react";
import type { GoGameInfo, GoMetadataContainerElement } from "goban-web";
import "goban-web";
export interface GoMetadataContainerProps {
    /** Id of the `<go-board>` to read from; otherwise the nearest one is located automatically. */
    board?: string;
    /** Set to `false` to hide the meta line/result/comment card, showing just the players row. */
    details?: boolean;
    id?: string;
    className?: string;
    style?: CSSProperties;
    onMetadataChanged?: (info: GoGameInfo | null) => void;
}
/** React wrapper for `<go-metadata-container>`. `ref` gives you the real element, whose `gameInfo` getter exposes the parsed SGF game info for custom rendering. */
export declare const GoMetadataContainer: import("react").ForwardRefExoticComponent<GoMetadataContainerProps & import("react").RefAttributes<GoMetadataContainerElement>>;
