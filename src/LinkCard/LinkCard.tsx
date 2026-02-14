import { grey } from "@mui/material/colors";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { type SxProps, type Theme, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export type LinkCardVariant =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "error";

/**
 * Props for the LinkCard component
 */
export interface LinkCardProps {
  /**
   * Color variant of the card
   * @default "primary"
   */
  variant?: LinkCardVariant;
  /**
   * URL to navigate to
   */
  href: string;
  /**
   * Card title
   */
  title: string;
  /**
   * Card message content
   */
  message: string;
  /**
   * Custom text for the link
   */
  linkText?: string;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
}

/**
 * Clickable card component that acts as a styled link
 */
export function LinkCard({
  variant = "primary",
  title,
  message,
  href,
  linkText,
  sx,
}: LinkCardProps) {
  const { palette } = useTheme();

  const rootSx: SxProps<Theme> = {
    p: 3,
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    backgroundColor: palette.mode === "light" ? grey[50] : grey[900],
    borderColor: grey[400],
    ":hover": {
      borderColor: palette[variant].main,
      backgroundColor:
        palette.mode === "light" ? palette.common.white : grey[800],
    },
  };

  return (
    <Paper
      component={Link}
      href={href}
      variant="outlined"
      sx={{ ...rootSx, ...sx }}
    >
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
}

export default LinkCard;
