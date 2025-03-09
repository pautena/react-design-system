import { DrawerProviderProps } from '../drawer-context';
import { DrawerAppBarProps } from '../drawer-app-bar';
import { DrawerContentProps, DrawerNavigation, DrawerProps } from '../drawer.types';
/**
 * Interface representing the slots for the DrawerLayout component.
 */
export interface DrawerLayoutSlots {
    /**
     * Slot for the DrawerAppBar component.
     * This component is responsible for rendering the app bar within the drawer layout.
     */
    drawerAppBar?: React.JSXElementConstructor<DrawerAppBarProps>;
    /**
     * Slot for the Drawer component.
     * This component is responsible for rendering the drawer within the drawer layout.
     */
    drawer?: React.JSXElementConstructor<DrawerProps>;
    /**
     * Slot for the DrawerContent component.
     * This component is responsible for rendering the content within the drawer layout.
     */
    drawerContent?: React.JSXElementConstructor<DrawerContentProps>;
}
/**
 * Interface representing the slot properties for the DrawerLayout component.
 */
export interface DrawerLayoutSlotProps {
    /**
     * Properties for the DrawerAppBar component.
     */
    drawerAppBar?: DrawerAppBarProps;
    /**
     * Properties for the Drawer component.
     */
    drawer?: DrawerProps;
    /**
     * Properties for the DrawerContent component.
     */
    drawerContent?: DrawerContentProps;
}
/**
 * Props for the DrawerLayout component.
 */
export interface DrawerLayoutProps extends DrawerProviderProps {
    /**
     * The title of the drawer layout.
     */
    title: string;
    /**
     * The navigation configuration for the drawer.
     */
    navigation: DrawerNavigation;
    /**
     * Optional slots for custom rendering within the drawer layout.
     */
    slots?: DrawerLayoutSlots;
    /**
     * Optional props for the slots.
     */
    slotsProps?: DrawerLayoutSlotProps;
}
/**
 * DrawerLayout component provides a layout structure with a drawer and an app bar.
 * It allows customization of the drawer, app bar, and drawer content through slots and slot properties.
 */
export declare const DrawerLayout: ({ children, navigation, title, slots, slotsProps, ...rest }: DrawerLayoutProps) => import("react/jsx-runtime").JSX.Element;
