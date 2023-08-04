import { Typography, useTheme } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

type ActionVariant = "primary" | "error" | "warning" | "success";

export interface ActionHeaderProps {
  variant?: ActionVariant;
  title: string;
  titleVariant?: Extract<Variant, "h4" | "h5" | "h6">;
}

export const ActionHeader = ({ title, titleVariant, variant = "primary" }: ActionHeaderProps) => {
  const { palette } = useTheme();

  const titleColor: Record<ActionVariant, string | undefined> = {
    primary: undefined,
    error: "error",
    warning: palette.warning.main,
    success: palette.success.main,
  };
  return (
    <Typography
      color={titleColor[variant]}
      variant={titleVariant}
      pb={1}
      borderBottom={1}
      borderColor="grey.300"
    >
      {title}
    </Typography>
  );
};
