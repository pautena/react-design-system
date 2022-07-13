import React from "react";
import { DrawerSection } from "../drawer-section";
import { DrawerContentComponent, DrawerContentProps } from "../drawer/drawer.types";

export const DrawerContent: DrawerContentComponent = ({ nav }: DrawerContentProps) => {
  const { items } = nav;

  return (
    <>
      {items.map((item, i) => (
        <DrawerSection key={i} section={item} />
      ))}
    </>
  );
};
