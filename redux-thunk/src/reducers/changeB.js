import { CHANGE_B, CLEAR } from '../actions/';
import Immutable from 'immutable';

/**
 * 初期状態
 */
const initialState = Immutable.Map({
  b: 0,
  errorB: ''
});

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
const changeB = (previousState = initialState, action) => {
  switch (action.type) {
    case CHANGE_B:
      return previousState.set('b', action.payload.value).set('errorB', action.payload.errorMessage);
    case CLEAR:
      return initialState;
    default:
  }
  return previousState;
};

export default changeB;
