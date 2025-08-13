import {
  IconCurrencyDollar,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import {
  FooterContainer,
  FooterInner,
  FooterContent,
  BrandSection,
  FooterLogo,
  FooterLogoIcon,
  FooterDescription,
  SectionTitle,
  ContactSection,
  SocialLinks,
  SocialButton,
  FooterBottom,
  Copyright,
} from "./styles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterInner>
        <FooterContent>
          <BrandSection>
            <FooterLogo>
              <FooterLogoIcon>
                <IconCurrencyDollar size={24} />
              </FooterLogoIcon>
              <span>Currency Converter</span>
            </FooterLogo>
            <FooterDescription>
              Convert currencies with precision using updated exchange rates.
            </FooterDescription>
          </BrandSection>

          <ContactSection>
            <SectionTitle>Connect</SectionTitle>
            <SocialLinks>
              <SocialButton
                href="https://github.com/georgaugusto"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <IconBrandGithub size={20} />
              </SocialButton>
              <SocialButton
                href="https://linkedin.com/in/georgaugusto"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <IconBrandLinkedin size={20} />
              </SocialButton>
            </SocialLinks>
          </ContactSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} Georg Augusto. All rights reserved.
          </Copyright>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
}
