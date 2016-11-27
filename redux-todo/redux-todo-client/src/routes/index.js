import React from 'react'
import { Router, IndexRoute, Route, Link } from 'react-router'
import Todo from './todo'
import { history } from '../store'
import Layout from '../layouts/Layout'


const Header = (props) => {
  return (
    <Layout>
      {props.children}
    </Layout>
    );
}

const Home = (props) => {
  return (
    <div>
      <h1> Hello Redux TodoList!! </h1>
       <ul>
       <li><Link to="/">Topへ</Link></li>
       <li><Link to="/todo">Todoリストページへ</Link></li>
       </ul>
    </div>
    );
}

const RootRouter = () => {
  return (
    <Router history={history}>
      <Route path="/" component={Header}>
        <IndexRoute component={Home}/>
        <Route path="todo" component={Todo}/>
      </Route>
    </Router>
    );
};

export default RootRouter;
