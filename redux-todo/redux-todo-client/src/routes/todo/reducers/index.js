import { combineReducers } from 'redux';
import form from './form';
import dialog from './dialog';
import table from './table';

export default combineReducers({
  form,
  dialog,
  table
});
