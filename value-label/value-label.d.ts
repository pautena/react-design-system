import { LabelVariant } from '../label';
import { BaseValueProps } from '../value-base';
export type ValueLabelProps = BaseValueProps<string | number | string[] | number[]> & {
    variant?: LabelVariant | LabelVariant[];
    color?: string | string[];
};
/**
 * Displays a label component value with a label
 */
export declare const ValueLabel: ({ label, value: valueProp, placeholder, color, variant, }: ValueLabelProps) => import("react/jsx-runtime").JSX.Element;
