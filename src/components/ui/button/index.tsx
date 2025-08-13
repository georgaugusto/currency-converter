import {
  StyledButton,
  IconContainer,
  LoadingSpinner,
  ButtonContent,
  ButtonText,
} from "./styles";

import type { ButtonProps } from "./types";

export function Button({
  variant = "primary",
  size = "md",
  state = "default",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  iconOnly = false,
  children,
  className,
  disabled,
  type = "button",
  ref,
  ...props
}: ButtonProps) {
  const currentState =
    disabled || loading ? (loading ? "loading" : "disabled") : state;

  const isIconOnly = iconOnly || (!children && (leftIcon || rightIcon));

  const showSpinner = loading || state === "loading";

  return (
    <StyledButton
      ref={ref}
      type={type}
      disabled={disabled || loading}
      $variant={variant}
      $size={size}
      $state={currentState}
      $fullWidth={Boolean(fullWidth)}
      $iconOnly={Boolean(isIconOnly)}
      className={className}
      {...props}
    >
      {showSpinner && <LoadingSpinner $size={size} data-loading-spinner />}

      <ButtonContent>
        {leftIcon && !isIconOnly && (
          <IconContainer $position="left">{leftIcon}</IconContainer>
        )}

        {isIconOnly && (leftIcon || rightIcon) && (
          <IconContainer $position="left">
            {leftIcon || rightIcon}
          </IconContainer>
        )}

        {children && !isIconOnly && <ButtonText>{children}</ButtonText>}

        {rightIcon && !isIconOnly && (
          <IconContainer $position="right">{rightIcon}</IconContainer>
        )}
      </ButtonContent>
    </StyledButton>
  );
}

export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonState,
} from "./types";
