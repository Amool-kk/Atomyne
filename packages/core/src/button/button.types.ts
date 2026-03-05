export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link" | "destructive";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonBaseProps {
  /**
   * Button visual variant
   */
  variant?: ButtonVariant;
  /**
   * Button size
   */
  size?: ButtonSize;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Whether the button is loading
   */
  loading?: boolean;
}

export interface ButtonHTMLAttributes {
  type?: "button" | "submit" | "reset";
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  name?: string;
  value?: string | number | readonly string[];
}

export interface ButtonProps extends ButtonBaseProps, ButtonHTMLAttributes {
  /**
   * Button content
   */
  children?: import("react").ReactNode;
  className?: string;
}
