import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the Content component.
 */
export interface ContentProps extends HTMLAttributes<HTMLElement> {
  /**
   * Content rendered inside the main container.
   */
  children?: React.ReactNode;
}

/**
 * Main page content container.
 */
export function Content({ children, className, ...props }: ContentProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-screen-xl flex-1 px-4 py-6 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}
