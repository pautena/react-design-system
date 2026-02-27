import { ChevronDown, ChevronRight } from "lucide-react";
import { type ReactElement, useEffect, useMemo, useState } from "react";
import Badge from "@/components/badge";
import Bullet from "@/components/bullet";
import { useDrawer } from "@/components/drawer-context";
import type { DrawerNavigationItem } from "@/components/drawerx/drawer.types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
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

const renderDropdownItems = (
  items: DrawerNavigationItem[],
  selectedItemId?: string,
  LinkComponent?: React.ComponentType<any> | string,
) =>
  items
    .filter((item) => item.kind !== "header")
    .map((item) => {
      if (item.kind === "collapsable") {
        return (
          <DropdownMenuSub key={item.id}>
            <DropdownMenuSubTrigger>
              {item.icon}
              <span>{item.text}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {renderDropdownItems(item.items, selectedItemId, LinkComponent)}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        );
      }

      const LinkTag = (LinkComponent ?? "a") as any;
      const isActive = item.id === selectedItemId;

      return (
        <DropdownMenuItem
          key={item.id}
          className={isActive ? "font-medium text-primary" : undefined}
        >
          <LinkTag href={item.href} className="flex w-full items-center gap-2">
            {item.icon}
            {item.avatar ? (
              <img
                alt={item.avatar.alt}
                src={item.avatar.src}
                className="h-5 w-5 rounded-full object-cover"
              />
            ) : null}
            <span>{item.text}</span>
            {item.label ? (
              <Badge
                text={item.label.text}
                variant={item.label.variant}
                className="ml-auto"
              />
            ) : null}
            {item.bullet ? (
              <Bullet variant={item.bullet.variant} className="ml-auto" />
            ) : null}
          </LinkTag>
        </DropdownMenuItem>
      );
    });

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
  const { state, size, selectedItemId, LinkComponent } = useDrawer();
  const mini = state === "close";
  const [collapsibleOpen, setCollapsibleOpen] = useState(() => Boolean(selected));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (mini) {
      setDropdownOpen(false);
      return;
    }

    if (selected) {
      setCollapsibleOpen(true);
    }
  }, [mini, selected]);
  const buttonSize = size === "small" ? "sm" : "default";

  const submenu = useMemo(
    () => (
      <SidebarMenuSub>
        {items.map((item) => (
          <DrawerItem key={item.id} level={level + 1} item={item} />
        ))}
      </SidebarMenuSub>
    ),
    [items, level],
  );

  if (mini && level === 0) {
    return (
      <SidebarMenuItem className={className}>
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton tooltip={text} size={buttonSize} isActive={selected} />
            }
          >
            {icon}
            <span className="sr-only">{text}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start" className="w-56">
            <div role="region" aria-label={`${text} popover submenu`}>
              {renderDropdownItems(items, selectedItemId, LinkComponent)}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible
      open={collapsibleOpen}
      className="group/collapsible"
      onOpenChange={setCollapsibleOpen}
    >
      {level > 0 ? (
        <SidebarMenuSubItem className={className}>
          <CollapsibleTrigger
            render={
              <SidebarMenuSubButton
                render={<button type="button" />}
                size={buttonSize === "sm" ? "sm" : "md"}
                isActive={selected}
              />
            }
          >
            {icon}
            <span>{text}</span>
            {collapsibleOpen ? (
              <ChevronDown
                data-testid="ExpandMoreIcon"
                className="ml-auto"
              />
            ) : (
              <ChevronRight
                data-testid="ChevronRightIcon"
                className="ml-auto"
              />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div role="region" aria-label={`${text} collapse submenu`}>
              {submenu}
            </div>
          </CollapsibleContent>
        </SidebarMenuSubItem>
      ) : (
        <SidebarMenuItem className={className}>
          <CollapsibleTrigger
            render={
              <SidebarMenuButton
                tooltip={text}
                size={buttonSize}
                isActive={selected}
              />
            }
          >
            {icon}
            {!mini ? <span>{text}</span> : null}
            {!mini ? (
              collapsibleOpen ? (
                <ChevronDown
                  data-testid="ExpandMoreIcon"
                  className="ml-auto"
                />
              ) : (
                <ChevronRight
                  data-testid="ChevronRightIcon"
                  className="ml-auto"
                />
              )
            ) : null}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div role="region" aria-label={`${text} collapse submenu`}>
              {submenu}
            </div>
          </CollapsibleContent>
        </SidebarMenuItem>
      )}
    </Collapsible>
  );
};
