import { type CSSProperties, type ReactNode, useContext } from "react";
import { TabCardContext } from "./tab-card.context";

/**
 * Props for the TabCardPanel component.
 */
export interface TabCardPanelProps {
  /**
   * Tab index or list of indices linked to this panel.
   */
  index: number | number[];
  /**
   * Legacy style prop kept for compatibility.
   */
  sx?: CSSProperties;
  /**
   * Panel content.
   */
  children?: ReactNode;
}

/**
 * Content panel rendered only when linked tab is selected.
 */
export default function TabCardPanel({
  index,
  sx,
  children,
}: TabCardPanelProps) {
  const [value] = useContext(TabCardContext);
  const isActive = Array.isArray(index)
    ? index.includes(value)
    : value === index;

  if (!isActive) {
    return null;
  }

  return <div style={sx}>{children}</div>;
}
