type DateRange = [Date, Date | undefined];
export interface DateRangeCalendarProps {
    defaultValue: DateRange;
    onValueChange: (value: DateRange, updatedIndex: number) => void;
}
export declare const DateRangeCalendar: ({ defaultValue, onValueChange }: DateRangeCalendarProps) => import("react/jsx-runtime").JSX.Element;
export {};
