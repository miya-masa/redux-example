import { combineReducers } from 'redux';
import changeA from './changeA';
import changeB from './changeB';
import regist from './regist';

export default combineReducers({
  changeA,
  changeB,
  regist
});
