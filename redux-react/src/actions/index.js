export const CHANGE_A = 'CHANGE_A';
export const CHANGE_B = 'CHANGE_B';

export const changeA = (value) => ({
  type: CHANGE_A,
  payload: {
    value
  }
});

export const changeB = (value) => ({
  type: CHANGE_B,
  payload: {
    value
  }
});
