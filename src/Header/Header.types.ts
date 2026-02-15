import type {
  BoxProps,
  BreadcrumbsProps,
  ButtonProps,
  ContainerProps,
  LinkProps,
  PropTypes,
  TabProps,
  TabsProps,
} from "@mui/material";
import type { JSXElementConstructor, ReactElement } from "react";
import type { HeaderSubtitleProps, HeaderTitleProps } from "./header-title";

export type HeaderPreset = PropTypes.Color | "transparent" | "paper";
export type HeaderActionVariant = "text" | "outlined" | "contained";

export type HeaderActionColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

/**
 * Action button configuration for the header
 */
export type HeaderAction = {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Button text label
   */
  text: string;
  /**
   * Whether the action is disabled
   */
  disabled?: boolean;
  /**
   * Navigation URL when clicked
   */
  href?: string;
  /**
   * Click handler function
   */
  onClick?: () => void;
  /**
   * Button style variant
   * @default "contained"
   */
  variant?: HeaderActionVariant;
  /**
   * Button color theme
   * @default "primary"
   */
  color?: HeaderActionColor;
};

/**
 * Breadcrumb navigation item
 */
export interface HeaderBreadcrumb {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Display text
   */
  text: string;
  /**
   * Navigation URL
   */
  link: string;
}

/**
 * Tab configuration for the header
 */
export interface HeaderTab {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Tab label text
   */
  label: string;
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
  /**
   * Navigation URL for the tab
   */
  href?: string;
  /**
   * Route path pattern for active state matching
   */
  path?: string;
}

export interface HeaderNavigationButton {
  /**
   * Button text
   */
  text: string;
  /**
   * Url where the user has to be redirected
   */
  href: string;
  /**
   * Icon to be shown before the button
   */
  icon?: ReactElement;
}

/**
 * Interface representing the slots for the Header component.
 */
export interface HeaderSlots {
  /**
   * Root container element
   */
  root?: JSXElementConstructor<BoxProps>;
  /**
   * Container element wrapping the header content
   */
  container?: JSXElementConstructor<ContainerProps>;
  /**
   * Container for header content (title/subtitle/breadcrumbs area)
   */
  contentContainer?: JSXElementConstructor<BoxProps>;
  /**
   * Container for title and subtitle area
   */
  titleContainer?: JSXElementConstructor<BoxProps>;
  /**
   * Navigation button component
   */
  navigationButton?: JSXElementConstructor<ButtonProps>;
  /**
   * Breadcrumbs container component
   */
  breadcrumbs?: JSXElementConstructor<BreadcrumbsProps>;
  /**
   * Individual breadcrumb link component
   */
  breadcrumbLink?: JSXElementConstructor<LinkProps>;
  /**
   * Title component
   */
  title?: JSXElementConstructor<HeaderTitleProps>;
  /**
   * Subtitle component
   */
  subtitle?: JSXElementConstructor<HeaderSubtitleProps>;
  /**
   * Container for action buttons
   */
  actionsContainer?: JSXElementConstructor<BoxProps>;
  /**
   * Individual action button component
   */
  actionButton?: JSXElementConstructor<ButtonProps>;
  /**
   * Tabs container component
   */
  tabs?: JSXElementConstructor<TabsProps>;
  /**
   * Individual tab component
   */
  tab?: JSXElementConstructor<TabProps>;
}

/**
 * Interface representing the slot properties for the Header component.
 */
export interface HeaderSlotProps {
  /**
   * Props for the root container
   */
  root?: Partial<BoxProps>;
  /**
   * Props for the container element
   */
  container?: Partial<ContainerProps>;
  /**
   * Props for the content container
   */
  contentContainer?: Partial<BoxProps>;
  /**
   * Props for the title container
   */
  titleContainer?: Partial<BoxProps>;
  /**
   * Props for the navigation button
   */
  navigationButton?: Partial<ButtonProps>;
  /**
   * Props for the breadcrumbs
   */
  breadcrumbs?: Partial<BreadcrumbsProps>;
  /**
   * Props for individual breadcrumb links
   */
  breadcrumbLink?: Partial<LinkProps>;
  /**
   * Props for the title component
   */
  title?: Partial<HeaderTitleProps>;
  /**
   * Props for the subtitle component
   */
  subtitle?: Partial<HeaderSubtitleProps>;
  /**
   * Props for the actions container
   */
  actionsContainer?: Partial<BoxProps>;
  /**
   * Props for individual action buttons
   */
  actionButton?: Partial<ButtonProps>;
  /**
   * Props for the tabs container
   */
  tabs?: Partial<TabsProps>;
  /**
   * Props for individual tabs
   */
  tab?: Partial<TabProps>;
}

export type HeaderProps = {
  /**
   * Title of the header
   */
  title?: string | ReactElement;
  /**
   * Show a loading indicator in the title position
   */
  loadingTitle?: boolean;
  /**
   * Subtitle of the header
   */
  subtitle?: string | ReactElement;
  /**
   * Show a loading indicator in the subtitle position
   */
  loadingSubtitle?: boolean;
  /**
   * Color palete used to render the component
   */
  preset?: HeaderPreset;
  /**
   * List of breadcumbs to represent the path to reach
   * the page that we are
   */
  breadcrumbs?: HeaderBreadcrumb[];
  /**
   * List of actions that can be performed by the user.
   * Each action will be a button in the header.
   */
  actions?: HeaderAction[];
  /**
   * Variant used to render the actions
   */
  actionsVariant?: HeaderActionVariant;
  /**
   * If is set, a list of tabs is dispayed at the bottom
   */
  tabs?: HeaderTab[];
  /**
   * The tabs will work using
   * - a panel container (panel)
   * - using a the navigation system (navigation).
   */
  tabsMode?: "panel" | "navigation";
  /**
   * A single button that helps the user to navigate to
   * a screen related to the current screen
   */
  navigationButton?: HeaderNavigationButton;
  /**
   * Whether to display a border at the bottom of the header
   */
  border?: boolean;
  /**
   * Optional slots for custom rendering within the header
   */
  slots?: HeaderSlots;
  /**
   * Optional props for the slots
   */
  slotProps?: HeaderSlotProps;
};
