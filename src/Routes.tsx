import {MainPage} from 'pages/Main'
import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

/**
 * Routes of the application.
 * @return Switch of the routes
 */
export const Routes: React.FC = () => (
  <Switch>
    <Route exact component={MainPage} path="/" />
    <Redirect to="/" />
  </Switch>
)
