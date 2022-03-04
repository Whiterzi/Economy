import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';

import { testSaga } from './testSaga';

export function* watchTest() {
  yield takeLatest(types.THIS_IS_TEST, testSaga);
}