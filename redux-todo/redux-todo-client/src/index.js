import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import RootRouter from './routes';
import { initialize } from './actions/initialize';

injectTapEventPlugin();

const store = configureStore();
initialize.forEach(action => store.dispatch(action()));

ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
    <RootRouter />
   </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
