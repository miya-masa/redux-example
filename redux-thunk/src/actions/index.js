export const CHANGE_A = 'CHANGE_A';
export const CHANGE_B = 'CHANGE_B';
export const REQUEST_REGIST = 'REQUEST_REGIST';
export const RECEIVED_REGIST = 'RECEIVED_REGIST';
export const CLEAR = 'CLEAR';

const validate = (value) => Number.isNaN(value);

const changeText = (value, type) => {
  const numValue = value - 0;
  if (validate(numValue)) {
    return {
      type,
      payload: {
        value,
        errorMessage: '整数値を入力してください'
      }
    }
  }
  return {
    type,
    payload: {
      value: numValue,
      errorMessage: ''
    }
  }
}

export const changeA = (value) => changeText(value, CHANGE_A);
export const changeB = (value) => changeText(value, CHANGE_B);

const receivedRegist = () => ({
  type: RECEIVED_REGIST
})

const requestRegist = () => ({
  type: REQUEST_REGIST
})

// reduxとは関係ないただの非同期実行関数。
const asyncFunction = (props) => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('finished regist');
      console.log(props);
      resolve();
    }, 2000);
  });
}

const clear = () => ({
  type: CLEAR
});

export const registIfNeeded = (props) => {
  return (dispatch, getState) => {
    if (getState().regist.get('isRegisting')) {
      return Promise.resolve();
    }
    dispatch(requestRegist());
    return asyncFunction(props)
      .then(() => dispatch(receivedRegist()))
      .then(() => dispatch(clear()));
  };
}
