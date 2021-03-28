import { ProvideAuth } from '../hooks/UseAuth';
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import PrivateRoute from './PrivateRoute';
import UserProfile from './UserProfile';
import HomePage from '../pages/home/HomePage';
import React from 'react';

export const loginRoute = '/login';

/**
 * Creates routing in the application, should be on the top level.
 */
export default function Routing() {
  // if there's some problem with hashrouter you can try this approach
  // https://github.com/ReactTraining/history/issues/435
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
