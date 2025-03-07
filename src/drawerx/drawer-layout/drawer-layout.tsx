import { DrawerProvider, DrawerProviderProps } from "../drawer-context";
import { DrawerMain } from "../drawer-main";
import { DrawerAppBar, DrawerAppBarProps } from "../drawer-app-bar";
import { DrawerContent } from "../drawer-content";
import { DrawerContentProps, DrawerNavigation, DrawerProps } from "../drawer.types";
import { Drawer } from "../drawer";

export interface DrawerLayoutSlots {
  drawerAppBar?: React.JSXElementConstructor<DrawerAppBarProps>;
  drawer?: React.JSXElementConstructor<DrawerProps>;
  drawerContent?: React.JSXElementConstructor<DrawerContentProps>;
}

export interface DrawerLayoutSlotProps {
  drawerAppBar?: DrawerAppBarProps;
  drawer?: DrawerProps;
  drawerContent?: DrawerContentProps;
}

export interface DrawerLayoutProps extends DrawerProviderProps {
  title: string;
  navigation: DrawerNavigation;
  slots?: DrawerLayoutSlots;
  slotsProps?: DrawerLayoutSlotProps;
}

export const DrawerLayout = ({
  children,
  navigation,
  title,
  slots,
  slotsProps,
  ...rest
}: DrawerLayoutProps) => {
  const DrawerAppBarSlot = slots?.drawerAppBar ?? DrawerAppBar;
  const DrawerSlot = slots?.drawer ?? Drawer;
  const DrawerContentSlot = slots?.drawerContent ?? DrawerContent;

  return (
    <DrawerProvider {...rest}>
      <DrawerAppBarSlot title={title} color="inherit" {...slotsProps?.drawerAppBar} />
      <DrawerSlot {...slotsProps?.drawer}>
        <DrawerContentSlot navigation={navigation} {...slotsProps?.drawerContent} />
      </DrawerSlot>
      <DrawerMain>{children}</DrawerMain>
    </DrawerProvider>
  );
};
