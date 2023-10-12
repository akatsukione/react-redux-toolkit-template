import membersSlice, { membersActions } from './members.slice';

export const Slices = { members: membersSlice.reducer };

export const Actions = {
  members: membersActions,
};
