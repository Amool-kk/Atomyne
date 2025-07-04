import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex hover:cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/85 transition-colors duration-300 ease-in-out",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/70 transition-colors duration-300 ease-in-out focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/60 transition-colors duration-300 ease-in-out",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 transition-colors duration-300 ease-in-out",
        link: "text-primary underline-offset-4 hover:underline transition-colors duration-300 ease-in-out",
        animated: "hover:scale-105 bg-primary text-primary-foreground shadow-xs hover:bg-primary/85 transition-colors duration-300 ease-in-out relative inline-block overflow-hidden z-[1] transition-transform duration-200 ease-in-out after:content-[''] after:absolute after:inset-0 after:scale-x-0 after:origin-right after:bg-[var(--animatedBg)] after:-z-10 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:origin-left"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  animatedBgColor,
  buttonColor,
  textColor,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean,
    animatedBgColor?: string
    buttonColor?: string,
    textColor?: string
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      style={{ "--animatedBg": animatedBgColor, backgroundColor: buttonColor ? buttonColor : "", color: textColor ? textColor : "" } as React.CSSProperties}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
