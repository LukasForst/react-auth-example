import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from './hooks/UseAuth';
import UserProfile from './modules/UserProfile';
import LoginPage from './pages/login/LoginPage';
import HomePage from './pages/home/HomePage';


function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/user">
              <UserProfile/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>

    </div>
  );
}

export default App;
