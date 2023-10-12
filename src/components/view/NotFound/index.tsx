import { PATH } from 'consts';
import React from 'react';
import {
  Container,
  ErrorTitle,
  NotExistText,
  NotFoundText,
  GoToHomePage,
} from './index.styles';

export const NotFoundView: React.FC = () => {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <ErrorTitle>404</ErrorTitle>
      <NotExistText>This page does not exist</NotExistText>
      <NotFoundText>
        The page you are looking for could not be found.
      </NotFoundText>
      <GoToHomePage to={PATH.START}>Go to HomePage!</GoToHomePage>
    </Container>
  );
};
