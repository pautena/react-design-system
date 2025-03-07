import { List, useTheme } from "@mui/material";
import { useDrawer } from "../drawer-context";
import { DrawerContentComponent, DrawerContentProps } from "../drawer.types";
import { DrawerItem } from "../drawer-item";

/**
 * Content to be shown inside a navigation
 */
export const DrawerContent: DrawerContentComponent = ({ navigation }: DrawerContentProps) => {
  const { state, size } = useDrawer();
  const { spacing } = useTheme();

  return (
    <List
      sx={{
        paddingTop: size === "small" ? spacing(0) : undefined,
        paddingX: size === "small" ? spacing(0.5) : spacing(1),
      }}
    >
      {navigation.map((item) => (
        <DrawerItem key={item.id} item={item} />
      ))}
    </List>
  );
};
