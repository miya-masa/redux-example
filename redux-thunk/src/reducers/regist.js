import { REQUEST_REGIST, RECEIVED_REGIST } from '../actions/';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  isRegisting: false
});

const regist = (previousState = initialState, action) => {
  switch (action.type) {
    case REQUEST_REGIST:
      return previousState.set('isRegisting', true);
    case RECEIVED_REGIST:
      return previousState.set('isRegisting', false);
    default:
      return previousState;
  }
};

export default regist;
