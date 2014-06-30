import React from 'react';
import ReactRouter from 'react-nested-router';

import App from './app';
import Session from './session';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

export default Router(
  <Route handler={App}>
    <Route name="session" path="session/:sessionId" handler={Session}/>
  </Route>
)
