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

export const DefaultPlaceholder = "-";
