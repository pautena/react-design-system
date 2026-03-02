import { ReactElement, ReactNode } from '../../../../node_modules/react';
import { DrawerItemAvatar, DrawerItemBullet, DrawerItemLabel } from '../../../types/drawer.types';
export interface DrawerItemLinkProps {
    /**
     * Text displayed inside the item.
     */
    text: string;
    /**
     * Url where the user is redirected.
     */
    href: string;
    /**
     * Icon displayed to the left.
     */
    icon?: ReactElement;
    /**
     * Avatar displayed to the left.
     */
    avatar?: DrawerItemAvatar;
    /**
     * Label shown at the right.
     */
    label?: DrawerItemLabel;
    /**
     * Bullet shown at the right.
     */
    bullet?: DrawerItemBullet;
    /**
     * Selected state.
     */
    selected?: boolean;
    /**
     * Item nesting level.
     */
    level: number;
    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Optional action element displayed alongside the item.
     */
    action?: ReactNode;
}
/**
 * Clickable drawer link item.
 */
export declare const DrawerItemLink: ({ text, icon, avatar, label, bullet, href, selected, level, className, action, }: DrawerItemLinkProps) => import("react/jsx-runtime").JSX.Element;
