import { ReactElement } from "react";
import { BulletVariant } from "../bullet";
import { LabelVariant } from "../label";


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