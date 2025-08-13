import { useId } from "react";
import { IconChevronDown } from "@tabler/icons-react";

import type { SelectProps } from "./types";

import {
  SelectContainer,
  SelectLabel,
  SelectWrapper,
  StyledSelect,
  IconContainer,
  SelectArrow,
  LoadingSpinner,
  HelperText,
  ErrorMessage,
  StyledOptGroup,
  StyledOption,
} from "./styles";

export function Select({
  variant = "default",
  size = "md",
  state = "default",
  label,
  helperText,
  errorMessage,
  leftIcon,
  fullWidth = false,
  loading = false,
  options = [],
  groups = [],
  placeholder,
  showPlaceholder = true,
  placeholderText = "Selecione uma opção...",
  className,
  id,
  ref,
  ...props
}: SelectProps) {
  const generatedId = useId();

  const currentState = errorMessage ? "error" : state;
  const selectId = id || generatedId;

  const getRightIcon = () => {
    if (loading) {
      return <LoadingSpinner $size={size} />;
    }
  };

  const rightIcon = getRightIcon();

  const renderOptions = () => {
    if (groups.length > 0) {
      return groups.map((group) => (
        <StyledOptGroup key={group.label} label={group.label}>
          {group.options.map((option) => (
            <StyledOption
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </StyledOption>
          ))}
        </StyledOptGroup>
      ));
    }

    return options.map((option) => (
      <StyledOption
        key={option.value}
        value={option.value}
        disabled={option.disabled}
      >
        {option.label}
      </StyledOption>
    ));
  };

  return (
    <SelectContainer $fullWidth={fullWidth} className={className}>
      {label && <SelectLabel htmlFor={selectId}>{label}</SelectLabel>}

      <SelectWrapper>
        {leftIcon && (
          <IconContainer $position="left" $size={size}>
            {leftIcon}
          </IconContainer>
        )}

        <StyledSelect
          ref={ref}
          id={selectId}
          $variant={variant}
          $size={size}
          $state={currentState}
          $hasLeftIcon={!!leftIcon}
          disabled={loading || props.disabled}
          {...props}
        >
          {showPlaceholder && (
            <StyledOption value="" disabled>
              {placeholder || placeholderText}
            </StyledOption>
          )}

          {renderOptions()}
        </StyledSelect>

        {rightIcon ? (
          <IconContainer $position="right" $size={size}>
            {rightIcon}
          </IconContainer>
        ) : (
          <SelectArrow $size={size}>
            <IconChevronDown
              size={size === "sm" ? 16 : size === "md" ? 18 : 20}
            />
          </SelectArrow>
        )}
      </SelectWrapper>

      {errorMessage ? (
        <ErrorMessage $visible={true}>{errorMessage}</ErrorMessage>
      ) : (
        <HelperText $state={currentState} $visible={!!helperText}>
          {helperText}
        </HelperText>
      )}
    </SelectContainer>
  );
}

export type {
  SelectProps,
  SelectVariant,
  SelectSize,
  SelectState,
  SelectOption,
  SelectGroup,
} from "./types";
