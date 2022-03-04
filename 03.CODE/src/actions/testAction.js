import * as types from '../constants/actionTypes';

export const testAction = payload => ({
  type: types.THIS_IS_TEST,
  payload
});

export const testSucceededAction = payload => ({
  type: types.THIS_IS_TEST_SUCCEEDED,
  payload
});

export const testFailedAction = payload => ({
  type: types.THIS_IS_TEST_FAILED,
  payload
});