import styled, { css } from "styled-components";

import type { TextInputVariant, TextInputSize, TextInputState } from "./types";

const inputVariants: Record<TextInputVariant, ReturnType<typeof css>> = {
  default: css`
    background: #f7fafc;
    border: 2px solid #e2e8f0;

    &:hover {
      border-color: #cbd5e0;
    }

    &:focus {
      background: white;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  `,

  filled: css`
    background: #edf2f7;
    border: 2px solid transparent;

    &:hover {
      background: #e2e8f0;
    }

    &:focus {
      background: white;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  `,

  outlined: css`
    background: white;
    border: 2px solid #e2e8f0;

    &:hover {
      border-color: #cbd5e0;
    }

    &:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  `,

  ghost: css`
    background: transparent;
    border: 2px solid transparent;

    &:hover {
      background: rgba(102, 126, 234, 0.05);
    }

    &:focus {
      background: white;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  `,
};

const inputSizes: Record<TextInputSize, ReturnType<typeof css>> = {
  sm: css`
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
    border-radius: 8px;
  `,

  md: css`
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
  `,

  lg: css`
    padding: 1rem 1.25rem;
    font-size: 1.125rem;
    border-radius: 12px;
  `,
};

const inputStates: Record<TextInputState, ReturnType<typeof css>> = {
  default: css``,

  error: css`
    border-color: #e53e3e !important;

    &:focus {
      border-color: #e53e3e !important;
      box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1) !important;
    }
  `,

  success: css`
    border-color: #38a169 !important;

    &:focus {
      border-color: #38a169 !important;
      box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.1) !important;
    }
  `,

  warning: css`
    border-color: #d69e2e !important;

    &:focus {
      border-color: #d69e2e !important;
      box-shadow: 0 0 0 3px rgba(214, 158, 46, 0.1) !important;
    }
  `,
};

export const TextInputContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
`;

export const TextInputLabel = styled.label`
  font-weight: 600;
  font-size: 0.875rem;
  color: #2d3748;
  line-height: 1.25;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input<{
  $variant: TextInputVariant;
  $size: TextInputSize;
  $state: TextInputState;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
}>`
  width: 100%;
  font-family: inherit;
  color: #2d3748;
  transition: all 0.2s ease;
  outline: none;

  ${({ $variant }) => inputVariants[$variant]}
  ${({ $size }) => inputSizes[$size]}
  ${({ $state }) => inputStates[$state]}
  
  ${({ $hasLeftIcon, $size }) =>
    $hasLeftIcon &&
    css`
      padding-left: ${$size === "sm"
        ? "2.25rem"
        : $size === "md"
        ? "2.5rem"
        : "3rem"};
    `}
  
  ${({ $hasRightIcon, $size }) =>
    $hasRightIcon &&
    css`
      padding-right: ${$size === "sm"
        ? "2.25rem"
        : $size === "md"
        ? "2.5rem"
        : "3rem"};
    `}
  
  &::placeholder {
    color: #a0aec0;
  }

  &:disabled {
    background: #f7fafc;
    color: #a0aec0;
    cursor: not-allowed;
    border-color: #e2e8f0;
  }
`;

export const IconContainer = styled.div<{
  $position: "left" | "right";
  $size: TextInputSize;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  pointer-events: none;
  z-index: 1;

  ${({ $position, $size }) => {
    const spacing =
      $size === "sm" ? "0.75rem" : $size === "md" ? "1rem" : "1.25rem";
    return $position === "left"
      ? css`
          left: ${spacing};
        `
      : css`
          right: ${spacing};
        `;
  }}
`;

export const LoadingSpinner = styled.div<{ $size: TextInputSize }>`
  ${({ $size }) => {
    const spinnerSize =
      $size === "sm" ? "16px" : $size === "md" ? "18px" : "20px";
    return css`
      width: ${spinnerSize};
      height: ${spinnerSize};
    `;
  }}

  border: 2px solid #e2e8f0;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const HelperText = styled.span<{
  $state: TextInputState;
  $visible?: boolean;
}>`
  font-size: 0.875rem;
  line-height: 1.25;
  min-height: 1.25rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: ${({ $visible }) => ($visible !== false ? 1 : 0)};
  transform: translateY(
    ${({ $visible }) => ($visible !== false ? "0" : "-4px")}
  );
  overflow: hidden;

  color: ${({ $state }) => {
    switch ($state) {
      case "error":
        return "#e53e3e";
      case "success":
        return "#38a169";
      case "warning":
        return "#d69e2e";
      default:
        return "#718096";
    }
  }};
`;

export const ErrorMessage = styled.span<{ $visible?: boolean }>`
  font-size: 0.875rem;
  line-height: 1.25;
  color: #e53e3e;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.25rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "-4px")});
  overflow: hidden;
`;
