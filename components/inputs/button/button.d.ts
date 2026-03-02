import { ComponentProps } from '../../../../node_modules/react';
import { Button as UiButton } from '../../ui/button';
export type ButtonVariant = "primary" | "secondary" | "default" | "info" | "warning" | "error" | "success" | "outline" | "ghost" | "destructive" | "link";
/**
 * Props for the Button component
 */
export interface ButtonProps extends Omit<ComponentProps<typeof UiButton>, "variant"> {
    /**
     * Color palette used to draw the component
     * @default "default"
     */
    variant?: ButtonVariant;
}
/**
 * Consumer-facing button wrapper for public package API
 */
export declare function Button({ variant, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
