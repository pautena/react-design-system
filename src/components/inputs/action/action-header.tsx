import { Typography, useTheme } from "@mui/material";
import React from "react";

type Variant = "primary" | "error" | "warning" | "success";
export interface ActionHeaderProps {
  variant?: Variant;
  title: string;
}

export const ActionHeader = ({ title, variant = "primary" }: ActionHeaderProps) => {
  const { palette } = useTheme();

  const titleColor: Record<Variant, string | undefined> = {
    primary: undefined,
    error: "error",
    warning: palette.warning.main,
    success: palette.success.main,
  };
  return (
    <Typography
      color={titleColor[variant]}
      variant="h4"
      pb={1}
      borderBottom={1}
      borderColor="grey.300"
    >
      {title}
    </Typography>
  );
};
