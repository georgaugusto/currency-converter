import type { SelectHTMLAttributes } from "react";

export type SelectVariant = "default" | "filled" | "outlined" | "ghost";
export type SelectSize = "sm" | "md" | "lg";
export type SelectState = "default" | "error" | "success" | "warning";
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}
export interface SelectGroup {
  label: string;
  options: SelectOption[];
}
export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: SelectVariant;
  size?: SelectSize;
  state?: SelectState;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  options?: SelectOption[];
  groups?: SelectGroup[];
  placeholder?: string;
  showPlaceholder?: boolean;
  placeholderText?: string;
  className?: string;
  ref?: React.Ref<HTMLSelectElement>;
}
