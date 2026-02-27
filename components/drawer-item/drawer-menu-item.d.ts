import { ReactElement } from '../../../node_modules/react';
import { DrawerNavigationItem } from '../drawerx/drawer.types';
export interface DrawerMenuItemProps {
    /**
     * Text displayed inside the item.
     */
    text: string;
    /**
     * Icon displayed to the left.
     */
    icon?: ReactElement;
    /**
     * Selected state.
     */
    selected?: boolean;
    /**
     * Nested items rendered inside submenu.
     */
    items: DrawerNavigationItem[];
    /**
     * Item nesting level.
     */
    level: number;
    /**
     * Additional classes.
     */
    className?: string;
}
/**
 * Collapsible drawer menu item.
 */
export declare const DrawerMenuItem: ({ text, icon, selected, items, level, className, }: DrawerMenuItemProps) => import("react/jsx-runtime").JSX.Element;
