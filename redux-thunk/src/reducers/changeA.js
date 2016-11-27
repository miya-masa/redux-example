import { CHANGE_A, CLEAR } from '../actions/';
import Immutable from 'immutable';

/**
 * 初期状態
 */
const initialState = Immutable.Map({
  a: 0,
  errorA: '',
});

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
const changeA = (previousState = initialState, action) => {
  switch (action.type) {
    case CHANGE_A:
      return previousState.set('a', action.payload.value).set('errorA', action.payload.errorMessage);
    case CLEAR:
      return initialState;
    default:
  }
  return previousState;
};

export default changeA;
