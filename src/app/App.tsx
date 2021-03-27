import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from './hooks/UseAuth';
import Login from './modules/Login';
import UserProfile from './modules/UserProfile';


function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/user">User</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/user">
                <UserProfile/>
              </Route>
            </Switch>

          </div>
        </Router>
      </ProvideAuth>

    </div>
  );
}

export default App;
