import { PropsWithChildren } from '../../node_modules/react';
import { SxProps, Theme } from '@mui/material';
export type TabCardPanelProps = PropsWithChildren<{
    index: number | number[];
    sx?: SxProps<Theme>;
}>;
export declare const TabCardPanel: ({ index, children, sx }: TabCardPanelProps) => import("react/jsx-runtime").JSX.Element | null;
