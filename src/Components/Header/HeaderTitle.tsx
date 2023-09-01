import { CircularProgress, Typography, useTheme } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "react";

export type HeaderTitleProps = PropsWithChildren<{ loading?: boolean }>;

export const HeaderTitle = ({ loading, children }: HeaderTitleProps) => {
  const { typography } = useTheme();

  if (loading) {
    return (
      <CircularProgress color="inherit" size={typography.h4.fontSize} aria-label="title loading" />
    );
  }

  if (typeof children === "string") {
    return (
      <Typography variant="h4" role="heading" aria-level={1}>
        {children}
      </Typography>
    );
  }

  return <>{children}</>;
};

export type HeaderSubtitleProps = PropsWithChildren<{ loading?: boolean }>;

export const HeaderSubtitle = ({ loading, children }: HeaderSubtitleProps) => {
  const { typography } = useTheme();

  if (loading) {
    return (
      <CircularProgress
        color="inherit"
        size={typography.body1.fontSize}
        aria-label="subtitle loading"
      />
    );
  }

  if (typeof children === "string") {
    return (
      <Typography variant="body1" role="heading" aria-level={2}>
        {children}
      </Typography>
    );
  }

  return <>{children}</>;
};
