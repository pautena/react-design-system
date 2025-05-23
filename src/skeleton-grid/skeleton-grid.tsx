import Grid from "@mui/material/Grid";
import { newArrayWithSize } from "../utils";
import { SkeletonCard } from "../skeleton-card";

/**
 * Props for the SkeletonGrid component.
 */
export interface SkeletonGridProps {
  /**
   * Optional size of the skeleton grid.
   */
  size?: number;
}
export interface SkeletonGridProps {
  size?: number;
}

/**
 * SkeletonGrid component renders a grid of skeleton cards.
 */
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
