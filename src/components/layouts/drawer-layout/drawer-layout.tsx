import type { JSXElementConstructor } from "react";
import { Drawer } from "@/components/navigation/drawer/drawer";
import { DrawerAppBar } from "@/components/navigation/drawer-app-bar/drawer-app-bar";
import { DrawerContent } from "@/components/navigation/drawer-content/drawer-content";
import { DrawerProvider } from "@/components/navigation/drawer-context/drawer-provider";
import { DrawerMain } from "@/components/navigation/drawer-main/drawer-main";
import type {
  DrawerAppBarProps,
  DrawerContentProps,
  DrawerNavigation,
  DrawerProps,
  DrawerProviderProps,
} from "@/types/drawer.types";

/**
 * Slots for DrawerLayout.
 */
export interface DrawerLayoutSlots {
  /**
   * Slot for DrawerAppBar.
   */
  drawerAppBar?: JSXElementConstructor<DrawerAppBarProps>;
  /**
   * Slot for Drawer.
   */
  drawer?: JSXElementConstructor<DrawerProps>;
  /**
   * Slot for DrawerContent.
   */
  drawerContent?: JSXElementConstructor<DrawerContentProps>;
}

/**
 * Slot props for DrawerLayout.
 */
export interface DrawerLayoutSlotProps {
  /**
   * Props for DrawerAppBar slot.
   */
  drawerAppBar?: DrawerAppBarProps;
  /**
   * Props for Drawer slot.
   */
  drawer?: DrawerProps;
  /**
   * Props for DrawerContent slot.
   */
  drawerContent?: DrawerContentProps;
}

/**
 * Props for DrawerLayout.
 */
export interface DrawerLayoutProps extends DrawerProviderProps {
  /**
   * Title of the drawer layout.
   */
  title: string;
  /**
   * Navigation tree.
   */
  navigation: DrawerNavigation;
  /**
   * Optional slots.
   */
  slots?: DrawerLayoutSlots;
  /**
   * Optional slot props.
   */
  slotsProps?: DrawerLayoutSlotProps;
}

/**
 * Layout structure with drawer and app bar.
 */
export function DrawerLayout({
  children,
  navigation,
  title,
  slots,
  slotsProps,
  ...rest
}: DrawerLayoutProps) {
  const DrawerAppBarSlot = slots?.drawerAppBar ?? DrawerAppBar;
  const DrawerSlot = slots?.drawer ?? Drawer;
  const DrawerContentSlot = slots?.drawerContent ?? DrawerContent;

  return (
    <DrawerProvider {...rest}>
      <DrawerAppBarSlot title={title} {...slotsProps?.drawerAppBar} />
      <DrawerSlot {...slotsProps?.drawer}>
        <DrawerContentSlot
          navigation={navigation}
          {...slotsProps?.drawerContent}
        />
      </DrawerSlot>
      <DrawerMain>{children}</DrawerMain>
    </DrawerProvider>
  );
}
