import React from "react";
import { DrawerSection } from "../drawer-section";
import { DrawerContentComponent, DrawerContentProps } from "../drawer.types";
import { useDrawer } from "../drawer-provider/drawer.context";

/**
 * Content to be shown inside a navigation
 */
export const DrawerContent: DrawerContentComponent = ({
  nav: { items },
  selectedItem,
  size = "medium",
  submenuVariant: submenuVariantProp,
}: DrawerContentProps) => {
  const { submenuVariant: submenuVariantContext } = useDrawer();
  const submenuVariant = submenuVariantProp || submenuVariantContext || "collapse";
  return (
    <>
      {items.map(({ title, items }, i) => (
        <DrawerSection
          key={i}
          title={title}
          items={items}
          selectedItem={selectedItem}
          size={size}
          submenuVariant={submenuVariant}
        />
      ))}
    </>
  );
};
