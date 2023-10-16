import React, { useEffect } from "react";
import { Container, BarContainer } from "./index.styles";
import { AppActions, useAppDispatch, useAppSelector } from "store";
import { TableComponent } from "components/common";
import { ButtonComponent, ModalComponent } from "components";
import { MemberType } from "models";
import { BarChartComponent } from "components/common/Chart";
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
  const [index, setIndex] = React.useState<number>(-1);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [selectedMember, setSelectedMember] = React.useState<
    Partial<MemberType>
  >({
    memberId: '',
    name: '',
    address: '',
    merits: 0,
    height: 0,
  });
  useEffect(() => {
    dispatch(AppActions.members.getMembersListRequest());
  }, [dispatch]);
  const onToggleModal = (id?: number) => {
    setModalTitle("Member Action");
    setShowModal((p) => !p);
    let temp_data: Partial<MemberType> = {
      memberId: '',
      name: '',
      address: '',
      merits: 0,
      height: 0,
    }
    setIndex(-1);
    if (typeof id === 'number') {
      const _member: MemberType | undefined = members.find(member => member.id === id);
      if (_member) {
        temp_data = {
          id: _member.id,
          memberId: _member.memberId,
          name: _member.name,
          address: _member.address,
          merits: _member.merits,
          height: _member.height
        }
      }
      setIndex(id)
    }
    setSelectedMember(temp_data);
  };
  return (
    <Container>
      <ButtonComponent onBtnClick={onToggleModal}>Create</ButtonComponent>
      <TableComponent
        headers={MembersHeaders}
        records={members}
        columns={MembersColumns}
        modalAction={onToggleModal}
      />
      {showModal && (
        <ModalComponent
          title={modaltitle}
          show={showModal}
          memberData = {selectedMember}
          closeModal={onToggleModal}
          index = {index}
        ></ModalComponent>
      )}
    <BarContainer>
        {/* <select onChange={(e) => {

        }}>
          <option value={dependency}>height</option>
          <option value="merits">merits</option>
        </select> */}
    <BarChartComponent members = {members} x={'height'}/>
    <BarChartComponent members = {members} x={'merits'}/>
    </BarContainer>
    </Container>
  );
};
