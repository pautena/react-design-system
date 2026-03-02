import { HTMLAttributes } from '../../../../node_modules/react';
/**
 * Props for the HeaderTitle component.
 */
export interface HeaderTitleProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * The title content to display.
     */
    children?: React.ReactNode;
}
/**
 * Header title component with optional loading state.
 */
export declare function HeaderTitle({ loading, children, ...props }: HeaderTitleProps): import("react/jsx-runtime").JSX.Element;
/**
 * Props for the HeaderSubtitle component.
 */
export interface HeaderSubtitleProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether to show a loading indicator.
     */
    loading?: boolean;
    /**
     * The subtitle content to display.
     */
    children?: React.ReactNode;
}
/**
 * Header subtitle component with optional loading state.
 */
export declare function HeaderSubtitle({ loading, children, ...props }: HeaderSubtitleProps): import("react/jsx-runtime").JSX.Element;
