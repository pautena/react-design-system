import type { DrawerNavigationItem } from "../Drawer.types";
import { useDrawer } from "../DrawerContext";
import DrawerSubheader from "../DrawerSubheader";
import { DrawerItemLink } from "./DrawerItemLink";
import { DrawerMenuItem } from "./DrawerMenuItem";

export interface DrawerItemProps {
  /**
   * Data to be rendered
   */
  item: DrawerNavigationItem;
  /**
   * Deep level of this item inside the submenus
   */
  level?: number;
}

/**
 * Component representing a drawer item in the navigation drawer.
 */
export default function DrawerItem({ item, level = 0 }: DrawerItemProps) {
  const { selectedItemId, state } = useDrawer();
  if (item.kind === "collapsable") {
    const { id, text, icon, items } = item;
    const childrenSelected = items.some((item) => item.id === selectedItemId);
    return (
      <DrawerMenuItem
        selected={id === selectedItemId || childrenSelected}
        text={text}
        icon={icon}
        items={items}
        level={level}
      />
    );
  }
  if (item.kind === "header") {
    return (
      state === "open" && (
        <DrawerSubheader role="heading">{item.text}</DrawerSubheader>
      )
    );
  }
  const { id, text, icon, avatar, label, bullet, href } = item;
  return (
    <DrawerItemLink
      selected={id === selectedItemId}
      text={text}
      icon={icon}
      avatar={avatar}
      label={label}
      bullet={bullet}
      href={href}
      level={level}
    />
  );
}
