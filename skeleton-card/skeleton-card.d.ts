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
export declare const SkeletonCard: ({ width, animation }: SkeletonCardProps) => import("react/jsx-runtime").JSX.Element;
