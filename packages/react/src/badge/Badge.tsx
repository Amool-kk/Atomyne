import * as React from "react";
import { type BadgeBaseProps, badgeVariants, cn } from "@atomyne/ui-core/badge";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, BadgeBaseProps {}

function Badge({ className, variant = "primary", children, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props}>{children}</div>;
}

export { Badge, badgeVariants };
