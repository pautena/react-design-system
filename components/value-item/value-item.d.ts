import { HTMLAttributes, ReactElement, ReactNode } from '../../../node_modules/react';
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
type ResponsiveValue<T> = T | T[] | Partial<Record<Breakpoint, T>>;
/**
 * Props for the ValueItem component.
 */
export interface ValueItemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether to display a left border.
     * Supports scalar, array and breakpoint object values.
     * @default true
     */
    bordered?: ResponsiveValue<boolean>;
    /**
     * Responsive size hint kept for API compatibility.
     */
    size?: ResponsiveValue<number>;
    /**
     * Content to display.
     */
    children?: ReactNode;
}
/**
 * ValueItem component type.
 */
export type ValueItemComponent = (props: ValueItemProps) => ReactElement;
/**
 * ValueItem element type.
 */
export type ValueItemElement = ReactElement<ValueItemProps, ValueItemComponent>;
export declare const valueItemClasses: {
    root: string;
    content: string;
};
/**
 * Wraps value display components and applies consistent spacing and borders.
 */
export declare const ValueItem: ValueItemComponent;
export default ValueItem;
