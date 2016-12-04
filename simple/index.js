import { createStore } from 'redux';

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
    case 'CHANGE_A':
      return Object.assign({}, previousState, {
        a: action.payload.value
      });
    case 'INCREMENT_A':
      return Object.assign({}, previousState, {
        a: previousState.a + 1
      });
    case 'CHANGE_B':
      return Object.assign({}, previousState, {
        b: action.payload.value
      });
    case 'INCREMENT_B':
      return Object.assign({}, previousState, {
        b: previousState.b + 1
      });
    default:
  }
  return previousState;
};

// Flux-storeの作成
const store = createStore(sampleReducer);

// 参照はOK。
// 
const subscriber = () => {
  console.log(store.getState());
};

// storeの変更を検知するサブスクライバの設定
store.subscribe(subscriber);

// アクション発行
console.info('dispatch CHANGE_A');
store.dispatch({
  type: 'CHANGE_A',
  payload: {
    value: 50
  }
});

console.info('dispatch CHANGE_B');
store.dispatch({
  type: 'CHANGE_B',
  payload: {
    value: 20
  }
});

console.info('dispatch INCREMENT_A');
store.dispatch({
  type: 'INCREMENT_A'
});

console.info('dispatch INCREMENT_B');
store.dispatch({
  type: 'INCREMENT_B'
});

console.info('dispatch NOTHING');
store.dispatch({
  type: 'NOTHING'
});
