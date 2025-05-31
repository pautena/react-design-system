import { PropsWithChildren, useContext } from "react";
import { TabCardContext } from "./tab-card.context";
import { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";

export type TabCardPanelProps = PropsWithChildren<{
  index: number | number[];
  sx?: SxProps<Theme>;
}>;

export const TabCardPanel = ({ index, children, sx }: TabCardPanelProps) => {
  const [value] = useContext(TabCardContext);
  let isTab = value === index;
  if (Array.isArray(index)) {
    isTab = index.includes(value);
  }

  return isTab ? <Box sx={sx}>{children}</Box> : null;
};
