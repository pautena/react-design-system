import { ReactElement } from "react";


export interface NavItem {
  id: string;
  name: string;
  icon: ReactElement;
}

export interface NavSection {
  title?: string;
  items:  NavItem[];
}

export interface  Nav {
  items: NavSection[];
};