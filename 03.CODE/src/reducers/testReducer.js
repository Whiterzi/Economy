import initialState from './initialState';
import * as types from '../constants/actionTypes';


 function test (state = initialState.test, action) {
  const { type, payload } = action;

  switch (type) {
    case types.THIS_IS_TEST_SUCCEEDED:
      return payload;
    
    case types.THIS_IS_TEST_FAILED:
      return [];
    
    default:
      return state;
  }
};

export default test;