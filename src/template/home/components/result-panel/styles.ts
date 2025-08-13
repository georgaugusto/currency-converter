import styled from "styled-components";

export const ResultContainer = styled.div`
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  text-align: center;

  &:focus-within {
    outline: 2px solid #2d3748;
    outline-offset: 2px;
  }
`;

export const ResultAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  font-family: "Monaco", "Menlo", monospace;
  margin: 1rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ResultLabel = styled.div`
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

export const ConversionDetail = styled.div`
  color: #4a5568;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  line-height: 1.4;
`;

export const RateDetail = styled(ConversionDetail)`
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 1rem;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #718096;
  padding: 1rem;

  svg {
    animation: spin 1s linear infinite;
    flex-shrink: 0;
  }

  span {
    font-size: 0.9rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  color: #e53e3e;
  padding: 1rem;
  background-color: #fed7d7;
  border-radius: 8px;
  border: 1px solid #feb2b2;
  margin: 1rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

export const EmptyState = styled.div`
  text-align: center;
  opacity: 0.6;
  padding: 1rem;
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.4;
`;
