import { ReactElement, useState } from "react";

export interface BaseValueProps<T> {
  /**
   * Name of the displayed value
   */
  label: string;

  /**
   * Value displayed
   */
  value?: T;

  /**
   * String rendered if value is undefined
   */
  placeholder?: string;
}

export interface EditableValueProps<T> {
  /**
   * This field can be edited or not
   */
  editable?: boolean;

  /**
   * Callback executed when the value is edited
   */
  onEdit?: (value?: T) => void;
}

export const DefaultPlaceholder = "-";
