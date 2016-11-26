'use strict';

var _redux = require('redux');

/**
 * 初期状態
 */
var initialState = {
  a: 0,
  b: 0
};

// reducerは変更がある場合は必ず新しいオブジェクトを返す！
var sampleReducer = function sampleReducer() {
  var previousState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

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
  }
  return previousState;
};

// Flux-storeの作成
var store = (0, _redux.createStore)(sampleReducer);

// 参照はOK。
// 
var subscriber = function subscriber() {
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
