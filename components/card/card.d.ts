import { ComponentProps, ReactNode } from '../../../node_modules/react';
import { Card as UiCard, CardAction as UiCardAction, CardContent as UiCardContent, CardDescription as UiCardDescription, CardFooter as UiCardFooter, CardHeader as UiCardHeader, CardTitle as UiCardTitle } from '../ui/card';
/**
 * Props for the Card component.
 */
export interface CardProps extends ComponentProps<typeof UiCard> {
    /**
     * Size variant for the card container.
     * @default "default"
     */
    size?: "default" | "sm";
}
/**
 * Props for the CardHeader component.
 */
export interface CardHeaderProps extends ComponentProps<typeof UiCardHeader> {
    /**
     * Content rendered inside the card header.
     */
    children?: ReactNode;
}
/**
 * Props for the CardTitle component.
 */
export interface CardTitleProps extends ComponentProps<typeof UiCardTitle> {
    /**
     * Content rendered inside the card title.
     */
    children?: ReactNode;
}
/**
 * Props for the CardDescription component.
 */
export interface CardDescriptionProps extends ComponentProps<typeof UiCardDescription> {
    /**
     * Content rendered inside the card description.
     */
    children?: ReactNode;
}
/**
 * Props for the CardAction component.
 */
export interface CardActionProps extends ComponentProps<typeof UiCardAction> {
    /**
     * Content rendered inside the card action area.
     */
    children?: ReactNode;
}
/**
 * Props for the CardContent component.
 */
export interface CardContentProps extends ComponentProps<typeof UiCardContent> {
    /**
     * Content rendered inside the card content area.
     */
    children?: ReactNode;
}
/**
 * Props for the CardFooter component.
 */
export interface CardFooterProps extends ComponentProps<typeof UiCardFooter> {
    /**
     * Content rendered inside the card footer area.
     */
    children?: ReactNode;
}
/**
 * Consumer-facing card wrapper for public package API.
 */
export declare function Card({ size, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
/**
 * Card header wrapper for public package API.
 */
export declare function CardHeader(props: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Card title wrapper for public package API.
 */
export declare function CardTitle(props: CardTitleProps): import("react/jsx-runtime").JSX.Element;
/**
 * Card description wrapper for public package API.
 */
export declare function CardDescription(props: CardDescriptionProps): import("react/jsx-runtime").JSX.Element;
/**
 * Card action wrapper for public package API.
 */
export declare function CardAction(props: CardActionProps): import("react/jsx-runtime").JSX.Element;
/**
 * Card content wrapper for public package API.
 */
export declare function CardContent(props: CardContentProps): import("react/jsx-runtime").JSX.Element;
/**
 * Card footer wrapper for public package API.
 */
export declare function CardFooter(props: CardFooterProps): import("react/jsx-runtime").JSX.Element;
export default Card;
