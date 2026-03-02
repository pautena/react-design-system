import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
/**
 * Props for the ValueCard component.
 */
export interface ValueCardProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Content to display in the card.
     */
    children?: ReactNode;
}
/**
 * Container to show labeled values.
 */
export declare function ValueCard({ children, className, ...rest }: ValueCardProps): import("react/jsx-runtime").JSX.Element;
