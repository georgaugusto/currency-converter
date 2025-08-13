import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: auto;
  width: 100%;

  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  padding: 3rem 0 1.5rem 0;
`;

export const FooterInner = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const FooterLogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const FooterDescription = styled.p`
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
  max-width: 300px;
`;

export const SectionTitle = styled.h4`
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: inherit;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const FooterDivider = styled.hr`
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 0 1.5rem 0;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  opacity: 0.7;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.p`
  margin: 0;
`;
