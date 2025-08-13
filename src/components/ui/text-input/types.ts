import type { InputHTMLAttributes } from "react";

export type TextInputVariant = "default" | "filled" | "outlined" | "ghost";
export type TextInputSize = "sm" | "md" | "lg";
export type TextInputState = "default" | "error" | "success" | "warning";
export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: TextInputVariant;
  size?: TextInputSize;
  state?: TextInputState;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}
