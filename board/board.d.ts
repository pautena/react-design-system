import { SxProps, Theme } from '@mui/material/styles';
import { PropsWithChildren } from '../../node_modules/react';
export type BoardProps = PropsWithChildren<{
    content: string | string[];
    spacing?: 0 | 1 | 2 | 3 | 4 | 5;
    sx?: SxProps<Theme>;
}>;
export declare const Board: ({ content: contentProp, spacing, children, sx }: BoardProps) => import("react/jsx-runtime").JSX.Element;
