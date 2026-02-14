import Paper from "@mui/material/Paper";

/**
 * Props for the ValueCard component
 */
export interface ValueCardProps {
  /**
   * Content to display in the card
   */
  children?: React.ReactNode;
}

/**
 * Container to show a labeled value
 */
export function ValueCard({ children }: ValueCardProps) {
  return <Paper sx={{ p: 2 }}>{children}</Paper>;
}

export default ValueCard;
