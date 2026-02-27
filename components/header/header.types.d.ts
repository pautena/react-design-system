import { ReactElement } from '../../../node_modules/react';
export type HeaderPreset = "default" | "inherit" | "primary" | "secondary" | "transparent" | "paper";
export type HeaderActionVariant = "text" | "outlined" | "contained";
export type HeaderActionColor = "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
/**
 * Action button configuration for the header.
 */
export type HeaderAction = {
    /**
     * Unique identifier.
     */
    id: string;
    /**
     * Button text label.
     */
    text: string;
    /**
     * Whether the action is disabled.
     */
    disabled?: boolean;
    /**
     * Navigation URL when clicked.
     */
    href?: string;
    /**
     * Click handler function.
     */
    onClick?: () => void;
    /**
     * Button style variant.
     */
    variant?: HeaderActionVariant;
    /**
     * Button color theme.
     */
    color?: HeaderActionColor;
};
/**
 * Breadcrumb navigation item.
 */
export interface HeaderBreadcrumb {
    /**
     * Unique identifier.
     */
    id: string;
    /**
     * Display text.
     */
    text: string;
    /**
     * Navigation URL.
     */
    link: string;
}
/**
 * Tab configuration for the header.
 */
export interface HeaderTab {
    /**
     * Unique identifier.
     */
    id: string;
    /**
     * Tab label text.
     */
    label: string;
    /**
     * Whether the tab is disabled.
     */
    disabled?: boolean;
    /**
     * Navigation URL for the tab.
     */
    href?: string;
    /**
     * Route path pattern for active state matching.
     */
    path?: string;
}
/**
 * Navigation button configuration.
 */
export interface HeaderNavigationButton {
    /**
     * Button text.
     */
    text: string;
    /**
     * URL where the user is redirected.
     */
    href: string;
    /**
     * Icon shown before text.
     */
    icon?: ReactElement;
}
/**
 * Props for the Header component.
 */
export type HeaderProps = {
    /**
     * Title of the header.
     */
    title?: string | ReactElement;
    /**
     * Subtitle of the header.
     */
    subtitle?: string | ReactElement;
    /**
     * Color preset used by the component.
     */
    preset?: HeaderPreset;
    /**
     * List of breadcrumbs.
     */
    breadcrumbs?: HeaderBreadcrumb[];
    /**
     * Separator rendered between breadcrumb items.
     */
    breadcrumbSeparator?: string;
    /**
     * List of actions that can be performed by the user.
     */
    actions?: HeaderAction[];
    /**
     * Variant used to render actions.
     * @default "outlined"
     */
    actionsVariant?: HeaderActionVariant;
    /**
     * Tabs rendered at the bottom.
     */
    tabs?: HeaderTab[];
    /**
     * Tabs mode.
     */
    tabsMode?: "panel" | "navigation";
    /**
     * Optional navigation button.
     */
    navigationButton?: HeaderNavigationButton;
    /**
     * Whether to display a border at the bottom.
     */
    border?: boolean;
};
