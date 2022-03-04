import { combineReducers } from 'redux';

import initialState from './initialState';
import test from './testReducer';


const appReducer = combineReducers({
  test,
//   login,
  
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(initialState, action);
  }

  return appReducer(state, action);
};

export default rootReducer;