import type {
  ComponentType,
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
} from "react";
import type { BadgeVariant } from "@/components/data-display/badge/badge";
import type { BulletVariant } from "@/components/data-display/bullet/bullet";

/**
 * Drawer states.
 * - open: expanded drawer with labels
 * - close: mini drawer with icons only
 */
export type DrawerState = "open" | "close";

/**
 * Drawer size variants.
 */
export type DrawerSize = "small" | "medium";

/**
 * Avatar configuration for drawer items.
 */
export interface DrawerItemAvatar {
  /**
   * Avatar image source URL.
   */
  src: string;
  /**
   * Alt text for the avatar image.
   */
  alt: string;
}

/**
 * Label configuration for drawer items.
 */
export interface DrawerItemLabel {
  /**
   * Label text content.
   */
  text: string;
  /**
   * Label color variant.
   */
  variant: BadgeVariant;
}

/**
 * Bullet indicator configuration for drawer items.
 */
export interface DrawerItemBullet {
  /**
   * Bullet color variant.
   */
  variant: BulletVariant;
}

/**
 * Navigation link item in the drawer.
 */
export interface DrawerNavigationLink {
  /**
   * Item type discriminator.
   */
  kind: "link";
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
  href: string;
  /**
   * Optional icon element.
   */
  icon?: ReactElement;
  /**
   * Optional avatar configuration.
   */
  avatar?: DrawerItemAvatar;
  /**
   * Optional label badge.
   */
  label?: DrawerItemLabel;
  /**
   * Optional bullet indicator.
   */
  bullet?: DrawerItemBullet;
}

/**
 * Collapsible navigation group with nested items.
 */
export type DrawerNavigationCollapsable = Pick<
  DrawerNavigationLink,
  "id" | "text" | "icon"
> & {
  /**
   * Item type discriminator.
   */
  kind: "collapsable";
  /**
   * Nested navigation items.
   */
  items: DrawerNavigationItem[];
};

/**
 * Section header in the drawer navigation.
 */
export interface DrawerNavigationHeader {
  /**
   * Item type discriminator.
   */
  kind: "header";
  /**
   * Unique identifier.
   */
  id: string;
  /**
   * Header text.
   */
  text: string;
}

/**
 * Union of all possible drawer navigation item types.
 */
export type DrawerNavigationItem =
  | DrawerNavigationLink
  | DrawerNavigationCollapsable
  | DrawerNavigationHeader;

/**
 * Complete navigation structure for the drawer.
 */
export type DrawerNavigation = DrawerNavigationItem[];

/**
 * Props for DrawerContent.
 */
export interface DrawerContentProps {
  /**
   * Navigation items to render.
   */
  navigation: DrawerNavigation;
}

/**
 * Props for Drawer component.
 */
export type DrawerProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

/**
 * Shared item colors returned from drawer selection state.
 */
export const getDrawerItemColors = (
  selected: boolean | undefined,
): {
  colorClass: string;
  fontWeight: CSSProperties["fontWeight"];
} => ({
  colorClass: selected ? "text-primary" : "text-foreground",
  fontWeight: selected ? 700 : 500,
});

/**
 * Props for DrawerAppBar.
 */
export interface DrawerAppBarProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  /**
   * Title to display in the app bar.
   */
  title?: string;
}

/**
 * Props for DrawerProvider.
 */
export interface DrawerProviderProps extends PropsWithChildren {
  /**
   * Initial state of the drawer.
   */
  initialState?: DrawerState;
  /**
   * Size of the drawer.
   * @default "medium"
   */
  size?: DrawerSize;
  /**
   * Whether the drawer is clipped under the app bar.
   * @default true
   */
  clipped?: boolean;
  /**
   * Width of the drawer in pixels.
   */
  drawerWidth?: number;
  /**
   * ID of currently selected navigation item.
   */
  selectedItemId?: string;
  /**
   * Component used to render links.
   * @default "a"
   */
  LinkComponent?: ComponentType<any> | string;
  /**
   * Callback fired when drawer state changes.
   * @param newState - The new drawer state.
   */
  onStateChange?: (newState: DrawerState) => void;
}
