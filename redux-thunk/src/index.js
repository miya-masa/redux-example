import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/';

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
    <AppContainer />
   </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
