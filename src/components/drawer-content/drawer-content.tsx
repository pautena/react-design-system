import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";
import * as React from "react";
import DrawerItem from "@/components/drawer-item";
import DrawerSubheader from "@/components/drawer-subheader";
import type {
  DrawerContentProps,
  DrawerNavigation,
  DrawerNavigationItem,
} from "@/components/drawerx/drawer.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarContent as SidebarContentPrimitive,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type DrawerRenderableItem = Exclude<DrawerNavigationItem, { kind: "header" }>;

function splitByHeaders(navigation: DrawerNavigation) {
  const sections: {
    id: string;
    label: string;
    items: DrawerRenderableItem[];
  }[] = [];
  let current = {
    id: "section-platform",
    label: "Platform",
    items: [] as DrawerRenderableItem[],
  };

  for (const item of navigation) {
    if (item.kind === "header") {
      if (current.items.length > 0) {
        sections.push(current);
      }
      current = { id: item.id, label: item.text, items: [] };
      continue;
    }
    current.items.push(item);
  }

  if (current.items.length > 0) {
    sections.push(current);
  }

  return sections;
}

const buildActionMenu = (isMobile: boolean) => (
  <DropdownMenu>
    <DropdownMenuTrigger render={<SidebarMenuAction showOnHover />}>
      <MoreHorizontal />
      <span className="sr-only">More</span>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className="w-48 rounded-lg"
      side={isMobile ? "bottom" : "right"}
      align={isMobile ? "end" : "start"}
    >
      <DropdownMenuItem>
        <Folder className="text-muted-foreground" />
        <span>View item</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Forward className="text-muted-foreground" />
        <span>Share item</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Trash2 className="text-muted-foreground" />
        <span>Delete item</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

/**
 * Content rendered inside drawer navigation.
 */
export default function DrawerContent({ navigation }: DrawerContentProps) {
  const { isMobile } = useSidebar();
  const sections = React.useMemo(
    () => splitByHeaders(navigation),
    [navigation],
  );

  return (
    <SidebarContentPrimitive>
      {sections.map((section, index) => (
        <SidebarGroup
          key={section.id}
          className={
            index > 0 ? "group-data-[collapsible=icon]:hidden" : undefined
          }
        >
          <DrawerSubheader role="heading" aria-level={2}>
            {section.label}
          </DrawerSubheader>
          <SidebarMenu>
            {section.items.map((item) => (
              <DrawerItem
                key={item.id}
                item={item}
                action={
                  index > 0 && item.kind === "link"
                    ? buildActionMenu(isMobile)
                    : undefined
                }
              />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </SidebarContentPrimitive>
  );
}
