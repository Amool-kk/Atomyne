import type React from "react";

export type InputVariant = "primary" | "destructive" | "success";
export type InputSize = "sm" | "md" | "lg";

export interface InputBaseProps {
  /**
   * Input visual variant
   */
  variant?: InputVariant;
  /**
   * Input size
   */
  size?: InputSize;
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Whether the input is read-only
   */
  readOnly?: boolean;
  /**
   * Placeholder text
   */
  placeholder?: string;
}

export interface InputProps extends InputBaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
}
