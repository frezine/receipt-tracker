import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";

class NavigationBar extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Navbar</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className ="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className ="nav-link" to="/signin">Sign In</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={SignIn}/>
        </Switch>
      </div>
    );
  }
}

export default NavigationBar;
