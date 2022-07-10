import React from 'react';
import { Drawer } from "../drawer";
import { styled } from "@mui/material/styles";
import { drawerWidth,openedMixin,closedMixin } from '../drawer.mixins';
import { useDrawer } from '../drawer.context';

export const MiniDrawer = styled(Drawer)(({ theme }) => {
  const {isOpen} = useDrawer();

  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(isOpen && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!isOpen && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  };
});