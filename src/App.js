import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import increment, { incrementAsync, decrement } from './actions';
import Create from './components/Create';
import List from './components/List';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count)

  return (
    <Router>
      <ul>
      <li><Link to="/create/testtypes/3">Create</Link></li>
      <li><Link to="/list">List</Link></li>
      </ul>
      <Switch>
      <Route path="/create">
          <Create />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
