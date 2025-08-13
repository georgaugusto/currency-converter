import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SwapButton = styled.button`
  padding: 1rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin: auto;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #5a67d8;

      svg {
        transform: rotate(180deg);
      }
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (hover: hover) and (pointer: fine) {
    svg {
      transition: transform 0.2s ease;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 12px;
    height: auto;
    padding: 1rem;
  }
`;
