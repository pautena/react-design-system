import { FunctionComponent, ReactElement } from "react";
import { BulletVariant, LabelVariant } from "../data-display";
import { DrawerProps as MuiDrawerProps, Palette, Theme } from "@mui/material";

export type DrawerSize = "small" | "medium";
export type DrawerSubmenuVariant = "collapse" | "popover";

export type DrawerSubmenuVariantProp =
  | DrawerSubmenuVariant
  | {
      open: DrawerSubmenuVariant;
      closed: DrawerSubmenuVariant;
    };

export interface DrawerItemAvatar {
  src: string;
  alt: string;
}

export interface DrawerItemLabel {
  text: string;
  variant: LabelVariant;
}

export interface DrawerItemBullet {
  variant: BulletVariant;
}

export interface DrawerNavigationItemLink {
  id: string;
  text: string;
  href: string;
  icon?: ReactElement;
  avatar?: DrawerItemAvatar;
  label?: DrawerItemLabel;
  bullet?: DrawerItemBullet;
}

export type DrawerNavigationItemCollapsable = Pick<
  DrawerNavigationItemLink,
  "id" | "text" | "icon"
> & {
  items: DrawerNavigationItem[];
};

export type DrawerNavigationItem = DrawerNavigationItemLink | DrawerNavigationItemCollapsable;

export interface DrawerNavigationSection {
  title?: string;
  items: DrawerNavigationItem[];
}

export interface DrawerNavigation {
  items: DrawerNavigationSection[];
}

export interface DrawerContentProps {
  /**
   * Item currently selected in the navigation
   */
  selectedItem?: string;
  /**
   * Object with the content that has to be rendered
   */
  nav: DrawerNavigation;
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
  /**
   * How the submenu has to be shown. collapsable by default
   */
  submenuVariant?: DrawerSubmenuVariant;
}
export type DrawerContentComponent = FunctionComponent<DrawerContentProps>;
export type DrawerContentElement = ReactElement<DrawerContentProps, DrawerContentComponent>;

export interface DrawerProps extends MuiDrawerProps {
  children: DrawerContentElement;
}

export type DrawerComponent = FunctionComponent<DrawerProps>;
export type DrawerElement = ReactElement<DrawerProps, DrawerComponent>;

export const getDrawerItemColors = (theme: Theme, selected: boolean | undefined) => ({
  color: selected ? theme.palette.primary.main : undefined,
  fontWeight: selected ? theme.typography.fontWeightBold : theme.typography.fontWeightMedium,
});