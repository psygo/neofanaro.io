import type { CSSProperties, ReactNode } from "react";
import type { GobanWrapperElement } from "goban-web";
import "goban-web";
export interface GobanWrapperProps {
    /** Forces light/dark on `<GoMetadataContainer>`/`<GoBoardControls>` regardless of the OS setting. Omit to follow `prefers-color-scheme`. */
    colorScheme?: "light" | "dark";
    id?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
/**
 * React wrapper for `<goban-wrapper>` — a non-visual theming scope (no
 * layout of its own). Wrap `<GoBoardContainer>` in it to drive a
 * JS-controlled theme toggle; `prefers-color-scheme` alone can't be
 * flipped from script, since it only reflects the OS/browser setting.
 */
export declare const GobanWrapper: import("react").ForwardRefExoticComponent<GobanWrapperProps & import("react").RefAttributes<GobanWrapperElement>>;
