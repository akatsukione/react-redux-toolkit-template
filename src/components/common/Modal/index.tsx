import React from "react";
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
  const AddMember = () => {
    console.log("add_member called");
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
            required
          />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <DataInput
            type="text"
            placeholder="Enter Member Name"
            name="name"
            required
          />
          <label htmlFor="address">
            <b>Address</b>
          </label>
          <DataInput
            type="text"
            placeholder="Enter Member Address"
            name="address"
            required
          />
          <label htmlFor="merit">
            <b>Merit</b>
          </label>
          <DataInput
            type="number"
            placeholder="Enter Member Merit"
            name="merit"
            required
          />
          <label htmlFor="height">
            <b>Member</b>
          </label>
          <DataInput
            type="number"
            placeholder="Enter Member Height"
            name="height"
            required
          />
        </ModalBodyView>
        <ModalFooterView>
          <ButtonComponent onBtnClick={AddMember}>Create Mmber</ButtonComponent>
        </ModalFooterView>
      </ModalContentView>
    </ModalView>
  );
};
