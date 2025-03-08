import { AppBarProps as MuiAppBarProps } from '@mui/material';
export interface DrawerAppBarProps extends MuiAppBarProps {
    title?: string;
}
export declare const DrawerAppBar: ({ title, sx, children, ...rest }: DrawerAppBarProps) => import("react/jsx-runtime").JSX.Element;
