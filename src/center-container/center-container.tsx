import { PropsWithChildren, ReactNode } from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

/**
 * Props for the CenterContainer component.
 */
export type CenterContainerProps = PropsWithChildren<{
  /**
   * If true, centers the content vertically.
   * @default false
   */
  centerVertical?: boolean;

  /**
   * If true, centers the content horizontally.
   * @default false
   */
  centerHorizontal?: boolean;

  /**
   * Custom styles to be applied to the container.
   */
  sx?: SxProps<Theme>;
}>;

/**
 * A container component that centers its children both vertically and horizontally by default.
 */
export function CenterContainer({
  children,
  centerVertical = true,
  centerHorizontal = true,
  sx,
}: CenterContainerProps) {
  return (
    <Box
      width={1}
      height={1}
      sx={{
        ...sx,
        display: "flex",
        flexDirection: "column",
        justifyContent: centerVertical ? "center" : "flex-start",
        alignItems: centerHorizontal ? "center" : "flex-start",
      }}
    >
      {children}
    </Box>
  );
}
