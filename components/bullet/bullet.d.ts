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
     * Additional CSS classes for custom styling
     */
    className?: string;
}
/**
 * Dot to attract the user attention
 */
export declare function Bullet({ variant, className }: BulletProps): import("react/jsx-runtime").JSX.Element;
export default Bullet;
