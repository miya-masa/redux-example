import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import reducers from './reducers/';
import './styles/index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
  <AppContainer />
  </Provider>,
  document.getElementById('root')
);
