import { SxProps, Theme } from '@mui/material/styles';
import { PropsWithChildren } from '../../node_modules/react';
/**
 * Props for the Board component.
 */
export type BoardProps = PropsWithChildren<{
    /**
     * The content to be displayed on the board. It can be a single string or an array of strings.
     */
    content: string | string[];
    /**
     * Optional spacing value for the board. It can be one of the values: 0, 1, 2, 3, 4, or 5.
     */
    spacing?: 0 | 1 | 2 | 3 | 4 | 5;
    /**
     * Optional styling properties for the board, using the theme's styling system.
     */
    sx?: SxProps<Theme>;
}>;
/**
 * Board component that displays content within a styled Paper component.
 * It supports rendering an array of content lines or a single content string.
 * Additionally, it provides a button to copy the content to the clipboard.
 */
export declare const Board: ({ content: contentProp, spacing, children, sx, }: BoardProps) => import("react/jsx-runtime").JSX.Element;
