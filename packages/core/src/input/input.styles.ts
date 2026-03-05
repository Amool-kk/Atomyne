import { cva, type VariantProps } from "class-variance-authority";
import { type InputVariant, type InputSize } from "./input.types";

export const inputVariants = cva(
  "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-input focus:border-ring",
        destructive: "border-destructive focus:border-destructive focus:ring-destructive",
        success: "border-success focus:border-success focus:ring-success",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;
