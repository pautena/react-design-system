import { ReactElement } from '../../../../node_modules/react';
export declare const getValueContentLabelId: (label: string) => string;
/**
 * Props for the ValueContent component.
 */
export interface ValueContentProps {
    /**
     * Name of the displayed value.
     */
    label: string;
    /**
     * If defined, a title tooltip is added around the children.
     */
    tooltip?: string;
    /**
     * Timeout before tooltip appears.
     * Kept for API compatibility.
     */
    tooltipEnterDelay?: number;
    /**
     * Component rendered under the label.
     */
    children: ReactElement;
    /**
     * Displays the value as compact.
     * @default false
     */
    dense?: boolean;
    /**
     * Additional CSS classes for custom styling.
     */
    className?: string;
}
/**
 * Displays a value with a label and optional tooltip.
 */
export declare function ValueContent({ label, tooltip, tooltipEnterDelay: _tooltipEnterDelay, children, dense, className, }: ValueContentProps): import("react/jsx-runtime").JSX.Element;
