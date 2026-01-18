import { TypographyProps } from '@mui/material/Typography';
import { ReactElement } from '../../node_modules/react';
export type ActionVariant = "primary" | "error" | "warning" | "success";
export interface ActionProps {
    /**
     * The variant of the action.
     */
    variant: ActionVariant;
    /**
     * The title of the action.
     */
    title: string;
    /**
     * The variant of the title.
     */
    titleVariant?: Extract<TypographyProps["variant"], "h4" | "h5" | "h6">;
    /**
     * The description of the action.
     */
    description?: string | ReactElement;
    /**
     * The variant of the description.
     */
    descriptionVariant?: TypographyProps["variant"];
    /**
     * The helper text for the action.
     */
    helperText?: string;
    /**
     * The variant of the helper text.
     */
    helperTextVariant?: TypographyProps["variant"];
    /**
     * The text for the action button.
     */
    buttonText: string;
    /**
     * Indicates if the action requires confirmation.
     */
    confirmable?: boolean;
    /**
     * The title for the confirmation dialog.
     */
    confirmTitle?: string;
    /**
     * The description for the confirmation dialog.
     */
    confirmDescription?: string;
    /**
     * The passphrase required to perform action.
     */
    passphrase?: string;
    /**
     * The callback function to be executed when the action is triggered.
     */
    onAction: () => void;
}
/**
 * Renders an action button with a text that explains what it does.
 */
export declare const Action: ({ variant, title, titleVariant, description, descriptionVariant, buttonText, helperText, helperTextVariant, confirmable, passphrase, confirmTitle, confirmDescription, onAction, }: ActionProps) => import("react/jsx-runtime").JSX.Element;
