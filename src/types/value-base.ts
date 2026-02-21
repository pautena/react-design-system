export interface BaseValueProps<T> {
  /**
   * Name of the displayed value.
   */
  label: string;

  /**
   * Value displayed.
   */
  value?: T;

  /**
   * String rendered if value is undefined.
   */
  placeholder?: string;

  /**
   * Whether the value is displayed in compact mode.
   * @default false
   */
  dense?: boolean;
}

export const DefaultPlaceholder = "-";
