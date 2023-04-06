import { FunctionComponent, ReactElement } from "react";
import { BulletVariant, LabelVariant } from "../data-display";
import { DrawerProps as MuiDrawerProps } from "@mui/material";

export interface NavItemAvatar {
  src: string;
  alt: string;
}

export interface NavItemLabel {
  text: string;
  variant: LabelVariant;
}

export interface NavItemBullet {
  variant: BulletVariant;
}

export interface NavItemLink {
  id: string;
  text: string;
  href: string;
  icon?: ReactElement;
  avatar?: NavItemAvatar;
  label?: NavItemLabel;
  bullet?: NavItemBullet;
}

export type NavItemCollapsable = Pick<NavItemLink, "id" | "text" | "icon"> & {
  items: NavItemLink[];
};

export type NavItem = NavItemLink | NavItemCollapsable;

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export interface Nav {
  items: NavSection[];
}

export interface DrawerContentProps {
  /**
   * Item currently selected in the navigation
   */
  selectedItem?: string;
  /**
   * Object with the content that has to be rendered
   */
  nav: Nav;
}
export type DrawerContentComponent = FunctionComponent<DrawerContentProps>;
export type DrawerContentElement = ReactElement<DrawerContentProps, DrawerContentComponent>;

export interface DrawerProps extends MuiDrawerProps {
  children: DrawerContentElement;
}

export type DrawerComponent = FunctionComponent<DrawerProps>;
export type DrawerElement = ReactElement<DrawerProps, DrawerComponent>;
