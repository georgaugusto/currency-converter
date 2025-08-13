import { useId } from "react";

import type { TextInputProps } from "./types";

import {
  TextInputLabel,
  InputWrapper,
  StyledInput,
  IconContainer,
  LoadingSpinner,
  HelperText,
  ErrorMessage,
  TextInputContainer,
} from "./styles";

export function TextInput({
  variant = "default",
  size = "md",
  state = "default",
  label,
  helperText,
  errorMessage,
  leftIcon,
  rightIcon,
  fullWidth = false,
  loading = false,
  className,
  id,
  ref,
  ...props
}: TextInputProps) {
  const generatedId = useId();

  const currentState = errorMessage ? "error" : state;
  const inputId = id || generatedId;

  const getRightIcon = () => {
    if (loading) {
      return <LoadingSpinner $size={size} />;
    }

    if (rightIcon) {
      return rightIcon;
    }
  };

  const finalRightIcon = getRightIcon();

  return (
    <TextInputContainer $fullWidth={fullWidth} className={className}>
      {label && <TextInputLabel htmlFor={inputId}>{label}</TextInputLabel>}

      <InputWrapper>
        {leftIcon && (
          <IconContainer $position="left" $size={size}>
            {leftIcon}
          </IconContainer>
        )}

        <StyledInput
          ref={ref}
          id={inputId}
          $variant={variant}
          $size={size}
          $state={currentState}
          $hasLeftIcon={!!leftIcon}
          $hasRightIcon={!!finalRightIcon}
          disabled={loading || props.disabled}
          {...props}
        />

        {finalRightIcon && (
          <IconContainer $position="right" $size={size}>
            {finalRightIcon}
          </IconContainer>
        )}
      </InputWrapper>

      {errorMessage ? (
        <ErrorMessage $visible={true}>{errorMessage}</ErrorMessage>
      ) : (
        <HelperText $state={currentState} $visible={!!helperText}>
          {helperText}
        </HelperText>
      )}
    </TextInputContainer>
  );
}

export type {
  TextInputProps,
  TextInputVariant,
  TextInputSize,
  TextInputState,
} from "./types";
