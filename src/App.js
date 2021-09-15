import React from 'react';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Delete from './components/Delete';
import List from './components/List';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const tables = require('./tables.json').tables;
  return (
    <Router>
      {tables.map(
        t => (
          <>
            <h2>{t} CRUD:</h2>
            <ul>
              <li><Link to={`/create/${t}`}>Create</Link></li>
              <li><Link to={`/read/${t}/1`}>Read</Link></li>
              <li><Link to={`/update/${t}/1`}>Update</Link></li>
              <li><Link to={`/delete/${t}/1`}>Delete</Link></li>
              <li><Link to={`/list/${t}`}>List</Link></li>
            </ul>
          </>
        )
      )}
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/read">
          <Read />
        </Route>
        <Route path="/update">
          <Update />
        </Route>
        <Route path="/delete">
          <Delete />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
