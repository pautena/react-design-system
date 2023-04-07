import { Paper, SxProps, Theme, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Link } from "~/components/navigation/link";

export type LinkCardVariant = "primary" | "secondary" | "info" | "warning" | "error";

export interface LinkCardProps {
  variant?: LinkCardVariant;
  href: string;
  title: string;
  message: string;
  linkText?: string;
  sx?: SxProps<Theme>;
}

export const LinkCard = ({
  variant = "primary",
  title,
  message,
  href,
  linkText,
  sx,
}: LinkCardProps) => {
  const { palette } = useTheme();

  const rootSx: SxProps<Theme> = {
    p: 3,
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    backgroundColor: grey[50],
    borderColor: grey[400],
    ":hover": {
      borderColor: palette[variant].main,
      backgroundColor: "white",
    },
  };

  return (
    <Paper component={Link} href={href} variant="outlined" sx={{ ...rootSx, ...sx }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="caption" sx={{ mt: 2 }}>
        {message}
      </Typography>
      {linkText && (
        <Typography color={variant} variant="button" sx={{ mt: 2 }}>
          {linkText}
        </Typography>
      )}
    </Paper>
  );
};
