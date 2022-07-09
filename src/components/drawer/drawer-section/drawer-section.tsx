import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
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
          <ListItem key={j} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </>
  )
}