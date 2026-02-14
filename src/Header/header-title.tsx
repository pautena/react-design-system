import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react";

/**
 * Props for the HeaderTitle component
 */
export type HeaderTitleProps = PropsWithChildren<{
  /**
   * Whether to show a loading indicator
   */
  loading?: boolean;
}>;

/**
 * Header title component with optional loading state
 */
export default function HeaderTitle({ loading, children }: HeaderTitleProps) {
  const { typography } = useTheme();

  if (loading) {
    return (
      <CircularProgress
        color="inherit"
        size={typography.h4.fontSize}
        aria-label="title loading"
      />
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
}

/**
 * Props for the HeaderSubtitle component
 */
export type HeaderSubtitleProps = PropsWithChildren<{
  /**
   * Whether to show a loading indicator
   */
  loading?: boolean;
}>;

/**
 * Header subtitle component with optional loading state
 */
export function HeaderSubtitle({ loading, children }: HeaderSubtitleProps) {
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
}
