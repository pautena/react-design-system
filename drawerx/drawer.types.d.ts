import { FunctionComponent, ReactElement } from '../../node_modules/react';
import { BulletVariant } from '../bullet';
import { LabelVariant } from '../label';
import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import { Theme } from '@mui/material/styles';
import { DrawerAppBarProps } from './drawer-app-bar';
export type DrawerVariant = "temporary" | "mini" | "persistent";
export type DrawerState = "open" | "collapse" | "close";
export type DrawerSize = "small" | "medium";
export interface DrawerItemAvatar {
    src: string;
    alt: string;
}
export interface DrawerItemLabel {
    text: string;
    variant: LabelVariant;
}
export interface DrawerItemBullet {
    variant: BulletVariant;
}
export interface DrawerNavigationLink {
    kind: "link";
    id: string;
    text: string;
    href: string;
    icon?: ReactElement;
    avatar?: DrawerItemAvatar;
    label?: DrawerItemLabel;
    bullet?: DrawerItemBullet;
}
export type DrawerNavigationCollapsable = Pick<DrawerNavigationLink, "id" | "text" | "icon"> & {
    kind: "collapsable";
    items: DrawerNavigationItem[];
};
export interface DrawerNavigationHeader {
    kind: "header";
    id: string;
    text: string;
}
export type DrawerNavigationItem = DrawerNavigationLink | DrawerNavigationCollapsable | DrawerNavigationHeader;
export type DrawerNavigation = DrawerNavigationItem[];
export interface DrawerContentProps {
    /**
     * Object with the content that has to be rendered
     */
    navigation: DrawerNavigation;
}
export type DrawerContentComponent = FunctionComponent<DrawerContentProps>;
export type DrawerContentElement = ReactElement<DrawerContentProps, DrawerContentComponent>;
export interface DrawerProps extends MuiDrawerProps {
    children: DrawerContentElement;
}
export type DrawerComponent = FunctionComponent<DrawerProps>;
export type DrawerElement = ReactElement<DrawerProps, DrawerComponent>;
export declare const getDrawerItemColors: (theme: Theme, selected: boolean | undefined) => {
    color: string | undefined;
    fontWeight: import("csstype").Property.FontWeight | undefined;
};
export type DrawerAppBarComponent = FunctionComponent<DrawerAppBarProps>;
export type DrawerAppBarElement = ReactElement<DrawerAppBarProps, DrawerAppBarComponent>;
