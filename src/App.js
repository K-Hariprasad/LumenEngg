import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch,Link } from 'react-router-dom'
import home from './Home'
import About from './AboutUs'
import Contact from './ContactUs'

class App extends Component {
  render() {
    return (
      <div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">LOGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navmenu">
    <div class="navbar-nav">
      <Link to={'/home'} class="nav-item nav-link " >Home </Link>
      <Link to={'/about'} class="nav-item nav-link " >About Us </Link>
      <Link to={'/contact'} class="nav-item nav-link " >Contact Us </Link>
    </div>
  </div>
</nav>

            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/home" />)} />
              <Route exact path="/home" component={home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
    );
  }
}

export default App;

