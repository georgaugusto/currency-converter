import { useId } from "react";

import type { DateInputProps } from "./types";

import {
  DateInputContainer,
  DateInputLabel,
  DateInputWrapper,
  StyledDateInput,
  IconContainer,
  LoadingSpinner,
  HelperText,
} from "./styles";

export function DateInput({
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
  dateFormat = "DD/MM/YYYY",
  id,
  ref,
  ...props
}: DateInputProps) {
  const generatedId = useId();

  const inputId = id || generatedId;
  const displayHelperText = state === "error" ? errorMessage : helperText;
  const showDefaultCalendarIcon = !rightIcon && !loading;

  const getPlaceholder = () => {
    switch (dateFormat) {
      case "DD/MM/YYYY":
        return "dd/mm/aaaa";
      case "MM/DD/YYYY":
        return "mm/dd/aaaa";
      case "YYYY-MM-DD":
        return "aaaa-mm-dd";
      default:
        return "dd/mm/aaaa";
    }
  };

  const getRightIcon = () => {
    if (loading) {
      return <LoadingSpinner $size={size} />;
    }
    if (rightIcon) {
      return rightIcon;
    }
    return null;
  };

  const finalRightIcon = getRightIcon();

  return (
    <DateInputContainer $fullWidth={fullWidth} className={className}>
      {label && (
        <DateInputLabel htmlFor={inputId} $size={size} $state={state}>
          {label}
        </DateInputLabel>
      )}

      <DateInputWrapper>
        {leftIcon && (
          <IconContainer $position="left" $size={size} $state={state}>
            {leftIcon}
          </IconContainer>
        )}

        <StyledDateInput
          ref={ref}
          id={inputId}
          type="date"
          $variant={variant}
          $size={size}
          $state={state}
          $hasLeftIcon={Boolean(leftIcon)}
          $hasRightIcon={
            Boolean(rightIcon) || loading || showDefaultCalendarIcon
          }
          placeholder={getPlaceholder()}
          disabled={loading}
          {...props}
        />

        {finalRightIcon && (
          <IconContainer $position="right" $size={size} $state={state}>
            {finalRightIcon}
          </IconContainer>
        )}
      </DateInputWrapper>

      <HelperText $size={size} $state={state} $visible={!!displayHelperText}>
        {displayHelperText}
      </HelperText>
    </DateInputContainer>
  );
}

export type {
  DateInputProps,
  DateInputVariant,
  DateInputSize,
  DateInputState,
} from "./types";
