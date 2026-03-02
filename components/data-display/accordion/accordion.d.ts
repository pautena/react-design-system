import { ComponentProps, ReactNode } from '../../../../node_modules/react';
import { Accordion as UiAccordion, AccordionContent as UiAccordionContent, AccordionItem as UiAccordionItem, AccordionTrigger as UiAccordionTrigger } from '../../ui/accordion';
/**
 * Props for the Accordion component.
 */
export interface AccordionProps extends ComponentProps<typeof UiAccordion> {
    /**
     * Accordion items rendered inside the root.
     */
    children?: ReactNode;
}
/**
 * Props for the AccordionItem component.
 */
export interface AccordionItemProps extends ComponentProps<typeof UiAccordionItem> {
    /**
     * Content rendered inside the accordion item.
     */
    children?: ReactNode;
}
/**
 * Props for the AccordionTrigger component.
 */
export interface AccordionTriggerProps extends ComponentProps<typeof UiAccordionTrigger> {
    /**
     * Trigger content rendered inside the header.
     */
    children?: ReactNode;
}
/**
 * Props for the AccordionContent component.
 */
export interface AccordionContentProps extends ComponentProps<typeof UiAccordionContent> {
    /**
     * Content rendered inside the accordion panel.
     */
    children?: ReactNode;
}
/**
 * Consumer-facing accordion wrapper for public package API.
 */
export declare function Accordion(props: AccordionProps): import("react/jsx-runtime").JSX.Element;
/**
 * Accordion item wrapper for public package API.
 */
export declare function AccordionItem(props: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
/**
 * Accordion trigger wrapper for public package API.
 */
export declare function AccordionTrigger(props: AccordionTriggerProps): import("react/jsx-runtime").JSX.Element;
/**
 * Accordion content wrapper for public package API.
 */
export declare function AccordionContent(props: AccordionContentProps): import("react/jsx-runtime").JSX.Element;
