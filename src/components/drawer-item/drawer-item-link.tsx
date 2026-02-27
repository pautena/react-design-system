import type { ReactElement, ReactNode } from "react";
import Badge from "@/components/badge";
import Bullet from "@/components/bullet";
import { useDrawer } from "@/components/drawer-context";
import type {
  DrawerItemAvatar,
  DrawerItemBullet,
  DrawerItemLabel,
} from "@/components/drawerx/drawer.types";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
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
  /**
   * Optional action element displayed alongside the item.
   */
  action?: ReactNode;
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
  action,
}: DrawerItemLinkProps) => {
  const { state, size, LinkComponent } = useDrawer();
  const LinkTag = (LinkComponent ?? "a") as any;
  const mini = state === "close";
  const buttonSize = size === "small" ? "sm" : "default";

  if (level > 0) {
    return (
      <SidebarMenuSubItem>
        <SidebarMenuSubButton
          render={<LinkTag href={href} aria-label={text} />}
          isActive={selected}
          className={className}
          size={buttonSize === "sm" ? "sm" : "md"}
        >
          {icon}
          {avatar ? (
            <img
              alt={avatar.alt}
              src={avatar.src}
              className={cn(
                "rounded-full object-cover",
                size === "small" ? "h-5 w-5" : "h-6 w-6",
              )}
            />
          ) : null}
          <span>{text}</span>
          {label ? (
            <Badge text={label.text} variant={label.variant} className="ml-2" />
          ) : null}
          {bullet ? <Bullet variant={bullet.variant} className="ml-2" /> : null}
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        render={<LinkTag href={href} aria-label={text} />}
        isActive={selected}
        tooltip={text}
        size={buttonSize}
        className={className}
      >
        {icon}
        {avatar ? (
          <img
            alt={avatar.alt}
            src={avatar.src}
            className={cn(
              "rounded-full object-cover",
              size === "small" ? "h-6 w-6" : "h-7 w-7",
            )}
          />
        ) : null}
        {!mini ? <span>{text}</span> : null}
        {!mini && label ? (
          <Badge text={label.text} variant={label.variant} className="ml-2" />
        ) : null}
        {!mini && bullet ? (
          <Bullet variant={bullet.variant} className="ml-2" />
        ) : null}
      </SidebarMenuButton>
      {action}
    </SidebarMenuItem>
  );
};
