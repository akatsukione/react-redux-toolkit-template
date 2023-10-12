import React from 'react';
import { Container, Content, GoToLink } from './index.styles';
import { PATH } from 'consts';

export const HomePageView: React.FC = () => {
  return (
    <Container>
      <Content>Welcome to Dashboard!!!</Content>
      <GoToLink to={PATH.ALL_MEMBERS}>Go to Member List</GoToLink>
      {/* <GoToLink to={PATH.USERS_LIST}>Go to Users List</GoToLink> */}
    </Container>
  );
};