import type { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import type { Theme } from "@mui/material/styles";
import type {
  CSSProperties,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
} from "react";
import type { BulletVariant } from "../Bullet";
import type { LabelVariant } from "../Label";
import type { DrawerAppBarProps } from "./DrawerAppBar";

/**
 * Drawer display variants
 */
export type DrawerVariant = "temporary" | "mini" | "persistent";

/**
 * Drawer open/close states
 */
export type DrawerState = "open" | "collapse" | "close";

/**
 * Drawer size variants
 */
export type DrawerSize = "small" | "medium";

/**
 * Avatar configuration for drawer items
 */
export interface DrawerItemAvatar {
  /**
   * Avatar image source URL
   */
  src: string;
  /**
   * Alt text for the avatar image
   */
  alt: string;
}

/**
 * Label configuration for drawer items
 */
export interface DrawerItemLabel {
  /**
   * Label text content
   */
  text: string;
  /**
   * Label color variant
   */
  variant: LabelVariant;
}

/**
 * Bullet indicator configuration for drawer items
 */
export interface DrawerItemBullet {
  /**
   * Bullet color variant
   */
  variant: BulletVariant;
}

/**
 * Navigation link item in the drawer
 */
export interface DrawerNavigationLink {
  /**
   * Item type discriminator
   */
  kind: "link";
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
  href: string;
  /**
   * Optional icon element
   */
  icon?: ReactElement;
  /**
   * Optional avatar configuration
   */
  avatar?: DrawerItemAvatar;
  /**
   * Optional label badge
   */
  label?: DrawerItemLabel;
  /**
   * Optional bullet indicator
   */
  bullet?: DrawerItemBullet;
}

/**
 * Collapsable navigation group with nested items
 */
export type DrawerNavigationCollapsable = Pick<
  DrawerNavigationLink,
  "id" | "text" | "icon"
> & {
  /**
   * Item type discriminator
   */
  kind: "collapsable";
  /**
   * Nested navigation items
   */
  items: DrawerNavigationItem[];
};

/**
 * Section header in the drawer navigation
 */
export interface DrawerNavigationHeader {
  /**
   * Item type discriminator
   */
  kind: "header";
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Header text
   */
  text: string;
}

/**
 * Union of all possible drawer navigation item types
 */
export type DrawerNavigationItem =
  | DrawerNavigationLink
  | DrawerNavigationCollapsable
  | DrawerNavigationHeader;

/**
 * Complete navigation structure for the drawer
 */
export type DrawerNavigation = DrawerNavigationItem[];

export interface DrawerContentProps {
  /**
   * Object with the content that has to be rendered
   */
  navigation: DrawerNavigation;
}

/**
 * DrawerContent component type
 */
export type DrawerContentComponent = FunctionComponent<DrawerContentProps>;

/**
 * DrawerContent element type
 */
export type DrawerContentElement = ReactElement<
  DrawerContentProps,
  DrawerContentComponent
>;

/**
 * Props for the Drawer component
 *
 * @extends MuiDrawerProps
 */
export type DrawerProps = PropsWithChildren<MuiDrawerProps>;

/**
 * Drawer component type
 */
export type DrawerComponent = FunctionComponent<DrawerProps>;

/**
 * Drawer element type
 */
export type DrawerElement = ReactElement<DrawerProps, DrawerComponent>;

/**
 * Returns color and font weight styles for drawer items based on selection state
 *
 * @param theme - MUI theme object
 * @param selected - Whether the item is selected
 */
export const getDrawerItemColors = (
  theme: Theme,
  selected: boolean | undefined,
): {
  color?: string;
  fontWeight: CSSProperties["fontWeight"];
} => ({
  color: selected ? theme.palette.primary.main : undefined,
  fontWeight: selected
    ? theme.typography.fontWeightBold
    : theme.typography.fontWeightMedium,
});

/**
 * DrawerAppBar component type
 */
export type DrawerAppBarComponent = FunctionComponent<DrawerAppBarProps>;

/**
 * DrawerAppBar element type
 */
export type DrawerAppBarElement = ReactElement<
  DrawerAppBarProps,
  DrawerAppBarComponent
>;
