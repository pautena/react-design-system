type DateRange = [Date, Date | undefined];
export interface DateRangePickerProps {
    label: string;
    defaultValue: DateRange;
    format: string;
    fullWidth?: boolean;
    size?: "small" | "medium";
    onValueChange: (value: DateRange, index: number) => void;
}
export declare const DateRangePicker: ({ defaultValue, format: fmt, label, fullWidth, onValueChange, size, }: DateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
