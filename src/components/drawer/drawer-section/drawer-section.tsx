import { List, ListSubheader } from '@mui/material';
import React from 'react';
import { DrawerItem } from '../drawer-item';
import { useDrawer } from '../drawer.context';
import { NavSection } from '../drawer.types';

export interface DrawerSectionProps {
  section:NavSection;
}

export const DrawerSection = ({section}:DrawerSectionProps)=> {
  const {isOpen} = useDrawer();
  return (
    <>
      {section.title && isOpen && <ListSubheader>{section.title}</ListSubheader>}
      <List>
        {section.items.map((item,j)=>(
          <DrawerItem item={item} key={j}/>
        ))}
      </List>
    </>
  )
}