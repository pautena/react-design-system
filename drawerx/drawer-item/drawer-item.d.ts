import { DrawerNavigationItem } from '../drawer.types';
export interface DrawerItemProps {
    /**
     * Data to be rendered
     */
    item: DrawerNavigationItem;
    /**
     * Deep level of this item inside the submenus
     */
    level?: number;
}
/**
 * Component representing a drawer item in the navigation drawer.
 */
export declare const DrawerItem: ({ item, level }: DrawerItemProps) => false | import("react/jsx-runtime").JSX.Element;
