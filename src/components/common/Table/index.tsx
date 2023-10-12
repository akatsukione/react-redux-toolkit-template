import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonComponent } from "components";
import {
  Container,
  SectionArea,
  Header,
  HeaderContainer,
  HeaderItem,
  Body,
  RowContainer,
  RowItem,
} from "./index.styles";

interface MemberDataType {
  [key: string]: any;
}

interface TableProps {
  headers: string[];
  records: MemberDataType[];
  columns: string[];
  renders?: Map<string, (column: string, value: unknown) => unknown>;
}

export const TableComponent: React.FC<TableProps> = (props) => {
  const { headers, columns, records } = props;
  const [memberData, setMemberData] = React.useState<MemberDataType[]>(records);
  const [columnToSort, setColumnToSort] = React.useState<string>("Member ID");
  const [sortState, setSortState] = React.useState<number>(0);
  const [columnState, setColumnState] = React.useState<string>("id");

  const sortColumn = (columnName: string) => {
    setSortState((prevState) =>
      prevState === 2 ? (prevState = 1) : prevState + 1
    );
    setColumnToSort(columnName);
  };

  React.useEffect(() => {
    setMemberData(records);
  }, [records]);

  React.useEffect(() => {
    switch (columnToSort) {
      case "Member ID":
        setColumnState("memberId");
        break;
      case "Name":
        setColumnState("name");
        break;
      case "Address":
        setColumnState("address");
        break;
      case "Merits":
        setColumnState("merits");
        break;
      default:
        setColumnState("height");
        break;
    }
  }, [columnToSort]);

  React.useEffect(() => {
    setSortState(1);
  }, [columnState]);

  React.useEffect(() => {
    let temp_data = Object.values(memberData);
    if (columnState === "merits" || columnState === "height") {
      sortState === 1 &&
        temp_data.sort((a, b) => a[columnState] - b[columnState]);
      sortState === 2 &&
        temp_data.sort((a, b) => b[columnState] - a[columnState]);
    } else {
      sortState === 1 &&
        temp_data.sort((a, b) => a[columnState].localeCompare(b[columnState]));
      sortState === 2 &&
        temp_data.sort((a, b) => b[columnState].localeCompare(a[columnState]));
    }
    setMemberData(temp_data);
  }, [sortState, columnState]);
  
  const onUpdateBtnClicked = () => {};
  const onDeleteBtnClicked = () => {};
  return (
    <div>
      <SectionArea>
        
      </SectionArea>

      <SectionArea>
        <Container>
          <Header>
            <HeaderContainer>
              {headers.map((header) => (
                <HeaderItem key={header} onClick={() => sortColumn(header)}>
                  {header}
                  &nbsp; &nbsp; &nbsp;
                  {header !== "ID" && header !== "Actions" && (
                    <>
                      {columnToSort === header ? (
                        <>
                          {sortState === 0 && (
                            <FontAwesomeIcon icon={["fas", "sort"]} />
                          )}
                          {sortState === 1 && (
                            <FontAwesomeIcon
                              icon={["fas", "arrow-down-short-wide"]}
                            />
                          )}
                          {sortState === 2 && (
                            <FontAwesomeIcon
                              icon={["fas", "arrow-up-wide-short"]}
                            />
                          )}
                        </>
                      ) : (
                        <FontAwesomeIcon icon={["fas", "sort"]} />
                      )}
                    </>
                  )}
                </HeaderItem>
              ))}
            </HeaderContainer>
          </Header>
          <Body>
            {memberData.map((record, index) => (
              <RowContainer key={index}>
                {columns.map((column) =>
                  column !== "actions" ? (
                    <RowItem key={column}>{record[column]}</RowItem>
                  ) : (
                    <RowItem key={column}>
                      <ButtonComponent onBtnClick={onUpdateBtnClicked}>
                        Edit
                      </ButtonComponent>
                      <ButtonComponent onBtnClick={onDeleteBtnClicked}>
                        Delete
                      </ButtonComponent>
                    </RowItem>
                  )
                )}
              </RowContainer>
            ))}
          </Body>
        </Container>
      </SectionArea>
      
    </div>
  );
};
