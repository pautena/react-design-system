import * as React from "react";
import { AppBar as MuiAppBar, Toolbar, IconButton, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawer } from "../drawer-provider/drawer-context";

import { AppBarProps as MuiAppBarProps } from "@mui/material";

export interface DrawerAppBarProps extends MuiAppBarProps {
  title?: string;
}

export const DrawerAppBar = ({ title, sx, children, ...rest }: DrawerAppBarProps) => {
  const theme = useTheme();
  const { state, open, drawerWidth } = useDrawer();
  const { variant } = useDrawer();
  const moveWithDrawer = variant === "mini";

  const rootSx =
    (moveWithDrawer && {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(state === "open" && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    }) ||
    {};

  return (
    <MuiAppBar {...rest} sx={{ ...sx, ...rootSx }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={open}
          edge="start"
          sx={{
            marginRight: 5,
            ...(state === "open" && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        {title && (
          <Typography
            variant="h6"
            component="h1"
            role="heading"
            aria-level={1}
            noWrap
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Toolbar>
    </MuiAppBar>
  );
};
