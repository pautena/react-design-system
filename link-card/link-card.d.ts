import { SxProps, Theme } from '@mui/material/styles';
export type LinkCardVariant = "primary" | "secondary" | "info" | "warning" | "error";
export interface LinkCardProps {
    variant?: LinkCardVariant;
    href: string;
    title: string;
    message: string;
    linkText?: string;
    sx?: SxProps<Theme>;
}
export declare const LinkCard: ({ variant, title, message, href, linkText, sx, }: LinkCardProps) => import("react/jsx-runtime").JSX.Element;
