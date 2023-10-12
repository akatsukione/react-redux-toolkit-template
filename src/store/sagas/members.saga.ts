import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from '../slices';
import { getData } from 'utils';
import { ResponseGenerator } from 'store/types';
// import { Member } from 'types';
import { MemberType } from 'models';

function* getMembersListRequestSaga() {
  try {
    const response: ResponseGenerator<MemberType[]> = yield call(async() => {
        return await getData(`members`, 'GET');
    });
    // console.log('response:', response);
    const responseData = response.data;
    // console.log('responseData:', responseData);

    yield put(
      Actions.members.getMembersListSuccess({
        members: responseData,
      })
    );
  } catch (err) {
    yield put(Actions.members.getMembersListFailure());
  }
}

export function* membersSaga(): Generator<unknown> {
//   yield takeLatest('members/getMembersListRequest', getMembersListRequestSaga);
  yield takeLatest(Actions.members.getMembersListRequest.type, getMembersListRequestSaga);
}
