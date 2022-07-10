import { FunctionComponent, ReactElement } from "react";
import { BulletVariant } from "../bullet";
import { LabelVariant } from "../label";
import {
  DrawerProps as MuiDrawerProps,
} from "@mui/material";


export interface NavItem {
  id: string;
  name: string;
  icon?: ReactElement;
  avatar?:{
    src: string;
    alt: string;
  };
  label?:{
    text:string;
    variant:LabelVariant;
  };
  bullet?: {
    variant: BulletVariant;
  }
}

export interface NavSection {
  title?: string;
  items:  NavItem[];
}

export interface  Nav {
  items: NavSection[];
};

export interface DrawerContentProps {
  nav: Nav;
  open:boolean;
}
export type DrawerContentComponent = FunctionComponent<DrawerContentProps>;
export type DrawerContentElement = ReactElement<DrawerContentProps,DrawerContentComponent>;

export interface DrawerProps extends MuiDrawerProps {
  open: boolean;
  onDrawerClose: () => void;
  children: DrawerContentElement;
}

export type DrawerComponent = FunctionComponent<DrawerProps>;
export type DrawerElement = ReactElement<DrawerProps,DrawerComponent>;


