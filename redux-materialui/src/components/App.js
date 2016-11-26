import React from 'react';
import logo from '../styles/logo.svg';
import style from '../styles/App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const App = props => {
  return (
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <form action="#" onSubmit={ (ev) => {
      ev.preventDefault();
      props.onSubmit(props)
    }}>
        <TextField hintText="value a" name="valueA" floatingLabelText="VALUE A" value={props.textA} onChange={props.onChangeA} errorText={props.errorA} />
        <TextField hintText="value b" name="valueB" floatingLabelText="VALUE B" value={props.textB} onChange={props.onChangeB} errorText={props.errorB} />
        <RaisedButton label="Primary" primary={true} style={style} type="submit" />
        </form>
        <p>
        a + b = {props.a} + {props.b} = {props.calcResult}
        </p>
      </div>
    );
}

export default App;
