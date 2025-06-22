import { clsx, type ClassValue } from "clsx"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const useToggle = (initialState: boolean = false) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const toggleVisibility = () => setIsVisible(prev => !prev)
  return { isVisible, toggleVisibility }
}