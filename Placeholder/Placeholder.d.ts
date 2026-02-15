import { ReactElement } from '../../node_modules/react';
type IconColor = "inherit" | "action" | "disabled" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
/**
 * Action button configuration for placeholder
 */
export interface PlaceholderAction {
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Button text label
     */
    text: string;
    /**
     * Navigation URL when clicked
     */
    href?: string;
    /**
     * Click handler function
     */
    onClick?: () => void;
}
/**
 * Arguments passed to icon render function
 */
export interface PlaceholderIconArgs {
    /**
     * Icon size in pixels
     */
    size: number;
    /**
     * Icon color theme
     */
    color: IconColor;
}
/**
 * Function that renders a custom icon element
 *
 * @param args - Icon configuration arguments
 */
export type PlaceholderIcon = ({ size, color, }: PlaceholderIconArgs) => ReactElement;
/**
 * Props for the Placeholder component
 */
export interface PlaceholderProps {
    /**
     * Main title text
     */
    title: string;
    /**
     * Subtitle or description text
     */
    subtitle: string;
    /**
     * Icon size in pixels
     * @default 200
     */
    iconSize?: number;
    /**
     * Custom icon render function
     */
    icon?: PlaceholderIcon;
    /**
     * Action buttons to display
     */
    actions?: PlaceholderAction[];
}
/**
 * Empty state placeholder with optional icon and actions
 */
export declare function Placeholder({ title, subtitle, icon, iconSize, actions, }: PlaceholderProps): import("react/jsx-runtime").JSX.Element;
export default Placeholder;
