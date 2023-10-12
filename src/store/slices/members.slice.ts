/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Member } from 'types';
import { MemberType } from 'models';
import { AllMembers } from '../types';

type MemberState = {
  members: MemberType[];
};

const initialState: MemberState = {
  members: [],
};

const membersSlice = createSlice({
  name: 'members',
  initialState: initialState,
  reducers: {
    getMembersListRequest(
      state: MemberState,
      action: PayloadAction<AllMembers.GetMembersListRequestPayload>
    ) {
      // Get todos list request
    },
    getMembersListSuccess(
      state: MemberState,
      action: PayloadAction<AllMembers.GetMembersListSuccessPayload>
    ) {
      state.members = action.payload.members;
    },
    getMembersListFailure() {
      // Get todos list failure
    },
    addMembersListRequest(
      state: MemberState,
      action: PayloadAction<AllMembers.AddMembersListRequestPayload>
    ) {
      // Get todos list request
      state.members.push(action.payload);
      // console.log(action.payload)
    },
    addMembersListSuccess(
      state: MemberState,
      action: PayloadAction<AllMembers.AddMembersListSuccessPayload>
    ) {
      // state.members = action.payload.members;
    },
    addMembersListFailure() {
      // Get todos list failure
    },
  },
});

export const membersActions = membersSlice.actions;

export default membersSlice;
