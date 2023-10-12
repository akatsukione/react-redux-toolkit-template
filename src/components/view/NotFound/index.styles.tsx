import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorTitle = styled.div`
  color: rgb(99 102 241);
  font-weight: bold;
  font-size: 72px;
  line-height: 1;
`;

export const NotExistText = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;

  margin-top: 40px;

  @media (min-width: 1280px) {
    font-size: 72px;
    line-height: 1;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
    line-height: 1;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1;
  }
`;

export const NotFoundText = styled.div`
  color: rgb(156 163 175);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  margin-top: 32px;

  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const GoToHomePage = styled(Link)`
  text-decoration-line: none;
  margin-top: 16px;
  padding: 8px 16px;

  display: inline;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: white;

  box-shadow:
    0 1px 3px 0 rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  border: 1px transparent;
  border-radius: 8px;

  background-color: rgb(37 99 235);

  &:focus {
    outline: none;
  }

  &:active {
    background-color: rgb(37 99 235);
  }

  &:hover {
    background-color: rgb(29 78 216);
  }
`;
