import React, { ReactNode } from "react";
import { DrawerAppBarElement, DrawerElement } from "~/Components/Drawer.types";
import { DrawerMain } from "~/Components/DrawerMain";
import { DrawerProvider, DrawerProviderProps } from "~/Components/DrawerProvider";

export interface DrawerLayoutProps {
  drawerProviderProps?: DrawerProviderProps;
  children: [DrawerElement, DrawerAppBarElement, ReactNode];
}

export const DrawerLayout = ({
  drawerProviderProps,
  children: childrenProps,
}: DrawerLayoutProps) => {
  const [appBar, drawer, children] = childrenProps;

  return (
    <DrawerProvider {...drawerProviderProps}>
      {appBar}
      {drawer}
      <DrawerMain>{children}</DrawerMain>
    </DrawerProvider>
  );
};
