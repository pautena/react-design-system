import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import { DrawerNavigationItem, DrawerSize } from "src/drawerx/drawer";
import { DrawerItem } from "../drawer-item";
import { useDrawer } from "../drawerx/drawer-provider";
import { DrawerSubheader } from "src/drawerx/drawer-subheader";

export interface DrawerSectionProps {
  /**
   * Section title
   */
  title?: string;
  /**
   * List of items of that section
   */
  items: DrawerNavigationItem[];
  /**
   * Item size. default to medium
   */
  size?: DrawerSize;
}

/**
 * Render a group of items inside the drawer
 * with an optional title
 */
export const DrawerSection = ({ title, items, size = "medium" }: DrawerSectionProps) => {
  const { state } = useDrawer();
  const { spacing } = useTheme();
  return (
    <>
      {title && state === "open" && (
        <DrawerSubheader size={size} role="heading">
          {title}
        </DrawerSubheader>
      )}
      <List
        sx={{
          paddingTop: size === "small" ? spacing(0) : undefined,
          paddingY: state === "collapse" ? 0 : undefined,
        }}
      >
        {items.map((item) => (
          <DrawerItem key={item.id} item={item} size={size} />
        ))}
      </List>
    </>
  );
};
