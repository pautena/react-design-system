import { HTMLAttributes } from '../../../node_modules/react';
/**
 * Props for the Content component.
 */
export interface ContentProps extends HTMLAttributes<HTMLElement> {
    /**
     * Content rendered inside the main container.
     */
    children?: React.ReactNode;
}
/**
 * Main page content container.
 */
export declare function Content({ children, className, ...props }: ContentProps): import("react/jsx-runtime").JSX.Element;
export default Content;
