export const CHANGE_A = 'CHANGE_A';
export const CHANGE_B = 'CHANGE_B';
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
export const regist = (props) => {
  console.log(props);
  return {
    type: CLEAR
  }
};
