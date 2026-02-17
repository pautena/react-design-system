import { default as React } from '../../../node_modules/react';
import { DrawerProps } from '../Drawer.types';
export declare const DrawerHeader: React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
}>;
/**
 * Drawer component that provides a customizable drawer interface.
 */
export default function Drawer({ children, ...rest }: DrawerProps): import("react/jsx-runtime").JSX.Element;
