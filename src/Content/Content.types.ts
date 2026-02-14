import type { FunctionComponent, PropsWithChildren, ReactElement } from "react";

/**
 * Props for the Content component
 */
export type ContentProps = PropsWithChildren;

/**
 * Content component type
 */
export type ContentComponent = FunctionComponent<ContentProps>;

/**
 * Content element type
 */
export type ContentElement = ReactElement<ContentElement, ContentComponent>;
