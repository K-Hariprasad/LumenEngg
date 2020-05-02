import React, { Component } from 'react';
import '../App.css';
import { Route, Redirect, Switch,Link } from 'react-router-dom'
import home from './Home'
import About from './AboutUs'
import Contact from './ContactUs'

class Navbar extends Component {
  render() {
    return (
      <div className="content">

<nav className="Mynavbar navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">LOGO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navmenu">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navmenu">
    <div className="navbar-nav">
      <Link to={'/home'} className="nav-item nav-link " >Home </Link>
      <Link to={'/about'} className="nav-item nav-link " >About Us </Link>
      <Link to={'/contact'} className="nav-item nav-link " >Contact Us </Link>
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

export default Navbar;

