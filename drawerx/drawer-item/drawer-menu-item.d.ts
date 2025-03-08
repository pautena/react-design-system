import { SxProps, Theme } from '@mui/material/styles';
import { ReactElement } from '../../../node_modules/react';
import { DrawerNavigationItem } from '../drawer.types';
export interface DrawerMenuItemProps {
    /**
     * Text displayed inside the item
     */
    text: string;
    /**
     * Icon displayed to the left
     */
    icon?: ReactElement;
    /**
     * The item has to be marked as selected
     */
    selected?: boolean;
    /**
     * Items that are going to be displayed inside
     * the collapsable
     */
    items: DrawerNavigationItem[];
    /**
     * Deep level of this item inside the submenus
     */
    level: number;
    /**
     * Custom styles
     */
    sx?: SxProps<Theme>;
}
export declare const DrawerMenuItem: ({ text, icon, selected, items, level, sx, }: DrawerMenuItemProps) => import("react/jsx-runtime").JSX.Element;
