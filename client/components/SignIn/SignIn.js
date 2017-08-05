import React, { Component } from "react";
import Form from "../SignUp/Form";

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    const { errors } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h2>Sign In</h2>
          <Form
            name="username"
            value={this.state.username}
            label="Username"
            error={errors.username}
            type="text"
            onChange={this.onChange}
          />
          <Form
            name="password"
            value={this.state.password}
            label="Password"
            error={errors.password}
            type="password"
            onChange={this.onChange}
          />
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
