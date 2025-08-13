import type { ReactNode } from "react";

import { Header, Footer } from "./components";

import { LayoutContainer, MainContent, SkipLink } from "./styles";

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <LayoutContainer>
      <SkipLink href="#main-content">Pular para o conteúdo principal</SkipLink>

      <Header />

      <MainContent
        id="main-content"
        role="main"
        aria-label="Conteúdo principal"
        tabIndex={-1}
      >
        {children}
      </MainContent>

      <Footer />
    </LayoutContainer>
  );
}
