import React, { ReactNode } from "react";
import { DrawerProvider, DrawerProviderProps } from "~/drawer-provider";
import { DrawerMain } from "~/drawer-main";
import { DrawerAppBarElement, DrawerElement } from "~/drawer.types";

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
