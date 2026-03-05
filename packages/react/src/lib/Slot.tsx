import * as React from "react";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export function Slot({ children, ...props }: SlotProps) {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...mergeProps(props, children.props as Record<string, unknown>),
    } as React.HTMLAttributes<HTMLElement>);
  }
  return null;
}

function mergeProps(
  slotProps: Record<string, unknown>,
  childProps: Record<string, unknown>
): Record<string, unknown> {
  const overrideProps: Record<string, unknown> = {};

  for (const key in childProps) {
    if (key === "className") {
      overrideProps[key] = [slotProps[key], childProps[key]].filter(Boolean).join(" ");
    } else if (shouldOverride(key)) {
      overrideProps[key] = childProps[key];
    }
  }

  return { ...slotProps, ...overrideProps };
}

function shouldOverride(key: string): boolean {
  const overrideAttributes = [
    "onClick",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onSubmit",
    "disabled",
    "className",
  ];
  return overrideAttributes.includes(key);
}
