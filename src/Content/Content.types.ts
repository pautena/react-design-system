import type { FunctionComponent, ReactElement } from "react";

/**
 * Props for the Content component
 */
export interface ContentProps {
  /**
   * Content to display
   */
  children?: React.ReactNode;
}

/**
 * Content component type
 */
export type ContentComponent = FunctionComponent<ContentProps>;

/**
 * Content element type
 */
export type ContentElement = ReactElement<ContentElement, ContentComponent>;
