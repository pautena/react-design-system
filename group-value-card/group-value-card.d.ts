import { ValueItemElement } from '../value-item';
/**
 * Props for the GroupValueCard component.
 */
export interface GroupValueCardProps {
    /**
     * The main title of the card.
     */
    title: string;
    /**
     * An optional subtitle for the card.
     */
    subtitle?: string;
    /**
     * If true, the content will be centered.
     */
    centered?: boolean;
    /**
     * The children elements to be rendered inside the card.
     */
    children: ValueItemElement | ValueItemElement[];
    /**
     * If true, the card will have a denser layout.
     */
    dense?: boolean;
}
/**
 * GroupValueCard component renders a card with a title, subtitle, and children content.
 * It supports customization for dense layout and centered content.
 */
export declare const GroupValueCard: ({ title, subtitle, centered, children, dense, }: GroupValueCardProps) => import("react/jsx-runtime").JSX.Element;
