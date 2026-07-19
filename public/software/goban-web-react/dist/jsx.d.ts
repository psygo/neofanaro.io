declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "go-board": import("react").DetailedHTMLProps<import("react").HTMLAttributes<import("goban-web").GoBoardElement>, import("goban-web").GoBoardElement>;
            "go-board-container": import("react").DetailedHTMLProps<import("react").HTMLAttributes<import("goban-web").GoBoardContainerElement>, import("goban-web").GoBoardContainerElement>;
            "go-metadata-container": import("react").DetailedHTMLProps<import("react").HTMLAttributes<import("goban-web").GoMetadataContainerElement>, import("goban-web").GoMetadataContainerElement>;
            "go-board-controls": import("react").DetailedHTMLProps<import("react").HTMLAttributes<import("goban-web").GoBoardControlsElement>, import("goban-web").GoBoardControlsElement>;
            "goban-wrapper": import("react").DetailedHTMLProps<import("react").HTMLAttributes<import("goban-web").GobanWrapperElement>, import("goban-web").GobanWrapperElement>;
        }
    }
}
export {};
