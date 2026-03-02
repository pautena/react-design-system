import type { ComponentProps, ReactNode } from "react";
import {
  Accordion as UiAccordion,
  AccordionContent as UiAccordionContent,
  AccordionItem as UiAccordionItem,
  AccordionTrigger as UiAccordionTrigger,
} from "@/components/ui/accordion";

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
export interface AccordionItemProps
  extends ComponentProps<typeof UiAccordionItem> {
  /**
   * Content rendered inside the accordion item.
   */
  children?: ReactNode;
}

/**
 * Props for the AccordionTrigger component.
 */
export interface AccordionTriggerProps
  extends ComponentProps<typeof UiAccordionTrigger> {
  /**
   * Trigger content rendered inside the header.
   */
  children?: ReactNode;
}

/**
 * Props for the AccordionContent component.
 */
export interface AccordionContentProps
  extends ComponentProps<typeof UiAccordionContent> {
  /**
   * Content rendered inside the accordion panel.
   */
  children?: ReactNode;
}

/**
 * Consumer-facing accordion wrapper for public package API.
 */
export function Accordion(props: AccordionProps) {
  return <UiAccordion {...props} />;
}

/**
 * Accordion item wrapper for public package API.
 */
export function AccordionItem(props: AccordionItemProps) {
  return <UiAccordionItem {...props} />;
}

/**
 * Accordion trigger wrapper for public package API.
 */
export function AccordionTrigger(props: AccordionTriggerProps) {
  return <UiAccordionTrigger {...props} />;
}

/**
 * Accordion content wrapper for public package API.
 */
export function AccordionContent(props: AccordionContentProps) {
  return <UiAccordionContent {...props} />;
}
