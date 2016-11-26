import { CHANGE_A, CHANGE_B, CLEAR } from '../actions/';
import Immutable from 'immutable';

/**
 * 初期状態
 */
const initialState = Immutable.Map({
  a: 0,
  b: 0,
  errorA: '',
  errorB: ''
});

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
const sampleReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case CHANGE_A:
      return previousState.set('a', action.payload.value).set('errorA', action.payload.errorMessage);
    case CHANGE_B:
      return previousState.set('b', action.payload.value).set('errorB', action.payload.errorMessage);
    case CLEAR:
      return initialState;
    default:
  }
  return previousState;
};

export default sampleReducer;
