import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

const App = props => {
  return (
    <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
         a : <input type="text" name="a" value={props.a} onChange={props.onChangeA}/>
        </p>
        <p>
         b : <input type="text" name="b" value={props.b} onChange={props.onChangeB}/>
        </p>
        <p>
        a + b = {props.a} + {props.b} = {props.a + props.b}
        </p>
      </div>
    );
}

export default App;
