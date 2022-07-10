import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
import { DrawerItem } from '../drawer-item';
import { NavSection } from '../drawer.types';

export interface DrawerSectionProps {
  section:NavSection;
  open: boolean;
}

export const DrawerSection = ({section,open}:DrawerSectionProps)=> {
  return (
    <>
      {section.title && open && <ListSubheader>{section.title}</ListSubheader>}
      <List>
        {section.items.map((item,j)=>(
          <DrawerItem item={item} open={open} key={j}/>
        ))}
      </List>
    </>
  )
}