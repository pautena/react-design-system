import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

/**
 * Props for the HeaderTitle component
 */
export interface HeaderTitleProps {
  /**
   * Whether to show a loading indicator
   */
  loading?: boolean;
  /**
   * The title content to display
   */
  children?: React.ReactNode;
}

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
export interface HeaderSubtitleProps {
  /**
   * Whether to show a loading indicator
   */
  loading?: boolean;
  /**
   * The subtitle content to display
   */
  children?: React.ReactNode;
}

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
