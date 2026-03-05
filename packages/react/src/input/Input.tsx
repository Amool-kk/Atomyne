import * as React from "react";
import { type InputBaseProps, inputVariants, cn } from "@atomyne/ui-core/input";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, InputBaseProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
