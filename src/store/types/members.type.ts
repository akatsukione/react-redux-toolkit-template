// import { Member } from 'types';
import { MemberType } from 'models';
import { SortState } from 'store/slices/members.slice';
/* eslint-disable @typescript-eslint/ban-types */
export type GetMembersListRequestPayload = undefined;

export type GetMembersListSuccessPayload = {
  members: MemberType[];
};

export type GetMembersListFailurePayload = undefined;

export type MembersListRequestPayload = MemberType

export type DeleteMemberRequestPayload = number

export type CellMembersListRequestPayload = {
  id: number,
  column: string,
  value: string
}
export type SortMemberRequestPayload = {
  sortState: SortState,
  columnState: string
}

export type AddMembersListSuccessPayload = {
  // members: MemberType[];
};