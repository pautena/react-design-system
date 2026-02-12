import Paper from "@mui/material/Paper";
import type { PropsWithChildren } from "react";

export type ValueCardProps = PropsWithChildren;

/**
 * Container to show a labeled value
 */
export default function ValueCard({ children }: ValueCardProps) {
  return <Paper sx={{ p: 2 }}>{children}</Paper>;
}
