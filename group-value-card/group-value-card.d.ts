import { ValueItemElement } from '../value-item';
export interface GroupValueCardProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    children: ValueItemElement | ValueItemElement[];
    dense?: boolean;
}
export declare const GroupValueCard: ({ title, subtitle, centered, children, dense, }: GroupValueCardProps) => import("react/jsx-runtime").JSX.Element;
