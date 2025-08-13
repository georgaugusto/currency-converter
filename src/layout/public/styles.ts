import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;

  &:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: #667eea;
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  z-index: 1000;
  transition: top 0.3s;

  &:focus {
    top: 6px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;
