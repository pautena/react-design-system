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
export declare function SkeletonCard({ width, animation, }: SkeletonCardProps): import("react/jsx-runtime").JSX.Element;
export default SkeletonCard;
