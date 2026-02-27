# DrawerDemo style reference

This document captures the styling and composition used by `src/components/drawer/drawer-demo.stories.tsx` so other drawer components can align visually.

## Layout composition

```tsx
<DrawerProvider initialState={initialState} selectedItemId={selectedItemId}>
  <Drawer>
    <DrawerContent navigation={mockDrawerNavigation} />
  </Drawer>
  <DrawerMain>
    <Content className="space-y-3 p-3">
      <DrawerToggleButton />
      <SkeletonGrid />
    </Content>
  </DrawerMain>
</DrawerProvider>
```

### Drawer container
- Uses `Drawer` (`src/components/drawer/drawer.tsx`) which wraps the Base UI `Sidebar`.
- `Sidebar` configuration: `collapsible="icon"`, `variant="sidebar"`, `className="z-40"`.
- Inner wrapper element: `div` with `role="menu"` and classes `"flex h-full flex-col border-r bg-sidebar"`.
- Includes `SidebarRail` for the resize/expand affordance.

### Main content
- `DrawerMain` uses `SidebarInset` for layout shifting.
- Demo content uses `Content` with `className="space-y-3 p-3"`.

### Drawer toggle button
- The toggle is a small outline `Button` (`variant="outline" size="sm"`) rendered inside the main content area, driven by `useDrawer()`.

## DrawerContent styling highlights
- Uses Base UI sidebar primitives from `src/components/ui/sidebar.tsx`.
- Layout is `SidebarContent` containing multiple `SidebarGroup` sections.
- Section labels use `SidebarGroupLabel` (typography and spacing defined by the sidebar primitive).
- Section spacing:
  - `SidebarGroup` uses default `p-2` padding.
  - Additional sections (index > 0) are hidden when collapsed via `group-data-[collapsible=icon]:hidden`.

### Menu items
- Items are rendered with `SidebarMenu`, `SidebarMenuItem`, and `SidebarMenuButton`.
- Links:
  - `SidebarMenuButton` wraps a rendered `<a>` tag for navigation.
  - `tooltip` prop set to the item text for collapsed state.
  - Active state uses `isActive` tied to `selectedItemId`.
- Actions on items in non-primary sections:
  - `SidebarMenuAction` wrapped by `DropdownMenuTrigger`.
  - `DropdownMenuContent` has `className="w-48 rounded-lg"` and aligns to `right` or `bottom` depending on mobile.

### Collapsible groups
- Collapsible items use `Collapsible` + `SidebarMenuButton` in `CollapsibleTrigger`.
- Chevron indicator:
  - `ChevronRight` with `className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"`.
- Nested items render with `SidebarMenuSub` and `SidebarMenuSubButton`.
- Default open logic when a child item is selected.

### “More” item
- Secondary sections append a `SidebarMenuItem` with `SidebarMenuButton` using class `text-sidebar-foreground/70` and icon `MoreHorizontal` with the same color class.

## Color and typography expectations
- Drawer background: `bg-sidebar`.
- Drawer border: `border-r` on the inner container.
- Active/hover states are driven by the Sidebar primitives (`sidebar-accent` tokens).
- Section label typography uses `SidebarGroupLabel` styling (`text-xs`, muted foreground, etc.).

## Notes for migration
- Prefer the Sidebar primitives (`SidebarMenuButton`, `SidebarMenuSubButton`, etc.) instead of custom flex containers.
- Match spacing and padding to the Sidebar primitives rather than bespoke Tailwind classes.
