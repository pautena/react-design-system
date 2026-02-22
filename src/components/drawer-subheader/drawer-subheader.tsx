import type { HTMLAttributes } from "react";
import { useDrawer } from "@/components/drawer-context";
import { cn } from "@/lib/utils";

export type DrawerSubheaderProps = HTMLAttributes<HTMLDivElement>;

/**
 * Section subheader rendered inside drawer navigation.
 */
export default function DrawerSubheader({
  className,
  children,
  ...rest
}: DrawerSubheaderProps) {
  const { size } = useDrawer();

  return (
    <div
      className={cn(
        "px-3 text-xs font-semibold uppercase text-muted-foreground",
        size === "small" ? "py-2" : "py-3",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
