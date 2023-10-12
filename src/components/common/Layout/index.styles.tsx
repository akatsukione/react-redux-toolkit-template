import styled from 'styled-components';

export const LayoutContainer = styled.main`
  width: 100%;
  position: fixed;
  top: 0px;
  bottom: 0px;

  background-color: rgb(191 219 254);
`;

export const ContentSection = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  height: calc(100% - 120px);
  overflow: auto;
`;
