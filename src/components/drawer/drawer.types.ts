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

export interface DrawerProps extends MuiDrawerProps {
  open: boolean;
  nav: Nav;
  onDrawerClose: () => void;
}

export type DrawerComponent = FunctionComponent<DrawerProps>