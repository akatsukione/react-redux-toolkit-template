import React, { useEffect } from "react";
import { Container } from "./index.styles";
import { AppActions, useAppDispatch, useAppSelector } from "store";
import { TableComponent } from "components/common";
import { ButtonComponent, ModalComponent } from "components";
const MembersHeaders = [
  "ID",
  "Member ID",
  "Name",
  "Address",
  "Merits",
  "Height",
  "Actions",
];
const MembersColumns = [
  "id",
  "memberId",
  "name",
  "address",
  "merits",
  "height",
  "actions",
];

export const MemberView: React.FC = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(({ members }) => members.members);
  const [modaltitle, setModalTitle] = React.useState<string>("initial title");
  const [showModal, setShowModal] = React.useState<boolean>(false);
  useEffect(() => {
    dispatch(AppActions.members.getMembersListRequest());
  }, []);
  const onToggleModal = () => {
    setModalTitle("Create Member");
    setShowModal((p) => !p);
  };
  return (
    <Container>
      <ButtonComponent onBtnClick={onToggleModal}>Create</ButtonComponent>
      <TableComponent
        headers={MembersHeaders}
        records={members}
        columns={MembersColumns}
      />
      {showModal && (
        <ModalComponent
          title={modaltitle}
          show={showModal}
          memberid={''}
          name={''}
          address={''}
          merit={0}
          height={0}
          closeModal={onToggleModal}
        ></ModalComponent>
      )}
    </Container>
  );
};
