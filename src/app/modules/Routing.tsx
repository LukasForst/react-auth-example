import { ProvideAuth } from '../hooks/UseAuth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import PrivateRoute from './PrivateRoute';
import UserProfile from './UserProfile';
import HomePage from '../pages/home/HomePage';
import React from 'react';

export const loginRoute = '/login';

export default function Routing() {
  return (
    <ProvideAuth>
      <BrowserRouter>
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
      </BrowserRouter>
    </ProvideAuth>
  );
}
