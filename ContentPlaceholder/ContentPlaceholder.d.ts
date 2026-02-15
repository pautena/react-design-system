/**
 * Props for the ContentPlaceholder component.
 */
export interface ContentPlaceholderProps {
    /**
     * Optional size of the placeholder.
     */
    size?: number;
    /**
     * Optional padding for the placeholder.
     */
    p?: number;
    /**
     * Content to display before the skeleton grid
     */
    children?: React.ReactNode;
}
/**
 * A component that serves as a placeholder for content, displaying a skeleton grid.
 */
export declare function ContentPlaceholder({ size, children, p, }: ContentPlaceholderProps): import("react/jsx-runtime").JSX.Element;
export default ContentPlaceholder;
