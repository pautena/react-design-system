import { BadgeVariant } from '../badge';
import { BaseValueProps } from '../../types/value-base';
/**
 * Props for the ValueLabel component.
 */
export type ValueLabelProps = BaseValueProps<string | number | string[] | number[]> & {
    /**
     * Label color variant or array of variants for multiple labels.
     */
    variant?: BadgeVariant | BadgeVariant[];
};
/**
 * Displays badge values with a label.
 */
export declare function ValueLabel({ label, value: valueProp, placeholder, variant, }: ValueLabelProps): import("react/jsx-runtime").JSX.Element;
export default ValueLabel;
