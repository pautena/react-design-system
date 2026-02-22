import { ChevronDown, ChevronRight } from "lucide-react";
import { type ReactElement, useRef, useState } from "react";
import { useDrawer } from "@/components/drawer-context";
import {
  type DrawerNavigationItem,
  getDrawerItemColors,
} from "@/components/drawerx/drawer.types";
import { cn } from "@/lib/utils";
import DrawerItem from "./drawer-item";

export interface DrawerMenuItemProps {
  /**
   * Text displayed inside the item.
   */
  text: string;
  /**
   * Icon displayed to the left.
   */
  icon?: ReactElement;
  /**
   * Selected state.
   */
  selected?: boolean;
  /**
   * Nested items rendered inside submenu.
   */
  items: DrawerNavigationItem[];
  /**
   * Item nesting level.
   */
  level: number;
  /**
   * Additional classes.
   */
  className?: string;
}

/**
 * Collapsible drawer menu item.
 */
export const DrawerMenuItem = ({
  text,
  icon,
  selected,
  items,
  level,
  className,
}: DrawerMenuItemProps) => {
  const { state, size } = useDrawer();
  const anchorEl = useRef<HTMLButtonElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { colorClass, fontWeight } = getDrawerItemColors(selected);

  const submenu = (
    <div>
      {items.map((item) => (
        <DrawerItem key={item.id} level={level + 1} item={item} />
      ))}
    </div>
  );

  return (
    <>
      <button
        ref={anchorEl}
        type="button"
        aria-label={text}
        onClick={() => setMenuOpen((o) => !o)}
        className={cn(
          "flex w-full items-center rounded-md",
          size === "small" ? "min-h-8" : "min-h-9",
          state === "open" ? "px-3" : "justify-center px-2",
          menuOpen && "bg-muted",
          className,
        )}
        style={{ paddingLeft: state === "open" ? 16 + level * 12 : undefined }}
      >
        {icon ? (
          <span className={cn("mr-2 inline-flex", colorClass)}>{icon}</span>
        ) : null}
        <span
          className={colorClass}
          style={{
            fontWeight,
            opacity: state === "collapse" && level === 0 ? 0 : undefined,
          }}
        >
          {text}
        </span>
        {menuOpen && state === "open" ? (
          <ChevronDown data-testid="ExpandMoreIcon" className="ml-2 h-5 w-5" />
        ) : (
          <ChevronRight
            data-testid="ChevronRightIcon"
            className="ml-2 h-5 w-5"
          />
        )}
      </button>

      {state === "open" && menuOpen ? (
        <div role="region" aria-label={`${text} collapse submenu`}>
          {submenu}
        </div>
      ) : menuOpen ? (
        <div
          role="region"
          aria-label={`${text} popover submenu`}
          className="absolute left-full top-0 z-50 min-w-56 rounded-md border bg-popover p-1 shadow"
        >
          {submenu}
        </div>
      ) : null}
    </>
  );
};
