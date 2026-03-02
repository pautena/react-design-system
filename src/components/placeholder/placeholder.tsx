import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

type IconColor =
  | "inherit"
  | "action"
  | "disabled"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

/**
 * Action button configuration for placeholder.
 */
export interface PlaceholderAction {
  /**
   * Unique identifier.
   */
  id: string;
  /**
   * Button text label.
   */
  text: string;
  /**
   * Navigation URL when clicked.
   */
  href?: string;
  /**
   * Click handler function.
   */
  onClick?: () => void;
}

/**
 * Arguments passed to icon render function.
 */
export interface PlaceholderIconArgs {
  /**
   * Icon size in pixels.
   */
  size: number;
  /**
   * Icon color theme.
   */
  color: IconColor;
}

/**
 * Function that renders a custom icon element.
 */
export type PlaceholderIcon = ({
  size,
  color,
}: PlaceholderIconArgs) => ReactElement;

/**
 * Props for the Placeholder component.
 */
export interface PlaceholderProps {
  /**
   * Main title text.
   */
  title: string;
  /**
   * Subtitle or description text.
   */
  subtitle: string;
  /**
   * Icon size in pixels.
   * @default 120
   */
  iconSize?: number;
  /**
   * Custom icon render function.
   */
  icon?: PlaceholderIcon;
  /**
   * Action buttons to display.
   */
  actions?: PlaceholderAction[];
  /**
   * Additional CSS classes.
   */
  className?: string;
}

/**
 * Empty state placeholder with optional icon and actions.
 */
export function Placeholder({
  title,
  subtitle,
  icon,
  iconSize = 120,
  actions,
  className,
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        className,
      )}
    >
      {icon?.({ size: iconSize, color: "primary" })}
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h2 className="mt-2 text-base text-muted-foreground">{subtitle}</h2>
      {actions ? (
        <div className="pt-4">
          {actions.map(({ id, text, href, onClick }, index) => {
            const marginClass = index < actions.length - 1 ? "mr-2" : "";

            if (href) {
              return (
                <a
                  key={id}
                  role="button"
                  href={href}
                  onClick={onClick}
                  className={cn(
                    "inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground",
                    marginClass,
                  )}
                >
                  {text}
                </a>
              );
            }

            return (
              <button
                type="button"
                key={id}
                onClick={onClick}
                className={cn(
                  "inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground",
                  marginClass,
                )}
              >
                {text}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
