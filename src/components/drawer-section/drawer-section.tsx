import { List, ListSubheader } from "@mui/material";
import React from "react";
import { DrawerItem } from "../drawer-item";
import { NavItem } from "../drawer/drawer.types";

export interface DrawerSectionProps {
  title?: string;
  items: NavItem[];
}

export const DrawerSection = ({ title, items }: DrawerSectionProps) => {
  return (
    <>
      {title && <ListSubheader role="heading">{title}</ListSubheader>}
      <List>
        {items.map(({ id, text, icon, avatar, label, bullet, href }) => (
          <DrawerItem
            key={id}
            text={text}
            icon={icon}
            avatar={avatar}
            label={label}
            bullet={bullet}
            href={href}
          />
        ))}
      </List>
    </>
  );
};
