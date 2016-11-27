import { CLEAR_FORM, CHANGE_TODO, CHANGE_LIMIT_DATE } from '../actions';
import Immutable from 'immutable';

/*
 * 初期状態
 */
const initialState = Immutable.Map({
  todo: '',
  limitDate: new Date()
});

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case CHANGE_TODO:
      return previousState.set('todo', action.payload);
    case CHANGE_LIMIT_DATE:
      return previousState.set('limitDate', action.payload);
    case CLEAR_FORM:
      return initialState;
    default:
  }
  return previousState;
};

export default reducer;
