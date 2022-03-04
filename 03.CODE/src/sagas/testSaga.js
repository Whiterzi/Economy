import { put, call } from 'redux-saga/effects';
import {
  testSucceededAction,
  testFailedAction,
} from '../actions/testAction';

import Page1Service from '../pages/Page1/Page1.service'


export function* testSaga({ payload }) {
  try {
    const res = yield call(Page1Service.Test, payload);

    // const resAction = res.ok
    // ? testSucceededAction(res.result)
    //   : testFailedAction(res.result);
    
    const resAction = res.length !==0
      ? testSucceededAction(res)
      : testFailedAction(res);

    yield put(resAction);
  } catch (err) {
    console.log('get test saga error', err);
  }
};


