type DateRange = [Date, Date | undefined];
/**
 * Props for the DateRangeCalendar component.
 */
export interface DateRangeCalendarProps {
    /**
     * The default date range value.
     */
    defaultValue: DateRange;
    /**
     * Callback function that is called when the date range value changes.
     *
     * @param value - The new date range value.
     * @param updatedIndex - The index of the updated date range.
     */
    onValueChange: (value: DateRange, updatedIndex: number) => void;
}
/**
 * A Date Range Calendar component that allows users to select a range of dates.
 */
export declare const DateRangeCalendar: ({ defaultValue, onValueChange, }: DateRangeCalendarProps) => import("react/jsx-runtime").JSX.Element;
export {};
