import { TypographyVariant } from '@mui/material/styles';
type ActionVariant = "primary" | "error" | "warning" | "success";
export interface ActionHeaderProps {
    variant?: ActionVariant;
    title: string;
    titleVariant?: Extract<TypographyVariant, "h4" | "h5" | "h6">;
}
export declare const ActionHeader: ({ title, titleVariant, variant, }: ActionHeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
