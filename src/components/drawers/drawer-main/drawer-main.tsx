import { styled } from "@mui/material";
import { useDrawer } from "../drawer-provider";
import { DrawerVariant } from "../drawer.types";

const drawerSpace: Record<DrawerVariant, boolean> = {
  temporary: false,
  mini: false,
  clipped: true,
  persistent: true,
};

export const DrawerMain = styled("main")(({ theme }) => {
  const { drawerWidth, state, variant } = useDrawer();

  return {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(state === "open" &&
      drawerSpace[variant] && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
  };
});
