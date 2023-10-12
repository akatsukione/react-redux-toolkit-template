// import { Member } from 'types';
import { MemberType } from 'models';
/* eslint-disable @typescript-eslint/ban-types */
export type GetMembersListRequestPayload = undefined;

export type GetMembersListSuccessPayload = {
  members: MemberType[];
};

export type GetMembersListFailurePayload = undefined;

export type AddMembersListRequestPayload = MemberType

export type AddMembersListSuccessPayload = {
  // members: MemberType[];
};