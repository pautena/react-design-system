import { SxProps, Theme } from '@mui/material/styles';
import { PropsWithChildren } from '../../node_modules/react';
/**
 * Props for the CenterContainer component.
 */
export type CenterContainerProps = PropsWithChildren<{
    /**
     * If true, centers the content vertically.
     * @default false
     */
    centerVertical?: boolean;
    /**
     * If true, centers the content horizontally.
     * @default false
     */
    centerHorizontal?: boolean;
    /**
     * Custom styles to be applied to the container.
     */
    sx?: SxProps<Theme>;
}>;
/**
 * A container component that centers its children both vertically and horizontally by default.
 */
export declare function CenterContainer({ children, centerVertical, centerHorizontal, sx, }: CenterContainerProps): import("react/jsx-runtime").JSX.Element;
