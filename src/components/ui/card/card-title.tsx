import { CardTitleContainer } from "./styles";
import type { CardTitleProps } from "./types.js";

export function CardTitle({
  children,
  as = "h2",
  ref,
  ...props
}: CardTitleProps) {
  return (
    <CardTitleContainer ref={ref} as={as} {...props}>
      {children}
    </CardTitleContainer>
  );
}
