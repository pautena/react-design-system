import { BadgeVariant } from '../components/badge';
import { BaseValueProps } from '../ValueBase';
/**
 * Props for the ValueLabel component
 *
 * @extends BaseValueProps
 */
export type ValueLabelProps = BaseValueProps<string | number | string[] | number[]> & {
    /**
     * Label color variant or array of variants for multiple labels
     */
    variant?: BadgeVariant | BadgeVariant[];
};
/**
 * Displays a label component value with a label
 */
export declare function ValueLabel({ label, value: valueProp, placeholder, variant, }: ValueLabelProps): import("react/jsx-runtime").JSX.Element;
export default ValueLabel;
