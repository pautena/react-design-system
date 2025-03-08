import { ReactElement } from '../../../node_modules/react';
import { SxProps, Theme } from '@mui/material/styles';
import { DrawerItemAvatar, DrawerItemBullet, DrawerItemLabel } from '../drawer.types';
export interface DrawerItemLinkProps {
    /**
     * Text displayed inside the item
     */
    text: string;
    /**
     * Url where the user is going to be redirected
     * if the item is clicked
     */
    href: string;
    /**
     * Icon displayed to the left
     */
    icon?: ReactElement;
    /**
     * Avatar displayed to the left
     */
    avatar?: DrawerItemAvatar;
    /**
     * Label with extra info displayed to the right
     */
    label?: DrawerItemLabel;
    /**
     * Bullet to attract the user attention displyed to the right
     */
    bullet?: DrawerItemBullet;
    /**
     * The item has to be marked as selected
     */
    selected?: boolean;
    /**
     * Deep level of this item inside the submenus
     */
    level: number;
    /**
     * Custom styles
     */
    sx?: SxProps<Theme>;
}
/**
 * Clicable item inside a drawer
 */
export declare const DrawerItemLink: ({ text, icon, avatar, label, bullet, href, selected, level, sx, }: DrawerItemLinkProps) => import("react/jsx-runtime").JSX.Element;
