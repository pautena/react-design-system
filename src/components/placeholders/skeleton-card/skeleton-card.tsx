import { cn } from "@/lib/utils";

/**
 * Props for the SkeletonCard component.
 */
export interface SkeletonCardProps {
  /**
   * Width of the skeleton card.
   * @default "100%"
   */
  width?: number | string;
  /**
   * Animation mode.
   * @default false
   */
  animation?: "pulse" | "wave" | false;
}

/**
 * Loading placeholder for card-shaped content.
 */
export function SkeletonCard({
  width = "100%",
  animation = false,
}: SkeletonCardProps) {
  const animationClass =
    animation === false
      ? ""
      : animation === "wave"
        ? "animate-pulse"
        : "animate-pulse";

  return (
    <div style={{ width }} className="space-y-2">
      <div className={cn("h-[118px] rounded-md bg-muted", animationClass)} />
      <div className={cn("h-4 rounded-md bg-muted", animationClass)} />
      <div className={cn("h-4 w-4/5 rounded-md bg-muted", animationClass)} />
    </div>
  );
}
