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
      action: PayloadAction<AllMembers.MembersListRequestPayload>
    ) {
      // Get todos list request
      state.members.push(action.payload);
      // console.log(action.payload)
    },
    updateMembersListRequest(
      state: MemberState,
      action: PayloadAction<AllMembers.MembersListRequestPayload>
    ) {
      // state.members = action.payload.members;
      const updatedMembers = state.members.map(member => {
        if (member.id === action.payload.id) {
          return {
            ...action.payload
          };
        } else {
          return member;
        }
      });
      
      state.members = updatedMembers;
    },
    updateCellMembersListRequest(
      state: MemberState,
      action: PayloadAction<AllMembers.CellMembersListRequestPayload>
    ) {
      const updatedCellData = state.members.map(member => {
        if (member.id === action.payload.id) {
          return {
            ...member, [action.payload.column]:action.payload.value
          };
        } 
          return member;
      });
      state.members = updatedCellData;
      console.log(state.members);
    },
    deleteMembersListRequest(
      state: MemberState,
      action: PayloadAction<AllMembers.DeleteMemberRequestPayload>
    ) {
      const updatedMembers = state.members.filter(( member ) => member.id !== action.payload);

      state.members = updatedMembers;
    },
    sortMembersListRequest(
      state: MemberState,
      action: PayloadAction<AllMembers.SortMemberRequestPayload>
    ) {
      // let temp_data = [...memberData];
    if (action.payload.columnState === "merits" || action.payload.columnState === "height") {
      action.payload.sortState === 1 &&
      state.members.sort((a, b) => Number(a[action.payload.columnState]) - Number(b[action.payload.columnState]));
        action.payload.sortState === 2 &&
        state.members.sort((a, b) => Number(b[action.payload.columnState]) - Number(a[action.payload.columnState]));
    } else {
      action.payload.sortState === 1 &&
      state.members.sort((a, b) => String(a[action.payload.columnState]).localeCompare(String(b[action.payload.columnState])));
        action.payload.sortState === 2 &&
        state.members.sort((a, b) => String(b[action.payload.columnState]).localeCompare(String(a[action.payload.columnState])));
    }
    },
  },
});

export const membersActions = membersSlice.actions;

export default membersSlice;
