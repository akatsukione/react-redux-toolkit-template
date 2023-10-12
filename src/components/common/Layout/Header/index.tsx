import { PATH } from 'consts';
import React from 'react';
import { Header, WebsiteTitle } from './index.styles';

export const HeaderSection: React.FC = () => {
  return (
    <Header>
      <WebsiteTitle to={PATH.START}>
        To HomePage
      </WebsiteTitle>
      <WebsiteTitle to={PATH.ALL_MEMBERS}>
        Members
      </WebsiteTitle>
    </Header>
  );
};
