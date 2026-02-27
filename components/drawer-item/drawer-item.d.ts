import { ReactNode } from '../../../node_modules/react';
import { DrawerNavigationItem } from '../drawerx/drawer.types';
export interface DrawerItemProps {
    /**
     * Data to render.
     */
    item: DrawerNavigationItem;
    /**
     * Nesting level inside submenus.
     */
    level?: number;
    /**
     * Optional action element displayed alongside the item.
     */
    action?: ReactNode;
}
/**
 * Drawer navigation item renderer.
 */
export default function DrawerItem({ item, level, action, }: DrawerItemProps): import("react/jsx-runtime").JSX.Element | null;
