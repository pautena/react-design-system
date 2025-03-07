import { List, useTheme } from "@mui/material";
import { useDrawer } from "../drawer-context";
import { DrawerContentComponent, DrawerContentProps } from "../drawer.types";
import { DrawerItem } from "../drawer-item";
/*
save it for the item header

{title && state === "open" && (
        <DrawerSubheader size={size} role="heading">
          {title}
        </DrawerSubheader>
      )}

*/

/**
 * Content to be shown inside a navigation
 */
export const DrawerContent: DrawerContentComponent = ({
  navigation,
  size = "medium",
}: DrawerContentProps) => {
  const { state } = useDrawer();
  const { spacing } = useTheme();

  return (
    <List
      sx={{
        paddingTop: size === "small" ? spacing(0) : undefined,
        paddingY: state === "collapse" ? 0 : undefined,
      }}
    >
      {navigation.map((item) => (
        <DrawerItem key={item.id} item={item} size={size} />
      ))}
    </List>
  );
};
