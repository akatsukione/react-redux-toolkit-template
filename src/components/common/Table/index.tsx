import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonComponent } from "components";
import { AppActions, useAppDispatch, useAppSelector } from "store";
import {
  Container,
  SectionArea,
  Header,
  HeaderContainer,
  HeaderItem,
  Body,
  RowContainer,
  RowItem,
  CellInput,
} from "./index.styles";

interface MemberDataType {
  [key: string]: any;
}

interface TableProps {
  headers: string[];
  records: MemberDataType[];
  columns: string[];
  renders?: Map<string, (column: string, value: unknown) => unknown>;
  modalAction: (id?: number) => void;
}

export const TableComponent: React.FC<TableProps> = (props) => {
  const dispatch = useAppDispatch();
  const { headers, columns, records } = props;
  const [memberData, setMemberData] = React.useState<MemberDataType[]>(records);
  const [columnToSort, setColumnToSort] = React.useState<string>("Member ID");

  const [sortState, setSortState] = React.useState<number>(0);
  const [columnState, setColumnState] = React.useState<string>("id");

  const sortColumn = (columnName: string) => {
    setSortState((prevState) =>
      prevState === 2 ? (prevState = 1) : prevState + 1
    );
    setColumnToSort(()=>columnName);
  };
  React.useEffect(() => {
    dispatch(AppActions.members.sortMembersListRequest({sortState,columnState}));
    // console.log("second",sortState, columnState);
  }, [sortState, columnState]);

  // React.useEffect(() => {
  //   setMemberData(records);
  // }, [records]);

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

  const sortTable = (state: number, column: string) => {
    let temp_data = [...memberData];
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
  }

  const onUpdateBtnClicked = (id: number) => {
    props.modalAction(id);
  };
  const onDeleteBtnClicked = (id: number) => {
    if (window.confirm("Are you sure?")) {
      dispatch(AppActions.members.deleteMembersListRequest(id));
    }
  };
  const selectCell = (
    e: React.MouseEvent<HTMLInputElement>,
    column: string
  ) => {
    const cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
      cell.style.borderColor = "#DDD";
    });
    if (column !== "id") {
      const target = e.target as HTMLInputElement;
      if (target.parentElement) {
        target.parentElement.style.borderColor = "red";
      }
    }
  };
  const chageCellData = (value: string, id: number, column: string) => {
    dispatch(
      AppActions.members.updateCellMembersListRequest({ id, column, value })
    );
  };
  return (
    <div>
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
            {records.map((record: MemberDataType, index: number) => (
              <RowContainer key={index}>
                {columns.map((column) =>
                  column !== "actions" ? (
                    <RowItem key={column}>
                      {column === "id" ? (
                        record[column]
                      ) : (
                        // record[column]
                        <CellInput
                          type="text"
                          onClick={(
                            event: React.MouseEvent<HTMLInputElement>
                          ) => selectCell(event, column)}
                          key={column}
                          value={record[column]}
                          onChange = {(e)=>
                            chageCellData(e.target.value, record.id, column)
                          }
                          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                              // Enter key pressed
                              console.log("Enter key pressed. Input value:", e.currentTarget.value);
                            }
                          }}
                            />
                            // chageCellData(e.target.value, record.id, column)
                      )}
                    </RowItem>
                  ) : (
                    <RowItem key={column}>
                      <ButtonComponent
                        rowId={index}
                        onBtnClick={() => onUpdateBtnClicked(record.id)}
                      >
                        Edit
                      </ButtonComponent>
                      <ButtonComponent
                        rowId={index}
                        onBtnClick={() => onDeleteBtnClicked(record.id)}
                      >
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
