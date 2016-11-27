import { REFLESH_TODOS } from '../actions';
import Immutable from 'immutable';

/*
 * 初期状態
 */
const initialState = Immutable.Map({
  todos: []
});

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case REFLESH_TODOS:
      return Immutable.Map({
        'todos': action.payload
      });
    default:
  }
  return previousState;
};

export default reducer;
