import { ReactNode } from '../../../node_modules/react';
/**
 * Props for the Board component.
 */
export interface BoardProps {
    /**
     * The content to display and copy to clipboard.
     */
    content?: string | string[];
    /**
     * Vertical spacing between lines when content is an array.
     * @default 0
     */
    spacing?: 0 | 1 | 2 | 3 | 4 | 5;
    /**
     * Additional CSS classes for custom styling.
     */
    className?: string;
    /**
     * Optional custom children rendered instead of the default content.
     */
    children?: ReactNode;
}
/**
 * Surface for displaying and copying plain content.
 */
export declare function Board({ content: contentProp, spacing, className, children, }: BoardProps): import("react/jsx-runtime").JSX.Element;
export default Board;
