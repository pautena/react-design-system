import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

/**
 * Props for the SkeletonCard component.
 */
export interface SkeletonCardProps {
  /**
   * The width of the skeleton card. Can be a number (interpreted as pixels) or a string (e.g., "100%", "50px").
   */
  width?: number | string;

  /**
   * The animation style for the skeleton card. Can be "pulse", "wave", or false to disable animation.
   */
  animation?: "pulse" | "wave" | false;
}

/**
 * SkeletonCard component renders a skeleton loading placeholder for a card.
 */
export function SkeletonCard({
  width = "100%",
  animation = false,
}: SkeletonCardProps) {
  return (
    <Box width={width}>
      <Skeleton animation={animation} variant="rectangular" height={118} />
      <Skeleton
        animation={animation}
        variant="rectangular"
        height={16}
        sx={{ my: 1 }}
      />
      <Skeleton
        animation={animation}
        variant="rectangular"
        width="80%"
        height={16}
      />
    </Box>
  );
}

export default SkeletonCard;
