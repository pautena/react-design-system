import { FunctionComponent, ReactElement } from "react";
import { BulletVariant, LabelVariant } from "../data-display";
import { DrawerProps as MuiDrawerProps, Palette } from "@mui/material";

export type DrawerSize = "small" | "medium";

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
  items: DrawerNavigationItemLink[];
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
}
export type DrawerContentComponent = FunctionComponent<DrawerContentProps>;
export type DrawerContentElement = ReactElement<DrawerContentProps, DrawerContentComponent>;

export interface DrawerProps extends MuiDrawerProps {
  children: DrawerContentElement;
}

export type DrawerComponent = FunctionComponent<DrawerProps>;
export type DrawerElement = ReactElement<DrawerProps, DrawerComponent>;

export const getDrawerItemColors = (palette: Palette, selected: boolean | undefined) => ({
  color: selected ? palette.primary.main : undefined,
  fontWeight: selected ? 600 : 400,
});
