import { ButtonVariant } from '../components/inputs/button/button';
/**
 * Variant options for dialog action buttons.
 */
export type DialogActionVariant = ButtonVariant;
/**
 * Action button configuration for dialog footers.
 */
export interface DialogAction {
    /**
     * Unique identifier for the action.
     */
    id: string;
    /**
     * Button text label.
     */
    text: string;
    /**
     * Button type attribute.
     * @default "button"
     */
    type?: "button" | "submit";
    /**
     * Button variant to style the action.
     * @default "default"
     */
    variant?: DialogActionVariant;
    /**
     * Click handler for the action.
     */
    onClick?: () => void;
}
