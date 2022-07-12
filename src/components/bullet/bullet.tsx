import { Badge } from "@mui/material";
import React from "react";

export type BulletVariant = "primary" | "secondary" | "default" | "info" | "warning" | "error";

export const bulletClasses = {
  root: "RdsBullet-root",
};

export interface BulletProps {
  variant?: BulletVariant;
}

export const Bullet = ({ variant = "primary" }: BulletProps) => {
  return <Badge color={variant} variant="dot" className={bulletClasses.root} />;
};
