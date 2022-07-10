import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Bullet } from '../bullet';
import { Label } from '../label';
import { useDrawer } from '../drawer/drawer.context';
import { NavItem } from '../drawer/drawer.types';

export interface DrawerItemProps {
  item: NavItem;
}

export const DrawerItem = ({item}:DrawerItemProps)=> {
  const {isOpen} = useDrawer();

  return (
    <ListItem 
    disablePadding
    sx={{ display: "block" }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: isOpen ? "initial" : "center",
          px: 2.5,
        }}
      >
      {item.icon && (
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: isOpen ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {item.icon}
        </ListItemIcon>
      )}
      {item.avatar && (
        <ListItemAvatar>
          <Avatar alt={item.avatar.alt} src={item.avatar.src} />
        </ListItemAvatar>
      )}
      <ListItemText primary={item.name} sx={{ opacity: isOpen ? 1 : 0 }} />
      {item.label && isOpen && (
        <Label text={item.label.text} variant={item.label.variant}/>
      )}
      {item.bullet && isOpen && (
        <Bullet variant={item.bullet.variant}/>
      )}
    </ListItemButton>
  </ListItem>
  )
}