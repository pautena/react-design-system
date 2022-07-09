import { ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { NavItem } from '../drawer.types';

export interface DrawerItemProps {
  item: NavItem;
  open:boolean;
}

export const DrawerItem = ({item,open}:DrawerItemProps)=> {

  return (
    <ListItem 
    disablePadding
        disabled
    sx={{ display: "block" }}
    >
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
  )
}