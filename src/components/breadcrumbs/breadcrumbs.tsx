import { type ComponentProps, Fragment, type ReactNode } from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as UiBreadcrumb,
} from "@/components/ui/breadcrumb";

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
export interface BreadcrumbsProps
  extends Omit<ComponentProps<typeof UiBreadcrumb>, "children"> {
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
export function Breadcrumbs({
  items,
  separator,
  linkProps,
  ...props
}: BreadcrumbsProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <UiBreadcrumb aria-label="breadcrumb" {...props}>
      <BreadcrumbList className="gap-1 text-xs sm:gap-1.5">
        {items.map(({ id, link, text }, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={id}>
              <BreadcrumbItem className="gap-1">
                {isLast ? (
                  <BreadcrumbPage>{text}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={link} {...linkProps}>
                    {text}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {isLast ? null : (
                <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </UiBreadcrumb>
  );
}
