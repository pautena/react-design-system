import { ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Bullet } from '../../bullet';
import { Label } from '../../label';
import { NavItem } from '../drawer.types';

export interface DrawerItemProps {
  item: NavItem;
  open:boolean;
}

export const DrawerItem = ({item,open}:DrawerItemProps)=> {

  return (
    <ListItem 
    disablePadding
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
      {item.label && open && (
        <Label text={item.label.text} variant={item.label.variant}/>
      )}
      {item.bullet && open && (
        <Bullet variant={item.bullet.variant}/>
      )}
    </ListItemButton>
  </ListItem>
  )
}