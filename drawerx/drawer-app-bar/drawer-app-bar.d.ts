import { AppBarProps as MuiAppBarProps } from '@mui/material';
export interface DrawerAppBarProps extends MuiAppBarProps {
    /**
     * Title to display in the AppBar.
     */
    title?: string;
}
/**
 * DrawerAppBar component that renders an AppBar adapted to work inside a Drawer context.
 */
export declare const DrawerAppBar: ({ title, sx, children, ...rest }: DrawerAppBarProps) => import("react/jsx-runtime").JSX.Element;
