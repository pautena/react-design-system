/**
 * Responsive style values for breakpoints.
 */
export type ResponsiveStyleValue<T> = T | {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
};
interface Breakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
interface BreakpointsCounter extends Breakpoints {
    increment(breakpoints: Partial<Breakpoints>): ResponsiveStyleValue<boolean>;
}
export declare const newBreakpointsCounter: (breakpoint?: number) => BreakpointsCounter;
export {};
