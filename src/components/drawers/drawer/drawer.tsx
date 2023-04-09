import React from "react";
import { styled } from "@mui/material";
import { Drawer as MuiDrawer, Divider, IconButton, useTheme } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DrawerComponent, DrawerProps } from "../drawer.types";
import { useDrawer } from "./drawer.context";
import { closedMixin, drawerWidth, openedMixin } from "./drawer.mixins";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Drawer: DrawerComponent = ({
  children,
  closeState = "close",
  width = drawerWidth,
  ...rest
}: DrawerProps) => {
  const theme = useTheme();
  const { state, setState } = useDrawer();
  const isOpen = state === "open";

  const sx = {
    width,
    ...(isOpen && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!isOpen && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  };

  return (
    <MuiDrawer open={isOpen} role="menu" aria-hidden={!isOpen} sx={sx} {...rest}>
      <DrawerHeader>
        <IconButton onClick={() => setState(closeState)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {children}
    </MuiDrawer>
  );
};
