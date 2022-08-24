import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { AppBarElement } from "../../components/app-bar";
import { DrawerElement } from "../../components/drawer";
import { Box } from "@mui/material";
import { DrawerProvider } from "../../components/drawer/drawer.provider";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export interface AppBarWithDrawerLayoutProps {
  children: [DrawerElement, AppBarElement, ReactNode];
}

export const AppBarWithDrawerLayout = ({
  children: childrenProps,
}: AppBarWithDrawerLayoutProps) => {
  const [appBar, drawer, children] = childrenProps;

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerProvider>
        {appBar}
        {drawer}
        <Box sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          {children}
        </Box>
      </DrawerProvider>
    </Box>
  );
};
