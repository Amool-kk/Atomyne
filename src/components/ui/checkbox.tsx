import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type checkboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  backgroundColor?: string;
  size?: "default" | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  label?: string;
  labelStyle?: React.CSSProperties;
};

const checkboxVariants = cva(
  "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        default: "size-4",
        4: "size-4",
        5: "size-5",
        6: "size-6",
        7: "size-7",
        8: "size-8",
        9: "size-9",
        10: "size-10",
      },
    },
  }
);

function Checkbox({ className, backgroundColor, size = "default", label, labelStyle, ...props }: checkboxProps) {
  return (
    <>
      <CheckboxPrimitive.Root
        data-slot="checkbox"
        className={cn(checkboxVariants({ className, size }))}
        style={backgroundColor ? { backgroundColor, ...props?.style } : props?.style}
        {...props}
      >
        <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="flex items-center justify-center text-current transition-none">
          <CheckBoxComponent size={size != "default" ? size * 3 : 15}>
            <CheckBoxComponent.CheckBox />
          </CheckBoxComponent>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <CheckBoxComponent label={label} labelStyle={labelStyle} id={props.id}>
        <CheckBoxComponent.Label />
      </CheckBoxComponent>
    </>
  );
}

const Context = React.createContext<any>({});

function CheckBoxComponent(props: React.PropsWithChildren & { size?: number; id?: string; label?: string; labelStyle?: React.CSSProperties }) {
  const { size, label, labelStyle, id } = props;
  return <Context.Provider value={{ size, label, labelStyle, id }}>{props.children}</Context.Provider>;
}

CheckBoxComponent.CheckBox = function () {
  const { size } = React.useContext(Context);
  return <CheckIcon size={size} />;
};

CheckBoxComponent.Label = function () {
  const { id, label, labelStyle } = React.useContext(Context);
  return (
    <label htmlFor={id} style={labelStyle}>
      {label}
    </label>
  );
};

export { Checkbox };
