import { ReactNode } from '../../../../node_modules/react';
import { ValueItemElement } from '../value-item/value-item';
/**
 * Props for the GroupValueCard component.
 */
export interface GroupValueCardProps {
    /**
     * Main title of the card.
     */
    title: string;
    /**
     * Optional subtitle shown below the title.
     */
    subtitle?: string;
    /**
     * Whether to center card content.
     */
    centered?: boolean;
    /**
     * Value item elements rendered in the content area.
     */
    children: ValueItemElement | ValueItemElement[] | ReactNode;
    /**
     * Compact style mode.
     */
    dense?: boolean;
    /**
     * Additional CSS classes for custom styling.
     */
    className?: string;
}
/**
 * Card wrapper for grouped value display.
 */
export declare function GroupValueCard({ title, subtitle, centered, children, dense, className, }: GroupValueCardProps): import("react/jsx-runtime").JSX.Element;
