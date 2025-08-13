import styled, { css } from "styled-components";
import type { CardVariant } from "./types.js";

const cardVariants: Record<CardVariant, ReturnType<typeof css>> = {
  default: css`
    background: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  `,
  elevated: css`
    background: white;
    border: none;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(15px);
  `,
  outlined: css`
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  `,
  ghost: css`
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: none;
    backdrop-filter: blur(8px);
  `,
};

export const CardContainer = styled.div<{ $variant: CardVariant }>`
  border-radius: 20px;
  padding: 0;
  overflow: hidden;

  ${({ $variant }) => cardVariants[$variant]}

  @media (max-width: 768px) {
    border-radius: 16px;
  }
`;

export const CardHeaderContainer = styled.div`
  padding: 2rem 2rem 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardContentContainer = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: grid;
  gap: 1.25rem;

  @media (max-width: 768px) {
    padding: 0 1rem 1rem 1rem;
    gap: 1rem;
  }
`;

export const CardTitleContainer = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CardDescriptionContainer = styled.p`
  color: #718096;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
