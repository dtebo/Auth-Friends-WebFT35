import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import FriendsList from './components/Friends/FriendsList';
import FriendForm from './components/Friends/FriendForm';
import Login from './components/Login/Login';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/protected'>Friends List</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <PrivateRoute exact path='/protected' component={FriendsList} />
          <PrivateRoute exact path='/friends/form' component={FriendForm} />
          <PrivateRoute path='/friends/form/:id' component={FriendForm} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
