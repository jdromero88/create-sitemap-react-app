import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import App from './App'
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = { App }/>
        <Route path='/about' component = { About } />
        <Route path='/projects' component = { Projects } />
        <Route path='/contact' component = { Contact }/>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
