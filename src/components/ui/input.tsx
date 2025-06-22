import * as React from "react";

import { cn, useToggle } from "@/lib/utils";
import { EyeIcon, EyeOff } from "lucide-react";
type myProps = React.ComponentProps<"input"> & {
  eyeIconColor?: string;
  eyeIconSize?: number;
  showEyeIcon?: boolean
};
function Input({ className, type = "text", ...props }: myProps) {
  const { eyeIconColor, eyeIconSize, showEyeIcon } = props;
  const { isVisible, toggleVisibility } = useToggle()
  return (
    <div
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input inline-flex justify-between h-9 min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
    >
      <input type={showEyeIcon ? isVisible ? "text" : "password" : type} data-slot="input" {...props} className="w-full grow focus:outline-0" />
      {showEyeIcon && (isVisible ? <EyeIcon color={eyeIconColor} onClick={toggleVisibility} size={eyeIconSize} /> : <EyeOff onClick={toggleVisibility} color={eyeIconColor} size={eyeIconSize} />)}
    </div>
  );
}

export { Input };
