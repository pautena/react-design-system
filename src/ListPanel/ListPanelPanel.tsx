import type { PropsWithChildren } from "react";
import { useListPanel } from "./ListPanel.context";

/**
 * Props for the ListPanelPanel component
 */
export type ListPanelPanelProps = PropsWithChildren<{
  /**
   * List of item IDs that should display this panel
   */
  ids: string[];
}>;

/**
 * Content panel for ListPanel that displays when a matching item is selected
 */
export default function ListPanelPanel({ ids, children }: ListPanelPanelProps) {
  const selectedId = useListPanel();

  if (selectedId && !ids.includes(selectedId)) {
    return null;
  }

  return <>{children}</>;
}
