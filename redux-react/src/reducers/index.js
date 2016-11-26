import { CHANGE_A, CHANGE_B } from '../actions/';
/**
 * 初期状態
 */
const initialState = {
  a: 0,
  b: 0
}

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
const sampleReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case CHANGE_A:
      return Object.assign({}, previousState, {
        a: action.payload.value
      });
    case CHANGE_B:
      return Object.assign({}, previousState, {
        b: action.payload.value
      });
    default:
  }
  return previousState;
};

export default sampleReducer;
