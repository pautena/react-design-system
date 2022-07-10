import React, { PropsWithChildren, ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { AppBarComponent } from "../../components/app-bar";
import { DrawerElement } from "../../components/drawer";
import { Box, AppBarProps } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface Props {
  drawer:DrawerElement;
  appBar: ReactElement<AppBarProps,AppBarComponent>;
}

export const AppBarWithDrawerLayout = ({drawer,appBar,children}:PropsWithChildren<Props>)=>{
  return (
    <Box sx={{ display: "flex" }}>
      {appBar}
      {drawer}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}