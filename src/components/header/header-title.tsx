import { Loader2 } from "lucide-react";
import type { HTMLAttributes } from "react";

/**
 * Props for the HeaderTitle component.
 */
export interface HeaderTitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean;
  /**
   * The title content to display.
   */
  children?: React.ReactNode;
}

/**
 * Header title component with optional loading state.
 */
export default function HeaderTitle({
  loading,
  children,
  ...props
}: HeaderTitleProps) {
  if (loading) {
    return (
      <Loader2
        role="progressbar"
        aria-label="title loading"
        className="h-8 w-8 animate-spin"
      />
    );
  }

  if (typeof children === "string") {
    return (
      <h1 className="text-3xl font-semibold" {...props}>
        {children}
      </h1>
    );
  }

  return <>{children}</>;
}

/**
 * Props for the HeaderSubtitle component.
 */
export interface HeaderSubtitleProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show a loading indicator.
   */
  loading?: boolean;
  /**
   * The subtitle content to display.
   */
  children?: React.ReactNode;
}

/**
 * Header subtitle component with optional loading state.
 */
export function HeaderSubtitle({
  loading,
  children,
  ...props
}: HeaderSubtitleProps) {
  if (loading) {
    return (
      <Loader2
        role="progressbar"
        aria-label="subtitle loading"
        className="h-4 w-4 animate-spin"
      />
    );
  }

  if (typeof children === "string") {
    return (
      <h2 className="text-base text-muted-foreground" {...props}>
        {children}
      </h2>
    );
  }

  return <>{children}</>;
}
