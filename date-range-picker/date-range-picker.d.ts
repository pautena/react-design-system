type DateRange = [Date, Date | undefined];
/**
 * Props for the DateRangePicker component.
 */
export interface DateRangePickerProps {
    /**
     * The label for the date range picker.
     */
    label: string;
    /**
     * The default value for the date range picker.
     */
    defaultValue: DateRange;
    /**
     * The format in which the date range should be displayed.
     */
    format: string;
    /**
     * If true, the date range picker will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The size of the date range picker.
     * @default "medium"
     */
    size?: "small" | "medium";
    /**
     * Callback function that is called when the value of the date range picker changes.
     * @param value - The new date range value.
     * @param index - The index of the date range picker.
     */
    onValueChange: (value: DateRange, index: number) => void;
}
/**
 * DateRangePicker component allows users to select a date range.
 */
export declare const DateRangePicker: ({ defaultValue, format: fmt, label, fullWidth, onValueChange, size, }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
