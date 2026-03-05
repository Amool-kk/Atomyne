export interface LabelHTMLAttributes {
  htmlFor?: string;
}

export interface LabelProps extends LabelHTMLAttributes {
  /**
   * Whether the label is for a required field
   */
  required?: boolean;
  /**
   * Whether the label is disabled
   */
  disabled?: boolean;
  /**
   * Label content
   */
  children?: import("react").ReactNode;
  className?: string;
}
