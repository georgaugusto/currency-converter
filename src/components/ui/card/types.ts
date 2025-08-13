import type { HTMLAttributes, Ref } from "react";

export type CardVariant = "default" | "elevated" | "outlined" | "ghost";
export type CardTitleElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
}
export interface CardProps extends BaseCardProps {
  variant?: CardVariant;
}
export interface CardHeaderProps extends BaseCardProps {}
export interface CardContentProps extends BaseCardProps {}
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: CardTitleElement;
  ref?: Ref<HTMLHeadingElement>;
}
export interface CardDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  ref?: Ref<HTMLParagraphElement>;
}
