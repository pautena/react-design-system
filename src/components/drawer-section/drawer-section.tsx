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
        {section.items.map((item, j) => (
          <DrawerItem item={item} key={j} />
        ))}
      </List>
    </>
  );
};
