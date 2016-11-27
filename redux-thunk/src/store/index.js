import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers/';

export default function configureStore() {
  return createStore(reducers, applyMiddleware(thunk, createLogger()))
}
