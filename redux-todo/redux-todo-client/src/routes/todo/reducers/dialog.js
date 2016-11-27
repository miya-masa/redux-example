import { OPEN_DIALOG, CLOSE_DIALOG } from '../actions';
import Immutable from 'immutable';

/*
 * 初期状態
 */
const initialState = Immutable.Map({
  isOpened: false
});

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return previousState.set('isOpened', true);
    case CLOSE_DIALOG:
      return previousState.set('isOpened', false);
    default:
  }
  return previousState;
};

export default reducer;
