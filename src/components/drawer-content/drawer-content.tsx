import React from "react";
import { DrawerSection } from "../drawer-section";
import { DrawerContentComponent, DrawerContentProps } from "../drawer/drawer.types";

/**
 * Content to be shown inside a navigation
 */
export const DrawerContent: DrawerContentComponent = ({ nav }: DrawerContentProps) => {
  const { items } = nav;

  return (
    <>
      {items.map(({ title, items }, i) => (
        <DrawerSection key={i} title={title} items={items} />
      ))}
    </>
  );
};
