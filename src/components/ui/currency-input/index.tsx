import { useId } from "react";
import { NumericFormat } from "react-number-format";

import type { TextInputProps } from "../text-input/types";

import {
  TextInputLabel,
  InputWrapper,
  StyledInput,
  IconContainer,
  LoadingSpinner,
  HelperText,
  ErrorMessage,
  TextInputContainer,
} from "../text-input/styles";

interface CurrencyInputProps
  extends Omit<TextInputProps, "type" | "onChange" | "value" | "defaultValue"> {
  value?: string | number;
  onValueChange?: (values: { value: string; floatValue?: number }) => void;
}

export function CurrencyInput({
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
  onValueChange,
  ...props
}: CurrencyInputProps) {
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

        <NumericFormat
          customInput={StyledInput}
          id={inputId}
          $variant={variant}
          $size={size}
          $state={currentState}
          $hasLeftIcon={!!leftIcon}
          $hasRightIcon={!!finalRightIcon}
          disabled={loading || props.disabled}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          allowNegative={false}
          placeholder="0,00"
          isAllowed={(values) => {
            const { floatValue } = values;
            return (
              floatValue === undefined ||
              (floatValue >= 0 && floatValue <= 999999999.99)
            );
          }}
          onValueChange={onValueChange}
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

export type { CurrencyInputProps };
