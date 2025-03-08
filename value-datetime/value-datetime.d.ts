import { BaseValueProps, EditableValueProps } from '../value-base';
export type EditInputType = "datetime" | "date" | "time";
export interface ValueDatetimeProps extends BaseValueProps<Date>, EditableValueProps<Date> {
    /**
     * Datetime format
     */
    format: string;
    /**
     * Edit input type
     */
    editInputType?: EditInputType;
}
/**
 * Displays a formated datetime with a label
 */
export declare const ValueDatetime: ({ label, value: valueProp, format: fmt, placeholder, editable, editInputType, dense, onEdit, }: ValueDatetimeProps) => import("react/jsx-runtime").JSX.Element;
