import React, { Component } from "react";
import Form from "../SignUp/Form";
import Validate from "../../../server/utils/Validate";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";

import SignedInPage from "../LoggedIn/DisplayPage";

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "I love dan",
      password: "",
      errors: {},
      successLogIn: false
    }
    this.successLogIn = this.state["successLogIn"];
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  isValid(){
    const { errors, valid } = Validate(this.state);
    if (!valid){
      this.setState({ errors });
    }
    return valid;
  }


  onSubmit(e){
    e.preventDefault();
    if (this.isValid()){
      var rest= "";
      axios.post("/api/authenticate", this.state)
      .then(
        (response) => {
          var data = response.data;
          console.log(data);
          if (data==null) {
            console.log("data null");
          }
          else {
            this.setState({ successLogIn: true });
            console.log("after they correctly logged in")
            return <Route path="/loggedIn" component={SignedInPage} />;
          }
        },
        (err) => { console.log(err) }
      );
      console.log("after post");

    }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    const { errors } = this.state;


    console.log("hi");
    //console.log(redirectToLoggedInPage);
    console.log(this.successLogIn);


    if ( errors.successLogIn) {
      console.log("in sueccesLogIn");
      return (
        <h>hola</h>
      )
    }

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h2>Sign In</h2>
          <Form
            name="username"
            value={this.state.username}
            label="Username"
            required={false}
            type="text"
            error={errors.username}
            onChange={this.onChange}
          />
          <Form
            name="password"
            value={this.state.password}
            label="Password"
            required={false}
            type="password"
            error={errors.password}
            onChange={this.onChange}
          />
          <div className="form-group">
            <Link to="/register">Register an account</Link>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
