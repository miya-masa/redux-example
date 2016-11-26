import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducers from './reducers/';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/index.css';

injectTapEventPlugin();

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
    <AppContainer />
   </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
