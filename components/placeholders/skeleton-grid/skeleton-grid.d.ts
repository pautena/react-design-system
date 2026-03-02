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
export declare function SkeletonGrid({ size }: SkeletonGridProps): import("react/jsx-runtime").JSX.Element;
