// import { Member } from 'types';
import { MemberType } from 'models';
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
  sortState: number,
  columnState: string
}

export type AddMembersListSuccessPayload = {
  // members: MemberType[];
};