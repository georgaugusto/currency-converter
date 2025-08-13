import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0;
  transition: all 0.3s ease;

  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding: 1.5rem 0;
  }
`;

export const HeaderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: #2d3748;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #667eea;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1rem;

  @media (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.25rem;
  }
`;

// export const ThemeToggle = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   border: none;
//   background: rgba(102, 126, 234, 0.1);
//   color: #667eea;
//   cursor: pointer;
//   border-radius: 8px;
//   transition: all 0.2s ease;

//   &:hover {
//     background: #667eea;
//     color: white;
//     transform: scale(1.05);
//   }
// `;
