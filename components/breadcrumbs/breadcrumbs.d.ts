import { ComponentProps, ReactNode } from '../../../node_modules/react';
import { BreadcrumbLink, Breadcrumb as UiBreadcrumb } from '../ui/breadcrumb';
/**
 * Breadcrumb item descriptor.
 */
export interface BreadcrumbsItem {
    /**
     * Unique identifier for each item.
     */
    id: string;
    /**
     * Visible text for the breadcrumb item.
     */
    text: string;
    /**
     * Navigation URL used for non-terminal items.
     */
    link: string;
}
/**
 * Props for the Breadcrumbs component.
 */
export interface BreadcrumbsProps extends Omit<ComponentProps<typeof UiBreadcrumb>, "children"> {
    /**
     * Ordered breadcrumb entries.
     */
    items?: BreadcrumbsItem[];
    /**
     * Optional custom separator rendered between items.
     */
    separator?: ReactNode;
    /**
     * Props forwarded to each breadcrumb link item.
     */
    linkProps?: Omit<ComponentProps<typeof BreadcrumbLink>, "children" | "href">;
}
/**
 * Reusable breadcrumb navigation wrapper built on shadcn Base primitives.
 */
export declare function Breadcrumbs({ items, separator, linkProps, ...props }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element | null;
export default Breadcrumbs;
