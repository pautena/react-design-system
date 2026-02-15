/**
 * Props for the HeaderTitle component
 */
export interface HeaderTitleProps {
    /**
     * Whether to show a loading indicator
     */
    loading?: boolean;
    /**
     * The title content to display
     */
    children?: React.ReactNode;
}
/**
 * Header title component with optional loading state
 */
export default function HeaderTitle({ loading, children }: HeaderTitleProps): import("react/jsx-runtime").JSX.Element;
/**
 * Props for the HeaderSubtitle component
 */
export interface HeaderSubtitleProps {
    /**
     * Whether to show a loading indicator
     */
    loading?: boolean;
    /**
     * The subtitle content to display
     */
    children?: React.ReactNode;
}
/**
 * Header subtitle component with optional loading state
 */
export declare function HeaderSubtitle({ loading, children }: HeaderSubtitleProps): import("react/jsx-runtime").JSX.Element;
