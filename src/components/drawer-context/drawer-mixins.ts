export const openedMixin = (drawerWidth: number) => ({
  width: drawerWidth,
  overflowX: "hidden" as const,
});

export const closedMixin = () => ({
  width: 64,
  overflowX: "hidden" as const,
});
