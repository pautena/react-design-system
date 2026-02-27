# Drawer components current structure

This document summarizes how the existing drawer components are created today, and points to the target style reference.

## Style target reference
- Use `.agents/tmp/drawer-demo-style.md` as the visual/style contract for the refactor.

## Component composition (current)

### DrawerProvider (drawer-context)
- `DrawerProvider` supplies drawer state (`open/close`), size, clipped, selected item, and link component.
- `useDrawer()` consumer is used by Drawer, DrawerAppBar, DrawerSubheader, DrawerItem, etc.

### Drawer (src/components/drawer/drawer.tsx)
- Wraps `Sidebar` from `src/components/ui/sidebar.tsx`.
- Uses `collapsible="icon"`, `variant="sidebar"`, `className="z-40"`.
- Inner wrapper sets `role="menu"` and `"flex h-full flex-col border-r bg-sidebar"`.
- Adds `SidebarRail` for resize/expand interaction.

### DrawerContent (src/components/drawer-content/drawer-content.tsx)
- Renders navigation via Base UI sidebar primitives.
- Splits navigation into sections by `DrawerNavigationHeader` entries.
- Uses `SidebarGroup`, `SidebarGroupLabel`, `SidebarMenu`, `SidebarMenuButton` and `SidebarMenuSub*` for nested items.
- Adds item actions (dropdown) on non-primary sections, and a trailing “More” item.

### DrawerMain (src/components/drawer-main/drawer-main.tsx)
- Wraps children with `SidebarInset` for layout shifts.

### DrawerAppBar (src/components/drawer-app-bar/drawer-app-bar.tsx)
- Header bar with `SidebarTrigger` button and optional title.
- Adds `fixed top-0` when `clipped` is true.

### DrawerLayout (src/components/drawer-layout/drawer-layout.tsx)
- Composition helper: `DrawerProvider` + `DrawerAppBar` + `Drawer` + `DrawerContent` + `DrawerMain`.
- Supports component slot overrides and slot props.

### DrawerItem (legacy style) (src/components/drawer-item/*)
- Custom layout (flex, padding) and uses `getDrawerItemColors` for selected state.
- Handles nested menus with custom popover in collapsed state.
- Uses `DrawerSubheader` for section headers.

### DrawerSubheader (src/components/drawer-subheader/drawer-subheader.tsx)
- Renders uppercase section label; hidden when state is "close".

## Notes
- `DrawerContent` already matches the DrawerDemo style (see `.agents/tmp/drawer-demo-style.md`).
- `DrawerItem`/`DrawerSubheader` represent the legacy styling that should be migrated to match DrawerDemo primitives.
