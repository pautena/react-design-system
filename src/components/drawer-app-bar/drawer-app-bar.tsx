import { ChevronLeft, Menu, PanelLeftOpen } from "lucide-react";
import { useDrawer } from "@/components/drawer-context";
import type {
  DrawerAppBarProps,
  DrawerState,
  DrawerVariant,
} from "@/components/drawerx/drawer.types";
import { cn } from "@/lib/utils";

const moveWithDrawer: Record<DrawerVariant, boolean> = {
  temporary: false,
  mini: true,
  persistent: true,
};

const showMenuButton: Record<DrawerVariant, (state: DrawerState) => boolean> = {
  temporary: () => true,
  mini: (state) => state !== "open",
  persistent: () => true,
};

/**
 * Top app bar adapted for drawer layouts.
 */
export default function DrawerAppBar({
  title,
  className,
  children,
  ...rest
}: DrawerAppBarProps) {
  const { state, variant, switchState, drawerWidth, clipped } = useDrawer();

  const rootStyle =
    moveWithDrawer[variant] && !clipped && state === "open"
      ? { marginLeft: drawerWidth, width: `calc(100% - ${drawerWidth}px)` }
      : undefined;

  return (
    <header
      className={cn(
        "z-20 flex h-14 w-full items-center border-b bg-background px-4",
        clipped && "fixed top-0",
        className,
      )}
      style={rootStyle}
      {...rest}
    >
      {clipped || showMenuButton[variant](state) ? (
        <button
          type="button"
          aria-label="open drawer"
          onClick={switchState}
          className="mr-2"
        >
          {state === "open" ? (
            variant === "mini" ? (
              <PanelLeftOpen data-testid="MenuOpenIcon" className="h-5 w-5" />
            ) : (
              <ChevronLeft data-testid="ChevronLeftIcon" className="h-5 w-5" />
            )
          ) : (
            <Menu data-testid="MenuIcon" className="h-5 w-5" />
          )}
        </button>
      ) : null}

      {title ? (
        <h1 className="truncate text-lg font-semibold">{title}</h1>
      ) : null}
      {children}
    </header>
  );
}
