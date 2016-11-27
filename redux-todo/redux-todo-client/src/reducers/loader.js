import { LOADING, HIDE } from '../actions/loading';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  status: 'hide',
  loadingQueue: []
});

export default function loader(state = initialState, action) {
  const loadingQueue = state.get('loadingQueue');
  switch (action.type) {
    case LOADING:
      loadingQueue.push('loading');
      return state.set('status', 'loading').set('loadingQueue', loadingQueue);
    case HIDE:
      loadingQueue.pop();
      if (loadingQueue.length >= 1) {
        return state.set({
          loadingQueue
        });
      }
      return state.set('status', 'hide').set('loadingQueue', loadingQueue);
    default:
      return state;
  }
}
