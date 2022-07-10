import React, { PropsWithChildren, ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { AppBarComponent, MiniAppBar } from "../../components/app-bar";
import { DrawerComponent, DrawerProps, MiniDrawer, Nav } from "../../components/drawer";
import { Box, AppBarProps } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface Props {
  drawer:ReactElement<DrawerProps,DrawerComponent>;
  appBar: ReactElement<AppBarProps,AppBarComponent>;
}

export const AppBarWithDrawerLayout = ({drawer,appBar,children}:PropsWithChildren<Props>)=>{
  const [open, setOpen] = React.useState(false);

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