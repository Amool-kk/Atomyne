import React, { createContext, useContext } from "react";

const SelectContext = createContext({});

function Select({
  className,
  children,
  defaultValue,
  searchEnabled = false,
  ...props
}: React.PropsWithChildren & HTMLSelectElement & { searchEnabled?: boolean; defaultValue: any }) {
  return <SelectContext.Provider value={{ defaultValue, searchEnabled }}>{children}</SelectContext.Provider>;
}

// const Select

const useSelectContext = () => {
  const result = useContext(SelectContext);
  if (!result) {
    throw new Error("Context not found");
  }
  return result;
};

export default Select;
