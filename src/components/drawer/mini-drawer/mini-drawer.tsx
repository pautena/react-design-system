import React from 'react';
import { Drawer } from "../drawer";
import { styled } from "@mui/material/styles";
import { drawerWidth,openedMixin,closedMixin } from '../drawer.mixins';
import { useDrawer } from '../drawer.context';
import { listItemButtonClasses, listItemIconClasses, listItemTextClasses, listSubheaderClasses } from '@mui/material';
import { labelClasses } from '../../label';
import { bulletClasses } from '../../bullet';

export const MiniDrawer = styled(Drawer)(({ theme }) => {
  const {isOpen} = useDrawer();

  const hideIfClosed = !isOpen && {
    "display":'none',
  };

  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    [`& .${listItemIconClasses.root}`]: {
      minWidth: 0,
      justifyContent: "center",
      ...(isOpen? {
        marginRight: theme.spacing(3),
      }:{
        marginRight: "auto"
      })
    },
    [`& .${listItemButtonClasses.root}`]:{
      minHeight: 48,
      paddingHorizontal:theme.spacing(2.5),
      ...(isOpen?{
        justifyContent:"initial",
      }:{
        justifyContent: "center",
      }),
    },
    [`& .${labelClasses.root}`]: hideIfClosed,
    [`& .${bulletClasses.root}`]: hideIfClosed,
    [`& .${listSubheaderClasses.root}`]: hideIfClosed,
    [`& .${listItemTextClasses.root}`]: {
      opacity: isOpen ? 1:0,
    },
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

MiniDrawer.defaultProps = {
  variant:"permanent"
}