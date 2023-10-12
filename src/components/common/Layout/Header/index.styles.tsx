import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-left: 16px;
  position: fixed;
  top: 0px;
  height: 60px;
  width: 100%;

  background-color: rgb(67 56 202);
`;

export const WebsiteTitle = styled(Link)`
  font-size: 30px;
  line-height: 36px;

  font-weight: bold;
  color: white;

  text-decoration: none;
`;
