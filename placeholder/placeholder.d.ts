import { ReactElement } from '../../node_modules/react';
type IconColor = "inherit" | "action" | "disabled" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
export interface PlaceholderAction {
    id: string;
    text: string;
    href?: string;
    onClick?: () => void;
}
export interface PlaceholderIconArgs {
    size: number;
    color: IconColor;
}
export type PlaceholderIcon = ({ size, color, }: PlaceholderIconArgs) => ReactElement;
export interface PlaceholderProps {
    title: string;
    subtitle: string;
    iconSize?: number;
    icon?: PlaceholderIcon;
    actions?: PlaceholderAction[];
}
export declare const Placeholder: ({ title, subtitle, icon, iconSize, actions, }: PlaceholderProps) => import("react/jsx-runtime").JSX.Element;
export {};
