import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { ReactElement } from "react";

type IconColor =
  | "inherit"
  | "action"
  | "disabled"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

/**
 * Action button configuration for placeholder
 */
export interface PlaceholderAction {
  /**
   * Unique identifier
   */
  id: string;
  /**
   * Button text label
   */
  text: string;
  /**
   * Navigation URL when clicked
   */
  href?: string;
  /**
   * Click handler function
   */
  onClick?: () => void;
}

/**
 * Arguments passed to icon render function
 */
export interface PlaceholderIconArgs {
  /**
   * Icon size in pixels
   */
  size: number;
  /**
   * Icon color theme
   */
  color: IconColor;
}

/**
 * Function that renders a custom icon element
 *
 * @param args - Icon configuration arguments
 */
export type PlaceholderIcon = ({
  size,
  color,
}: PlaceholderIconArgs) => ReactElement;

/**
 * Props for the Placeholder component
 */
export interface PlaceholderProps {
  /**
   * Main title text
   */
  title: string;
  /**
   * Subtitle or description text
   */
  subtitle: string;
  /**
   * Icon size in pixels
   * @default 200
   */
  iconSize?: number;
  /**
   * Custom icon render function
   */
  icon?: PlaceholderIcon;
  /**
   * Action buttons to display
   */
  actions?: PlaceholderAction[];
}

/**
 * Empty state placeholder with optional icon and actions
 */
export function Placeholder({
  title,
  subtitle,
  icon,
  iconSize = 200,
  actions,
}: PlaceholderProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      {icon?.({ size: iconSize, color: "primary" })}
      <Typography variant="h4" role="heading" aria-level={1}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        role="heading"
        aria-level={2}
        sx={{ mt: 2 }}
      >
        {subtitle}
      </Typography>
      {actions && (
        <Box sx={{ pt: 2 }}>
          {actions.map(({ id, text, href, onClick }, index) => (
            <Button
              key={id}
              role="button"
              variant="contained"
              href={href}
              onClick={onClick}
              sx={{ mr: index < actions.length - 1 ? 2 : 0 }}
            >
              {text}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Placeholder;
