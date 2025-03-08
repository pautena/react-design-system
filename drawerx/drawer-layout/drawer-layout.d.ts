import { DrawerProviderProps } from '../drawer-context';
import { DrawerAppBarProps } from '../drawer-app-bar';
import { DrawerContentProps, DrawerNavigation, DrawerProps } from '../drawer.types';
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
export declare const DrawerLayout: ({ children, navigation, title, slots, slotsProps, ...rest }: DrawerLayoutProps) => import("react/jsx-runtime").JSX.Element;
