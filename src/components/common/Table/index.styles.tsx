import styled from "styled-components";

export const Container = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Header = styled.thead`
  background-color: RGB(66, 245, 90);
  cursor:pointer;
`;
export const SectionArea = styled.div`
  display:block;
`;
export const HeaderContainer = styled.tr`

`;
export const CellInput = styled.input`
  height: 100%;
  border:none;
  background-color:inherit;
  &:hover, &:focus {
    outline :none;
  }
`;

export const HeaderItem = styled.th`
padding: 8px;
text-align: left;
border-bottom: 1px solid #DDD;
`;

export const Body = styled.tbody``;

export const RowContainer = styled.tr`
text-align: left;
  padding: 8px;
  &:nth-child(even) {background-color: #f2f2f2;}`;

export const RowItem = styled.td`
padding: 8px;
text-align: left;
border-bottom: 1px solid #DDD;
`;
