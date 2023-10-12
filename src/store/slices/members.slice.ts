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
  },
});

export const membersActions = membersSlice.actions;

export default membersSlice;
