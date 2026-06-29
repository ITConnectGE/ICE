import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * shadcn-style className combiner: merges conditional classes (clsx)
 * and de-duplicates conflicting Tailwind utilities (tailwind-merge).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
