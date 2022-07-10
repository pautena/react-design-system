import React from 'react';
import { Drawer } from "../drawer";
import { styled } from "@mui/material/styles";
import { drawerWidth,openedMixin,closedMixin } from '../drawer.mixins';

export const MiniDrawer = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));