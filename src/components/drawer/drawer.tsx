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


export interface Item {
  id: string;
  name: string;
  icon: ReactElement;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export interface DrawerProps extends MuiDrawerProps {
  open: boolean;
  items: Item[];
  onDrawerClose: () => void;
}

export const Drawer = ({
  open,
  items,
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
      {items.map((item, index) => (
        <List key={index}>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </MuiDrawer>
  );
};
