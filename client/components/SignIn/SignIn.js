import React, { Component } from "react";
import { FormSignIn, FormHeader, InputField } from "./SignIn.style";

class SignIn extends Component{
  render(){
    return (
      <div className="container">
        <FormSignIn>
          <FormHeader>Please sign in</FormHeader>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <InputField type="email" id="inputEmail" className="form-control" placeholder="Email Address" required autofocus></InputField>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <InputField type="password" id="inputPassword" className="form-control" placeholder="Password" required></InputField>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </FormSignIn>
      </div>
    );
  }
}

export default SignIn;
