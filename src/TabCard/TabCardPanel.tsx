import type { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { TabCardContext } from "./TabCard.context";

/**
 * Props for the TabCardPanel component
 */
export interface TabCardPanelProps {
  /**
   * Tab index or array of indices that this panel corresponds to
   */
  index: number | number[];
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
  /**
   * Content to display when the panel is active
   */
  children?: React.ReactNode;
}

/**
 * Content panel for TabCard that displays when its tab is active
 */
export default function TabCardPanel({
  index,
  children,
  sx,
}: TabCardPanelProps) {
  const [value] = useContext(TabCardContext);
  let isTab = value === index;
  if (Array.isArray(index)) {
    isTab = index.includes(value);
  }

  return isTab ? <Box sx={sx}>{children}</Box> : null;
}
