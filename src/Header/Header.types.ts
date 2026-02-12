import type { PropTypes } from "@mui/material";
import type { ReactElement } from "react";

export type HeaderPreset = PropTypes.Color | "transparent";
export type HeaderActionVariant = "text" | "outlined" | "contained";

export type HeaderAction = {
  id: string;
  text: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
};

export interface HeaderBreadcrumb {
  id: string;
  text: string;
  link: string;
}

export interface HeaderTab {
  id: string;
  label: string;
  disabled?: boolean;
  href?: string;
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
};
