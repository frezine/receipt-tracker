import React, { Component } from "react";
import Form from "../Forms/Form";
import Validate from "../../utils/Validate";
import { Link, Redirect } from "react-router-dom";
import { SignInHeader, SignInForm, SignInButton } from "./SignInForm.style";

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: {},
      success: false,
      submitted: false,
      user_id: ""
    }
    this.isValid = this.isValid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

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
      this.setState({ submitted: true, errors: {} });
      this.props.userSignInRequest(this.state)
      .then(
        (res) => { this.setState({ success: true, submitted: false,
          user_id: res.data._id}) },
        (err) => { this.setState({ submitted: false, errors: err.response.data}) }
      );
    }

  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    const { errors } = this.state;
    return (
      <div>
        <SignInForm onSubmit={this.onSubmit}>
          <SignInHeader>Sign In</SignInHeader>
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
            <SignInButton disabled={this.state.submitted} className="btn btn-danger btn-lg">Submit</SignInButton>
          </div>
        </SignInForm>
        { this.state.success &&
          <Redirect to={{
            pathname: "/dashboard",
            state: {user_id: this.state.user_id}
          }}/>
        }
      </div>
    );
  }
}

export default SignIn;
