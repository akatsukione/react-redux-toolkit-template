import React from 'react';
import { FooterSection } from './Footer';
import { HeaderSection } from './Header';
import { LayoutContainer, ContentSection } from './index.styles';

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderSection />
      <ContentSection>{children}</ContentSection>
      <FooterSection />
    </LayoutContainer>
  );
};

// HOC WithLayout (Higher Order Component)
// eslint-disable-next-line @typescript-eslint/naming-convention
export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
