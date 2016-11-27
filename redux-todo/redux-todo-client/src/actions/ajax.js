import { loading, hide } from './loading';

export default function ajax(exec) {
  return (dispatch, getState) => {
    dispatch(loading());
    exec(dispatch, getState).then(() => dispatch(hide()));
  };
}
