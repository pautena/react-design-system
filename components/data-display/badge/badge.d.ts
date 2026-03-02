import { ComponentProps } from '../../../../node_modules/react';
import { Badge as UiBadge } from '../../ui/badge';
export type BadgeVariant = "primary" | "secondary" | "default" | "info" | "warning" | "error" | "success";
/**
 * Props for the Badge component
 */
export interface BadgeProps extends Omit<ComponentProps<typeof UiBadge>, "children" | "variant"> {
    /**
     * Content of the component
     */
    text: string;
    /**
     * Color palette used to draw the component
     */
    variant?: BadgeVariant;
}
/**
 * Compact badge wrapper for consumer-facing API
 */
export declare function Badge({ text, variant, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
