import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: ({
    variant?: "secondary" | "outline" | "link" | "default" | "destructive" | "ghost" | null | undefined;
    size?: "xs" | "sm" | "lg" | "default" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Button({ className, variant, size, ...props }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
