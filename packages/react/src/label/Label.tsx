import * as React from "react";
import { type LabelProps, labelVariants, cn } from "@atomyne/ui-core/label";

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, disabled, children, ...props }, ref) => {
    return (
      <label
        className={cn(labelVariants({ required, disabled }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label, labelVariants };
