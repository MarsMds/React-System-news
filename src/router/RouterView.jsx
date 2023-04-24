import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from '../views/login'
import Home from '../views/sandBox'

const RouterView = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default RouterView
