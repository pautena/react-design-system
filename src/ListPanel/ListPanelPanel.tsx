import { useListPanel } from "./ListPanel.context";

/**
 * Props for the ListPanelPanel component
 */
export interface ListPanelPanelProps {
  /**
   * List of item IDs that should display this panel
   */
  ids: string[];
  /**
   * Content to display when a matching item is selected
   */
  children?: React.ReactNode;
}

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
