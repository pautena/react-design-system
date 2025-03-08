import { SxProps, Theme } from '@mui/material/styles';
export type BulletVariant = "primary" | "secondary" | "default" | "info" | "warning" | "error";
export declare const bulletClasses: {
    root: string;
};
export interface BulletProps {
    /**
     * Color palette used to draw the component
     */
    variant?: BulletVariant;
    /**
     * Custom styles
     */
    sx?: SxProps<Theme>;
}
/**
 * Dot to attract the user attention
 */
export declare const Bullet: ({ variant, sx }: BulletProps) => import("react/jsx-runtime").JSX.Element;
