import React, { PropsWithChildren } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { AppBar } from "../app-bar";
import { Drawer, Item } from "../drawer";
import { Box, AppBarProps } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const CustomAppBar = styled(AppBar)<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomDrawer = styled(Drawer)(({ theme, open }) => ({
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface Props {
  drawerProps: {
    items: Item[];
  };
  appBarProps: Partial<AppBarProps> & {
    onClickSignOut: () => void;
  };
}

export const AppBarWithDrawer = ({drawerProps,appBarProps,children}:PropsWithChildren<Props>)=>{
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CustomAppBar
        position="fixed"
        menu
        open={open}
        onClickDrawerMenu={()=>setOpen(true)}
        {...appBarProps}
      />
      <CustomDrawer
        variant="permanent"
        open={open}
        onDrawerClose={()=>setOpen(false)}
        {...drawerProps}
      />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}