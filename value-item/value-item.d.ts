import { GridProps } from '@mui/material/Grid';
import { ResponsiveStyleValue } from '@mui/system';
import { PropsWithChildren, FunctionComponent, ReactElement } from '../../node_modules/react';
export type ValueItemProps = PropsWithChildren<Omit<GridProps, "item" | "container"> & {
    bordered?: ResponsiveStyleValue<boolean>;
}>;
export type ValueItemComponent = FunctionComponent<ValueItemProps>;
export type ValueItemElement = ReactElement<ValueItemProps, ValueItemComponent>;
export declare const valueItemClasses: {
    root: string;
    content: string;
};
/**
 * `ValueItem` is a component to wrap your value components
 */
export declare const ValueItem: ValueItemComponent;
