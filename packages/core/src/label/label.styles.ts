import { cva, type VariantProps } from "class-variance-authority";

export const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      disabled: {
        true: "opacity-50",
        false: "",
      },
      required: {
        true: "after:content-['*'] after:text-destructive after:ml-0.5",
      },
    },
    defaultVariants: {
      disabled: false,
      required: false,
    },
  }
);

export type LabelVariants = VariantProps<typeof labelVariants>;
