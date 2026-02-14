import Badge from "@mui/material/Badge";
import type { SxProps, Theme } from "@mui/material/styles";

export type BulletVariant =
  | "primary"
  | "secondary"
  | "default"
  | "info"
  | "warning"
  | "error";

export const bulletClasses = {
  root: "RdsBullet-root",
};

/**
 * Props for the Bullet component
 */
export interface BulletProps {
  /**
   * Color palette used to draw the component
   */
  variant?: BulletVariant;
  /**
   * Custom styles
   */
  sx?: SxProps<Theme>;
}

/**
 * Dot to attract the user attention
 */
export function Bullet({ variant = "primary", sx }: BulletProps) {
  return (
    <Badge
      color={variant}
      variant="dot"
      className={bulletClasses.root}
      role="bullet"
      aria-describedby={variant}
      sx={sx}
    />
  );
}

export default Bullet;
