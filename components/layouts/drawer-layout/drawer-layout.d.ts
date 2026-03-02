import { JSXElementConstructor } from '../../../../node_modules/react';
import { DrawerAppBarProps, DrawerContentProps, DrawerNavigation, DrawerProps, DrawerProviderProps } from '../../../types/drawer.types';
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
export declare function DrawerLayout({ children, navigation, title, slots, slotsProps, ...rest }: DrawerLayoutProps): import("react/jsx-runtime").JSX.Element;
