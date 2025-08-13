import {
  CardContainer,
  CardHeaderContainer,
  CardContentContainer,
} from "./styles";
import type { CardProps, CardHeaderProps, CardContentProps } from "./types.js";

export function Card({
  children,
  variant = "default",
  ref,
  ...props
}: CardProps) {
  return (
    <CardContainer ref={ref} $variant={variant} {...props}>
      {children}
    </CardContainer>
  );
}

export function CardHeader({ children, ref, ...props }: CardHeaderProps) {
  return (
    <CardHeaderContainer ref={ref} {...props}>
      {children}
    </CardHeaderContainer>
  );
}

export function CardContent({ children, ref, ...props }: CardContentProps) {
  return (
    <CardContentContainer ref={ref} {...props}>
      {children}
    </CardContentContainer>
  );
}
