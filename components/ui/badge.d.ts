import { useRender } from '@base-ui/react/use-render';
import { VariantProps } from 'class-variance-authority';
declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Badge({ className, variant, render, ...props }: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>): import('../../../node_modules/react').ReactElement<unknown, string | import('../../../node_modules/react').JSXElementConstructor<any>>;
export { Badge, badgeVariants };
