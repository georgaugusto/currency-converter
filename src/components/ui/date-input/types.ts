import type { InputHTMLAttributes } from "react";

export type DateInputVariant = "default" | "filled" | "outlined" | "ghost";
export type DateInputSize = "sm" | "md" | "lg";
export type DateInputState = "default" | "error" | "success" | "warning";
export interface DateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  variant?: DateInputVariant;
  size?: DateInputSize;
  state?: DateInputState;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  min?: string;
  max?: string;
  dateFormat?: "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
}
