import type { ReactElement } from "react";
import Badge from "@/components/badge";
import Bullet from "@/components/bullet";
import { useDrawer } from "@/components/drawer-context";
import {
  type DrawerItemAvatar,
  type DrawerItemBullet,
  type DrawerItemLabel,
  getDrawerItemColors,
} from "@/components/drawerx/drawer.types";
import { cn } from "@/lib/utils";

export interface DrawerItemLinkProps {
  /**
   * Text displayed inside the item.
   */
  text: string;
  /**
   * Url where the user is redirected.
   */
  href: string;
  /**
   * Icon displayed to the left.
   */
  icon?: ReactElement;
  /**
   * Avatar displayed to the left.
   */
  avatar?: DrawerItemAvatar;
  /**
   * Label shown at the right.
   */
  label?: DrawerItemLabel;
  /**
   * Bullet shown at the right.
   */
  bullet?: DrawerItemBullet;
  /**
   * Selected state.
   */
  selected?: boolean;
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
 * Clickable drawer link item.
 */
export const DrawerItemLink = ({
  text,
  icon,
  avatar,
  label,
  bullet,
  href,
  selected,
  level,
  className,
}: DrawerItemLinkProps) => {
  const { state, size, LinkComponent } = useDrawer();
  const { colorClass, fontWeight } = getDrawerItemColors(selected);
  const LinkTag = (LinkComponent ?? "a") as any;

  return (
    <LinkTag
      aria-label={text}
      href={href}
      className={cn(
        "flex items-center rounded-md",
        size === "small" ? "min-h-8" : "min-h-9",
        state === "open" ? "px-3" : "justify-center px-2",
        selected && "bg-muted",
        className,
      )}
      style={{ paddingLeft: state === "open" ? 16 + level * 12 : undefined }}
    >
      {icon ? (
        <span className={cn("mr-2 inline-flex", colorClass)}>{icon}</span>
      ) : null}
      {avatar ? (
        <img
          alt={avatar.alt}
          src={avatar.src}
          className={cn(
            "mr-2 rounded-full object-cover",
            size === "small" ? "h-6 w-6" : "h-8 w-8",
          )}
        />
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
      {label && state === "open" ? (
        <Badge text={label.text} variant={label.variant} className="ml-2" />
      ) : null}
      {bullet && state === "open" ? (
        <Bullet variant={bullet.variant} className="ml-4" />
      ) : null}
    </LinkTag>
  );
};
