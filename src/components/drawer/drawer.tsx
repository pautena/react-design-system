import React, { ReactElement } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  SvgIcon
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Nav } from "./drawer.types";
import { DrawerContent } from "./drawer-content";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export interface DrawerProps extends MuiDrawerProps {
  open: boolean;
  nav: Nav;
  onDrawerClose: () => void;
}

export const Drawer = ({
  open,
  nav,
  onDrawerClose,
  ...rest
}: DrawerProps) => {
  const theme = useTheme();

  return (
    <MuiDrawer open={open} {...rest}>
      <DrawerHeader>
        <IconButton onClick={onDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerContent nav={nav} open={open}/>
    </MuiDrawer>
  );
};
