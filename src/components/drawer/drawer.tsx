import { ChevronLeft } from "lucide-react";
import {
  closedMixin,
  openedMixin,
  useDrawer,
} from "@/components/drawer-context";
import type {
  DrawerProps,
  DrawerState,
  DrawerVariant,
} from "@/components/drawerx/drawer.types";
import { cn } from "@/lib/utils";

/**
 * Header spacer for drawer and main content.
 */
export function DrawerHeader({
  children,
  className,
}: {
  /**
   * Header content.
   */
  children?: React.ReactNode;
  /**
   * Additional classes.
   */
  className?: string;
}) {
  return (
    <div className={cn("flex h-14 items-center justify-end px-2", className)}>
      {children}
    </div>
  );
}

const showCloseButton: Record<DrawerVariant, boolean> = {
  temporary: true,
  mini: true,
  persistent: true,
};

const hiddenStateByVariant: Record<DrawerVariant, DrawerState[]> = {
  temporary: ["close"],
  mini: ["close"],
  persistent: ["close"],
};

/**
 * Drawer navigation container.
 */
export default function Drawer({ children, className, ...rest }: DrawerProps) {
  const { state, switchState, clipped, close, drawerWidth, variant } =
    useDrawer();

  const openStyles = openedMixin(drawerWidth);
  const collapsedStyles = closedMixin();
  const isOpen = state === "open";
  const isHidden = hiddenStateByVariant[variant].includes(state);

  return (
    <>
      {variant === "temporary" && isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/30"
          aria-label="drawer backdrop"
          onClick={close}
        />
      ) : null}

      <div
        role="menu"
        aria-hidden={state === "close"}
        className={cn(
          "fixed left-0 top-0 z-40 h-full border-r bg-background transition-all",
          !clipped && "top-14 h-[calc(100%-3.5rem)]",
          isHidden && "-translate-x-full opacity-0",
          className,
        )}
        style={isOpen ? openStyles : collapsedStyles}
        {...rest}
      >
        <DrawerHeader>
          {!clipped && showCloseButton[variant] ? (
            <button
              type="button"
              onClick={switchState}
              aria-label="close drawer"
            >
              <ChevronLeft data-testid="ChevronLeftIcon" className="h-5 w-5" />
            </button>
          ) : null}
        </DrawerHeader>
        <div className="border-t" />
        {children}
      </div>
    </>
  );
}
