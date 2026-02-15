import { GridProps } from '@mui/material/Grid';
import { ResponsiveStyleValue } from '@mui/system';
import { FunctionComponent, ReactElement } from '../../node_modules/react';
/**
 * Props for the ValueItem component
 */
export interface ValueItemProps extends Omit<GridProps, "item" | "container"> {
    /**
     * Whether to display a border
     */
    bordered?: ResponsiveStyleValue<boolean>;
    /**
     * Content to display
     */
    children?: React.ReactNode;
}
/**
 * ValueItem component type
 */
export type ValueItemComponent = FunctionComponent<ValueItemProps>;
/**
 * ValueItem element type
 */
export type ValueItemElement = ReactElement<ValueItemProps, ValueItemComponent>;
export declare const valueItemClasses: {
    root: string;
    content: string;
};
/**
 * `ValueItem` is a component to wrap your value components
 */
declare const ValueItem: ValueItemComponent;
export default ValueItem;
