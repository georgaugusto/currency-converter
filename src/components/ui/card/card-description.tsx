import type { CardDescriptionProps } from "./types.js";

import { CardDescriptionContainer } from "./styles";

export function CardDescription({
  children,
  ref,
  ...props
}: CardDescriptionProps) {
  return (
    <CardDescriptionContainer ref={ref} {...props}>
      {children}
    </CardDescriptionContainer>
  );
}
