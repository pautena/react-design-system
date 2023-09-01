import { Grid } from "@mui/material";
import React from "react";
import { newArrayWithSize } from "~/Utils";
import { SkeletonCard } from "../SkeletonCard";

export interface SkeletonGridProps {
  size?: number;
}

export const SkeletonGrid = ({ size = 20 }: SkeletonGridProps) => {
  return (
    <Grid container spacing={2}>
      {newArrayWithSize(size, 0).map((_, i) => (
        <Grid item key={i} xs={4}>
          <SkeletonCard width={1} />
        </Grid>
      ))}
    </Grid>
  );
};
