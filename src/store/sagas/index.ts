import { all } from 'redux-saga/effects';
import { membersSaga } from './members.saga';

export function* appSaga() {
  yield all([membersSaga()]);
}