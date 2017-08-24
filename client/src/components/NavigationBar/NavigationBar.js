import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import SignInPage from "../SignIn/SignInPage";
import Home from "../Home/Home";
import SignUpPage from "../SignUp/SignUpPage";
import Dashboard from "../Dashboard/Dashboard";
import GroupPage from "../GroupPage/GroupPage";

class NavigationBar extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapse-navbar" aria-controls="collapse-navbar" aria-expanded="false">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">Receipt Tracker</Link>
          <div className="collapse navbar-collapse" id="collapse-navbar">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="btn btn-danger" to="/signin">Sign In</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/register" component={SignUpPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/group_page/:_id" component={GroupPage} />
        </Switch>
      </div>
    );
  }
}

export default NavigationBar;
