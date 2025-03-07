import { ReactNode } from "react";
import { DrawerProvider, DrawerProviderProps } from "../drawer-context";
import { DrawerMain } from "../drawer-main";
import { DrawerAppBarElement, DrawerElement } from "../drawer.types";

export interface DrawerLayoutProps extends DrawerProviderProps {
  children: [DrawerElement, DrawerAppBarElement, ReactNode];
}

export const DrawerLayout = ({ children: childrenProps, ...rest }: DrawerLayoutProps) => {
  const [appBar, drawer, children] = childrenProps;

  return (
    <DrawerProvider {...rest}>
      {appBar}
      {drawer}
      <DrawerMain>{children}</DrawerMain>
    </DrawerProvider>
  );
};
