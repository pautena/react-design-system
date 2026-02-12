import Grid from "@mui/material/Grid";
import SkeletonCard from "../SkeletonCard";
import { newArrayWithSize } from "../utils";

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
export default function SkeletonGrid({ size = 20 }: SkeletonGridProps) {
  return (
    <Grid container spacing={2}>
      {newArrayWithSize(size, 0).map((_, i) => (
        <Grid key={i} size={{ xs: 4 }}>
          <SkeletonCard width={1} />
        </Grid>
      ))}
    </Grid>
  );
}
