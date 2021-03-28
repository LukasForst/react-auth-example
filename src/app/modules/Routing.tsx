import { ProvideAuth } from '../hooks/UseAuth';
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import PrivateRoute from './PrivateRoute';
import UserProfile from './UserProfile';
import HomePage from '../pages/home/HomePage';
import React from 'react';

export const loginRoute = '/login';

export default function Routing() {
  return (
    <ProvideAuth>
      <HashRouter>
        <Switch>
          <Route path={loginRoute}>
            <LoginPage/>
          </Route>

          <PrivateRoute path="/user">
            <UserProfile/>
          </PrivateRoute>

          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </HashRouter>
      {/* redirect traffic to hashrouter */}
      <BrowserRouter>
        {!window.location.hash && (<Redirect to={`#${window.location.pathname}`}/>)}
      </BrowserRouter>
    </ProvideAuth>
  );
}
