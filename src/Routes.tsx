import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {HomePage} from './pages/Home'

/**
 * Routes of the application.
 * @return Switch of the routes
 */
export const Routes: React.FC = () => (
  <Switch>
    <Route exact component={HomePage} path="/" />
    <Redirect to="/" />
  </Switch>
)
