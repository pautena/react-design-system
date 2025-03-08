import { ResponsiveStyleValue } from '@mui/system';
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
