import { FunctionComponent, ReactElement } from "react";
import { BulletVariant } from "../bullet";
import { LabelVariant } from "../label";
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

export interface NavItem {
  id: string;
  text: string;
  href: string;
  icon?: ReactElement;
  avatar?: NavItemAvatar;
  label?: NavItemLabel;
  bullet?: NavItemBullet;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export interface Nav {
  items: NavSection[];
}

export interface DrawerContentProps {
  nav: Nav;
}
export type DrawerContentComponent = FunctionComponent<DrawerContentProps>;
export type DrawerContentElement = ReactElement<DrawerContentProps, DrawerContentComponent>;

export interface DrawerProps extends MuiDrawerProps {
  children: DrawerContentElement;
}

export type DrawerComponent = FunctionComponent<DrawerProps>;
export type DrawerElement = ReactElement<DrawerProps, DrawerComponent>;
