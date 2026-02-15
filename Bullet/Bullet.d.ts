import { SxProps, Theme } from '@mui/material/styles';
export type BulletVariant = "primary" | "secondary" | "default" | "info" | "warning" | "error";
export declare const bulletClasses: {
    root: string;
};
/**
 * Props for the Bullet component
 */
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
export declare function Bullet({ variant, sx }: BulletProps): import("react/jsx-runtime").JSX.Element;
export default Bullet;
