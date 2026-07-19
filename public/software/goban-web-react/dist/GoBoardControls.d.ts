import type { CSSProperties, ReactNode } from "react";
import type { GoBoardControlsElement } from "goban-web";
import "goban-web";
export interface GoBoardControlsProps {
    /** Id of the `<go-board>` to control; otherwise the nearest one is located automatically. */
    board?: string;
    /** Set to `false` to hide the move-count counter in the default button UI. */
    counter?: boolean;
    id?: string;
    className?: string;
    style?: CSSProperties;
    /** Custom control markup (`data-go-action`-tagged elements) — omit for the default button UI. */
    children?: ReactNode;
}
/** React wrapper for `<go-board-controls>` — Previous/Next/Play-all/Restart controls wired to a `<GoBoard>`. */
export declare const GoBoardControls: import("react").ForwardRefExoticComponent<GoBoardControlsProps & import("react").RefAttributes<GoBoardControlsElement>>;
