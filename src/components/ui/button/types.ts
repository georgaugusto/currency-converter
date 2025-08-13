import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "success"
  | "warning";
export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonState = "default" | "loading" | "disabled";
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  iconOnly?: boolean;
  children?: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}
