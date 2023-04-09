import { styled } from "@mui/material/styles";
import { AppBar } from "../app-bar";
import { AppBarProps } from "@mui/material";
import { drawerWidth } from "../../../drawers/drawer/drawer.mixins";
import { AppBarComponent } from "../app-bar.types";
import { useDrawer } from "../../../drawers/drawer/drawer.context";

export const MiniAppBar: AppBarComponent = styled(AppBar)<AppBarProps>(({ theme }) => {
  const { state } = useDrawer();

  return {
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
  };
});

MiniAppBar.defaultProps = {
  position: "fixed",
  menu: true,
};
