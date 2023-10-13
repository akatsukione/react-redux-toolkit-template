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
  memberData: Partial<MemberType>;
  index: number;
}
export const ModalComponent: React.FC<ModalInterface> = (props) => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(({ members }) => members.members);
  const [memberidState, setMemberId] = React.useState<string | undefined>(
    props.memberData?.memberId?.toString() || ""
  );
  const [nameState, setName] = React.useState<string | undefined>(
    props.memberData?.name?.toString() || ""
  );
  const [addressState, setAddress] = React.useState<string | undefined>(
    props.memberData?.address?.toString() || ""
  );
  const [meritState, setMerit] = React.useState<number | undefined>(
    typeof props.memberData?.merits === 'number'
    ? props.memberData?.merits
    : parseInt(props.memberData?.merits || "0")
  );
  const [heightState, setHeight] = React.useState<number | undefined>(
    typeof props.memberData?.height === 'number'
    ? props.memberData?.height
    : parseInt(props.memberData?.height || "0")
  );

  const MemberAction = () => {

    if (props.index === -1) {
      const newMember: MemberType = {
        id: members.length + 1,
        memberId: memberidState || "",
        name: nameState || "",
        address: addressState || "",
        merits: meritState || 0,
        height: heightState || 0,
      };
      dispatch(AppActions.members.addMembersListRequest(newMember));
    } else {
      console.log(props.index)
      const updateMember: MemberType = {
        id: props.index,
        memberId: memberidState || "",
        name: nameState || "",
        address: addressState || "",
        merits: meritState || 0,
        height: heightState || 0,
      };
      dispatch(AppActions.members.updateMembersListRequest(updateMember));
    }
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
          <ButtonComponent onBtnClick={MemberAction}>Save</ButtonComponent>
        </ModalFooterView>
      </ModalContentView>
    </ModalView>
  );
};
