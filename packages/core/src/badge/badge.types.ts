export type BadgeVariant = "primary" | "secondary" | "outline" | "destructive" | "success" | "warning";

export interface BadgeBaseProps {
  /**
   * Badge visual variant
   */
  variant?: BadgeVariant;
}

export interface BadgeHTMLAttributes {
  id?: string;
  title?: string;
  className?: string;
}

export interface BadgeProps extends BadgeBaseProps, BadgeHTMLAttributes {
  children?: import("react").ReactNode;
}
