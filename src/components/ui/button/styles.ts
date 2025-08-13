import styled, { css, keyframes } from "styled-components";

import type { ButtonVariant, ButtonSize, ButtonState } from "./types";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const buttonVariants: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.2);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
    }
  `,

  secondary: css`
    background: #f7fafc;
    color: #4a5568;
    border: 2px solid #e2e8f0;

    &:hover:not(:disabled) {
      background: #edf2f7;
      border-color: #cbd5e0;
      transform: translateY(-1px);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      background: #e2e8f0;
    }

    &:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  `,

  outline: css`
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;

    &:hover:not(:disabled) {
      background: #667eea;
      color: white;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    }
  `,

  ghost: css`
    background: transparent;
    color: #4a5568;
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: rgba(102, 126, 234, 0.1);
      color: #667eea;
    }

    &:active:not(:disabled) {
      background: rgba(102, 126, 234, 0.15);
    }

    &:focus {
      background: rgba(102, 126, 234, 0.1);
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    }
  `,

  destructive: css`
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    color: white;
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #c53030 0%, #9c2626 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(229, 62, 62, 0.2);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.3);
    }
  `,

  success: css`
    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    color: white;
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #2f855a 0%, #276749 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(56, 161, 105, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(56, 161, 105, 0.2);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.3);
    }
  `,

  warning: css`
    background: linear-gradient(135deg, #d69e2e 0%, #b7791f 100%);
    color: white;
    border: 2px solid transparent;

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #b7791f 0%, #975a16 100%);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(214, 158, 46, 0.3);
    }

    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(214, 158, 46, 0.2);
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba(214, 158, 46, 0.3);
    }
  `,
};

const buttonSizes: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 8px;
    min-height: 32px;
    gap: 0.5rem;
  `,

  md: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 10px;
    min-height: 40px;
    gap: 0.75rem;
  `,

  lg: css`
    padding: 1rem 2rem;
    font-size: 1.125rem;
    border-radius: 12px;
    min-height: 48px;
    gap: 0.75rem;
  `,

  xl: css`
    padding: 1.25rem 2.5rem;
    font-size: 1.25rem;
    border-radius: 14px;
    min-height: 56px;
    gap: 1rem;
  `,
};

const buttonStates: Record<ButtonState, ReturnType<typeof css>> = {
  default: css``,

  loading: css`
    pointer-events: none;
    position: relative;

    & > *:not([data-loading-spinner]) {
      opacity: 0;
    }
  `,

  disabled: css`
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;

    &:hover {
      transform: none !important;
      box-shadow: none !important;
    }
  `,
};

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $state: ButtonState;
  $fullWidth: boolean;
  $iconOnly: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  position: relative;
  white-space: nowrap;
  user-select: none;
  overflow: visible;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $variant }) => buttonVariants[$variant]}
  ${({ $size }) => buttonSizes[$size]}
  ${({ $state }) => buttonStates[$state]}
  

  ${({ $iconOnly, $size }) =>
    $iconOnly &&
    css`
      padding: ${$size === "sm"
        ? "0.5rem"
        : $size === "md"
        ? "0.75rem"
        : $size === "lg"
        ? "1rem"
        : "1.25rem"};
      aspect-ratio: 1;
      min-width: auto;
    `}

  &:disabled {
    ${buttonStates.disabled}
  }
`;

export const IconContainer = styled.span<{ $position: "left" | "right" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const LoadingSpinner = styled.div<{ $size: ButtonSize }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &::before {
    content: "";
    ${({ $size }) => {
      const spinnerSize =
        $size === "sm"
          ? "16px"
          : $size === "md"
          ? "18px"
          : $size === "lg"
          ? "20px"
          : "22px";
      return css`
        width: ${spinnerSize};
        height: ${spinnerSize};
      `;
    }}
    border: 2px solid transparent;
    border-top: 2px solid #1a202c;
    border-right: 2px solid #1a202c;
    border-radius: 50%;
    animation: ${spin} 0.7s linear infinite;
  }

  &[data-loading-spinner] {
    opacity: 1 !important;
  }
`;

export const ButtonContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: inherit;
`;

export const ButtonText = styled.span`
  display: inline-block;
`;
