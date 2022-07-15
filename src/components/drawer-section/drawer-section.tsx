import { List, ListSubheader } from "@mui/material";
import React from "react";
import { DrawerItem } from "../drawer-item";
import { NavSection } from "../drawer/drawer.types";

export interface DrawerSectionProps {
  section: NavSection;
}

export const DrawerSection = ({ section }: DrawerSectionProps) => {
  return (
    <>
      {section.title && <ListSubheader>{section.title}</ListSubheader>}
      <List>
        {section.items.map(({ id, text, icon, avatar, label, bullet, href }) => (
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
