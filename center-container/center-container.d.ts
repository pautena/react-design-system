import { ReactNode } from '../../node_modules/react';
import { SxProps, Theme } from '@mui/material/styles';
export interface CenterContainerProps {
    children: ReactNode | undefined;
    centerVertical?: boolean;
    centerHorizontal?: boolean;
    sx?: SxProps<Theme>;
}
export declare function CenterContainer({ children, centerVertical, centerHorizontal, sx, }: CenterContainerProps): import("react/jsx-runtime").JSX.Element;
