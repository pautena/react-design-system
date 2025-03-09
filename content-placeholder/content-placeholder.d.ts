import { PropsWithChildren } from '../../node_modules/react';
/**
 * Props for the ContentPlaceholder component.
 */
export type ContentPlaceholderProps = PropsWithChildren<{
    /**
     * Optional size of the placeholder.
     */
    size?: number;
    /**
     * Optional padding for the placeholder.
     */
    p?: number;
}>;
/**
 * A component that serves as a placeholder for content, displaying a skeleton grid.
 */
export declare const ContentPlaceholder: ({ size, children, p }: ContentPlaceholderProps) => import("react/jsx-runtime").JSX.Element;
