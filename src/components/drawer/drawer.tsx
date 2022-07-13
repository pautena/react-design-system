import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Drawer as MuiDrawer, Divider, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerComponent, DrawerProps } from "./drawer.types";
import { useDrawer } from "./drawer.context";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const Drawer: DrawerComponent = ({ children, ...rest }: DrawerProps) => {
  const theme = useTheme();
  const { isOpen, close } = useDrawer();

  return (
    <MuiDrawer open={isOpen} {...rest}>
      <DrawerHeader>
        <IconButton onClick={close}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {children}
    </MuiDrawer>
  );
};
