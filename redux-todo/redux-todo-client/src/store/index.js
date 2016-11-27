import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  applyMiddleware(thunk, createLogger())
);

export const history = syncHistoryWithStore(browserHistory, store);

export default function configureStore() {
  return store;
}
