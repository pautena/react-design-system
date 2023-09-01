import { PropsWithChildren, useContext } from "react";
import { TabCardContext } from "./TabCard.context";
import React from "react";
import { Box, SxProps, Theme } from "@mui/material";

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
