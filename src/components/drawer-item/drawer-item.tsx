import { useDrawer } from "@/components/drawer-context";
import DrawerSubheader from "@/components/drawer-subheader";
import type { DrawerNavigationItem } from "@/components/drawerx/drawer.types";
import { DrawerItemLink } from "./drawer-item-link";
import { DrawerMenuItem } from "./drawer-menu-item";

export interface DrawerItemProps {
  /**
   * Data to render.
   */
  item: DrawerNavigationItem;
  /**
   * Nesting level inside submenus.
   */
  level?: number;
}

/**
 * Drawer navigation item renderer.
 */
export default function DrawerItem({ item, level = 0 }: DrawerItemProps) {
  const { selectedItemId, state } = useDrawer();
  if (item.kind === "collapsable") {
    const { id, text, icon, items } = item;
    const childrenSelected = items.some((navigationItem) => {
      if (navigationItem.kind === "collapsable") {
        return navigationItem.items.some(
          (nestedItem) => nestedItem.id === selectedItemId,
        );
      }

      return navigationItem.id === selectedItemId;
    });

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
