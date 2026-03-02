import { SkeletonCard } from "@/components/placeholders/skeleton-card/skeleton-card";

/**
 * Props for the SkeletonGrid component.
 */
export interface SkeletonGridProps {
  /**
   * Number of skeleton cards to display.
   * @default 20
   */
  size?: number;
}

/**
 * Grid of skeleton cards for loading list and gallery states.
 */
export function SkeletonGrid({ size = 20 }: SkeletonGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: size }).map((_, index) => (
        <SkeletonCard key={`skeleton-card-${index}`} width="100%" />
      ))}
    </div>
  );
}
