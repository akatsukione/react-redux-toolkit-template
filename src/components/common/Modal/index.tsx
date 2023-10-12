import React from "react";
import { MemberType } from "models";
import { AppActions, useAppDispatch, useAppSelector } from "store";
import {
  ModalView,
  ModalContentView,
  ModalHeaderView,
  ModalBodyView,
  ModalFooterView,
  CloseBtnComponent,
  DataInput,
} from "./index.styles";
import { ButtonComponent } from "../Button";

interface ModalInterface {
  title: string;
  closeModal: () => void;
  show: boolean;
  memberid: string;
  name: string;
  address: string;
  merit: number;
  height: number;
}
export const ModalComponent: React.FC<ModalInterface> = (props) => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(({ members }) => members.members);
  const [memberidState, setMemberId] = React.useState<string>(props.memberid);
  const [nameState, setName] = React.useState<string>(props.name);
  const [addressState, setAddress] = React.useState<string>(props.address);
  const [meritState, setMerit] = React.useState<number>(props.merit);
  const [heightState, setHeight] = React.useState<number>(props.height);

  const MemberAction = () => {
    // console.log("type",typeof members);
    // const temp_data = Object.values(members);
    const newMember:MemberType = {
      id: members.length + 1,
      memberId: memberidState,
      name: nameState,
      address: addressState,
      merits: meritState,
      height: heightState
    };
    dispatch(AppActions.members.addMembersListRequest(newMember));
    // console.log(members)
  };
  return (
    <ModalView>
      <ModalContentView>
        <ModalHeaderView>
          <CloseBtnComponent onClick={props.closeModal}>
            &times;
          </CloseBtnComponent>
          <h2>{props.title}</h2>
        </ModalHeaderView>
        <ModalBodyView>
          <label htmlFor="memberID">
            <b>Member ID</b>
          </label>
          <DataInput
            type="text"
            placeholder="Enter Member ID"
            name="memberID"
            value={memberidState}
            onChange={(e) => {
              setMemberId(e.target.value);
            }}
            required
          />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <DataInput
            type="text"
            placeholder="Enter Member Name"
            name="name"
            value={nameState}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <label htmlFor="address">
            <b>Address</b>
          </label>
          <DataInput
            type="text"
            placeholder="Enter Member Address"
            name="address"
            value={addressState}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
          <label htmlFor="merit">
            <b>Merit</b>
          </label>
          <DataInput
            type="number"
            placeholder="Enter Member Merit"
            name="merit"
            value={meritState}
            onChange={(e) => {
              isNaN(parseInt(e.target.value))
                ? setMerit(0)
                : setMerit(parseInt(e.target.value));
            }}
            required
          />
          <label htmlFor="height">
            <b>Height</b>
          </label>
          <DataInput
            type="number"
            placeholder="Enter Member Height"
            name="height"
            value={heightState}
            onChange={(e) => {
              isNaN(parseInt(e.target.value))
                ? setHeight(0)
                : setHeight(parseInt(e.target.value));
            }}
            required
          />
        </ModalBodyView>
        <ModalFooterView>
          <ButtonComponent onBtnClick={MemberAction}>Create Mmber</ButtonComponent>
        </ModalFooterView>
      </ModalContentView>
    </ModalView>
  );
};
