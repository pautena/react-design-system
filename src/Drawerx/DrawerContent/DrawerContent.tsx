import { List, useTheme } from "@mui/material";
import type {
  DrawerContentComponent,
  DrawerContentProps,
} from "../Drawer.types";
import { useDrawer } from "../DrawerContext";
import DrawerItem from "../DrawerItem";

/**
 * Content to be shown inside a navigation
 */
export default function DrawerContent({ navigation }: DrawerContentProps) {
  const { size } = useDrawer();
  const { spacing } = useTheme();

  return (
    <List
      sx={{
        paddingTop: size === "small" ? spacing(0.5) : undefined,
        paddingX: size === "small" ? spacing(0.5) : spacing(1),
      }}
    >
      {navigation.map((item) => (
        <DrawerItem key={item.id} item={item} />
      ))}
    </List>
  );
}
